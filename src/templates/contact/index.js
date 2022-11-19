import React from "react"
import Wrapper from "../../Layout/wrapper"
import Letter from "../../assets/icons/letter.webp"
import { Layout, StyledForm, SubmitButton } from "./style"

function ContactUs() {
  return (
    <Wrapper>
      <Layout>
        <section>
          <img src={Letter} alt="" />
        </section>
        <StyledForm action="https://formspree.io/f/xpznkvov" method="POST">
          <h2>Please Send Us Message!</h2>
          <input
            type="text"
            id="full-name"
            name="full name"
            placeholder="Full name"
          />
          <input type="email" id="email" name="email" placeholder="Email" />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          />
          <SubmitButton type="submit">submit</SubmitButton>
        </StyledForm>
      </Layout>
    </Wrapper>
  )
}

export default ContactUs
