import React from "react"
import CuttingBoard from "../../assets/icons/cutting-board.webp"
import Microwave from "../../assets/icons/blender.webp"
import Toaster from "../../assets/icons/toaster.webp"
import Allen from "../../assets/icons/man.webp"
import Nicole from "../../assets/icons/woman.webp"
import Donn from "../../assets/icons/man(1).webp"
import Gordon from "../../assets/icons/man(2).webp"
import { PersonContainer, StyledDiv, Layout } from "./style"
import Wrapper from "../../Layout/wrapper"

function AboutUs() {
  return (
    <Wrapper>
      <Layout>
        <h1>About us</h1>
        <section>
          <StyledDiv>
            <img src={Toaster} alt="icon" />
            <h3>We're Passionate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              cupiditate dolor, eligendi quibusdam quaerat quidem!
            </p>
          </StyledDiv>
          <StyledDiv>
            <img src={CuttingBoard} alt="icon" />
            <h3>We're Food Lover</h3>
            <p>
              Rerum porro deleniti ducimus iure repudiandae excepturi quo
              eligendi esse nostrum illum.
            </p>
          </StyledDiv>
          <StyledDiv>
            <img src={Microwave} alt="icon" />
            <h3>We're Creative</h3>
            <p>
              iure repudiandae ducimus iure repudiandae excepturi quo deleniti
              ducimus iure repudiandae. eligendi esse nostrum illum.
            </p>
          </StyledDiv>
        </section>
        <span></span>
        <article>
          <h3>Mission</h3>
          <p>
            Sustainable scenester typewriter adaptogen, mukbang iceland
            vibecession wayfarers bespoke biodiesel authentic kombucha iPhone
            cornhole banjo.
          </p>
          <p>
            Meditation trust fund man braid snackwave, master cleanse freegan
            authentic normcore fixie pug. Mustache irony vibecession, sriracha
            chartreuse shabby chic keytar cold-pressed migas cray man bun
            tumeric 8-bit glossier.
          </p>
        </article>
        <article>
          <h3>Vision</h3>
          <p>
            Godard authentic tilde, yes plz shabby chic salvia meditation jean
            shorts stumptown pabst pickled thundercats mlkshk. Vegan sriracha
            sustainable, pug fit gatekeep readymade whatever pok pok gochujang
            tumblr.Viral asymmetrical gatekeep VHS mumblecore knausgaard
            waistcoat hashtag pork belly hella YOLO locavore venmo bitters.
          </p>
        </article>
        <span></span>
        <h2>Meet Our Team!</h2>
        <PersonContainer>
          <div>
            <img src={Gordon} alt="gordon profile" />
            <h2>Gordon Ramsay</h2>
            <p>Blogger / Head Chef</p>
          </div>
          <div>
            <img src={Allen} alt="allen profile" />
            <h2>Allen Rose</h2>
            <p>UI / UX Designer</p>
          </div>
          <div>
            <img src={Nicole} alt="nicole profile" />
            <h2>Nicole Sanchez</h2>
            <p>Web Developer</p>
          </div>
          <div>
            <img src={Donn} alt="allen profile" />
            <h2>Donn Chello</h2>
            <p>FullStack Developer / UX Designer</p>
          </div>
        </PersonContainer>
      </Layout>
    </Wrapper>
  )
}

export default AboutUs
