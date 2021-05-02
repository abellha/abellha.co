import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"

const MessageStyled = styled.h1`
  display: block;
  overflow: hidden;
  text-indent: -9999px;
  width: 280px;
  height: 192px;
  background: transparent url(${require(`images/404.svg?inline`)}) 0 0 no-repeat;
  background-size: cover;
  margin: 200px auto 200px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 500px;
    height: 344px;
    margin: 300px auto 200px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 800px;
    height: 550px;
    margin: 300px auto 200px;
  }
`

export { MessageStyled }
