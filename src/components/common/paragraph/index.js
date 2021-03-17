import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"

const Paragraph = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  ${(props) => {
    switch (props.size) {
      case "small":
        return `
        font-size: 1.2rem;
        line-height: 2rem;
      
        @media (min-width: ${breakpoints.desktop}) {
          font-size: 1.4rem;
          line-height: 3rem;
        }
        `
      default:
        break
    }
  }}

  ${(props) => {
    switch (props.type) {
      case "error":
        return `color: ${props.theme.colors.error};`

      default:
        break
    }
  }}

  ${(props) => {
    switch (props.color) {
      case `dark`:
        return `
          color: ${props.theme.colors.primary};
        `
      case `light`:
        return `
        color: ${props.theme.colors.secundary};
      `
      default:
        break
    }
  }}
`
export default Paragraph
