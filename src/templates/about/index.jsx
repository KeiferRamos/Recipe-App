import React from "react"
import People from "../../assets/images/youngsters.webp"
import CuttingBoard from "../../assets/icons/cutting-board.webp"
import Microwave from "../../assets/icons/microwave.webp"
import Toaster from "../../assets/icons/toaster.webp"
import Allen from "../../assets/icons/allen.webp"
import Nicole from "../../assets/icons/nicole.webp"
import Janna from "../../assets/icons/janna.webp"
import Donn from "../../assets/icons/donn.webp"
import Gordon from "../../assets/icons/gordon.webp"
import { PersonContainer, StyledDiv, Layout } from "./style"
import Wrapper from "../../Layout/wrapper"

function AboutUs() {
  return (
    <Wrapper>
      <Layout>
        <h1>About Us</h1>
        <img src={People} alt="" />
        <br />
        <p>
          Air plant cold-pressed chartreuse butcher waistcoat try-hard four loko
          pabst austin. Subway tile cloud bread distillery, lyft williamsburg
          fam you probably haven't heard of them affogato cold-pressed.
        </p>
        <br />
        <p>
          Succulents enamel pin master cleanse bushwick edison bulb skateboard
          8-bit pickled. Retro dreamcatcher affogato etsy raw denim hell of.
          Disrupt butcher gastropub banjo beard.
        </p>
        <br />
        <p>
          kombucha mukbang pitchfork la croix kinfolk echo park flexitarian
          celiac.
        </p>
        <span></span>
        <h2>What are We!</h2>
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
            Rerum porro deleniti ducimus iure repudiandae excepturi quo eligendi
            esse nostrum illum.
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
          <div>
            <img src={Janna} alt="janna profile" />
            <h2>Janna Morgana</h2>
            <p>Content Creator</p>
          </div>
        </PersonContainer>
      </Layout>
    </Wrapper>
  )
}

export default AboutUs
