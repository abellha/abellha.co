import styled from "styled-components"
import PropTypes from "prop-types"
import breakpoints from "@/utils/breakpoints"

const Title = styled.h1`
  font-family: "Playfair Display", serif;

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
      case `highlight`:
        return `
        color: ${props.theme.colors.highlight};
        `
      default:
        break
    }
  }}

  ${(props) => {
    switch (props.weight) {
      case `regular`:
        return `
          font-weight: 400;
        `
      case `bold`:
        return `
          font-weight: 700;
        `
      case `light`:
      default:
        return `
        font-weight: 300;
      `
    }
  }}

  ${(props) => {
    switch (props.textShadow) {
      case `light`:
        return `
          text-shadow: 2px 2px ${props.theme.colors.secundary};
        `
      case `dark`:
        return `
          text-shadow: 2px 2px ${props.theme.colors.primary};
        `
      default:
        break
    }
  }}

  ${(props) => {
    switch (props.size) {
      case `size2`:
        return `
          font-size: 2.4rem;
          line-height: 2.7rem;

          @media (min-width: ${breakpoints.desktop}) {
            font-size: 3.6rem;
            line-height: 3.8rem;
          }
        `
      case `size1`:
      default:
        return `
        font-size: 3.2rem;
        line-height: 3.5rem;

        @media (min-width: ${breakpoints.desktop}) {
          font-size: 4.8rem;
          line-height: 5.1rem;
        }
      `
    }
  }}
`

Title.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["h1", "h2", "h3"]),
  color: PropTypes.oneOf(["dark", "light"]),
  type: PropTypes.oneOf(["size1", "size2"]),
}

export default Title
