import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

function Seo({ name, image }) {
  const [url, setUrl] = useState("")

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <Helmet>
      <title>{name ? name : "Recipe App"}</title>
      <meta name="og:title" content={name} />
      <meta name="og:image" content={image} />
      <link rel="canonical" href={url} />
      <meta name="og:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="preload" as="image" href={image} />
    </Helmet>
  )
}

export default Seo
