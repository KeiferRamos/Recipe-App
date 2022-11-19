const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      recipe: { nodes, totalCount },
    },
  } = await graphql(`
    query {
      recipe: allContentfulRecipe {
        totalCount
        nodes {
          name
          content {
            tags
          }
        }
      }
    }
  `)

  const {
    data: { blogs },
  } = await graphql(`
    query getBlogsTitles {
      blogs: allContentfulBlogs {
        nodes {
          title
        }
      }
    }
  `)

  blogs.nodes.forEach(({ title }) => {
    const pathName = title.toLowerCase().replace(/ /g, "-")
    createPage({
      path: `/blogs/${pathName}`,
      component: path.resolve(`src/templates/blog/index.js`),
      context: {
        title,
      },
    })
  })

  createPage({
    path: `/about`,
    component: path.resolve(`src/templates/about/index.js`),
    context: {
      page: "about",
    },
  })
  createPage({
    path: `/contact`,
    component: path.resolve(`src/templates/contact/index.js`),
    context: {
      page: "contact",
    },
  })
  createPage({
    path: `/`,
    component: path.resolve(`src/templates/home/index.js`),
    context: {
      page: "home",
    },
  })
  createPage({
    path: "/blogs",
    component: path.resolve(`src/templates/blogs/index.js`),
    context: {
      page: "blogs",
    },
  })

  let recipeTags = {}

  nodes.forEach(parent => {
    parent.content.tags.forEach(tag => {
      if (Object.keys(recipeTags).includes(tag)) {
        recipeTags[tag] = recipeTags[tag] + 1
      } else {
        recipeTags[tag] = 1
      }
    })
  })

  Object.keys(recipeTags).forEach(tag => {
    const title = tag.toLowerCase().replace(/ /g, "-")
    createPage({
      path: `/tags/${title}`,
      component: path.resolve(`src/templates/tags/index.js`),
      context: {
        tag,
      },
    })
  })

  Array.from(Array(totalCount / 7).keys()).forEach((count, i, array) => {
    createPage({
      path: `/recipes/${count + 1}`,
      component: path.resolve(`src/templates/recipes/index.js`),
      context: {
        skip: 7 * count,
        limit: 7,
        pages: array,
        tags: recipeTags,
      },
    })
  })

  nodes.forEach(({ name }) => {
    const title = name.toLowerCase().replace(/ /g, "-")

    createPage({
      path: `/${title}`,
      component: path.resolve(`src/templates/recipe/index.js`),
      context: {
        name,
      },
    })
  })
}
