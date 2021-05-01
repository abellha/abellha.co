import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"

const ButtonStyled = styled.a`
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => {
    switch (props.type) {
      case `outline-yellow`:
        return `
          background: none;
          border: 1px solid ${props.theme.backgrounds.tertiary};
          color: ${props.theme.colors.secundary};

          :hover {
            background: none ${props.theme.backgrounds.tertiary};
            border: 1px solid ${props.theme.colors.highlight};
          }
        `
      case `light`:
        return `
            background: none ${props.theme.backgrounds.primary.dark};
            border: 1px solid ${props.theme.backgrounds.primary.dark};
            color: ${props.theme.colors.primary};

            :hover {
              background: none ${props.theme.backgrounds.secundary.light};
              border: 1px solid ${props.theme.backgrounds.secundary.light};
              color: ${props.theme.colors.secundary};
            }
          `
      case `secundary`:
        return `
          background: none ${props.theme.backgrounds.primary.light};
          border: 1px solid ${props.theme.colors.primary};

          :hover {
            background: none ${props.theme.backgrounds.secundary.light};
            color: ${props.theme.colors.secundary};
          }
        `
      case `primary`:
      default:
        return `
          background: none ${props.theme.backgrounds.tertiary};
          border: 1px solid ${props.theme.colors.highlight};

          :hover {
            background: none ${props.theme.backgrounds.secundary.light};
            color: ${props.theme.colors.secundary};
          }
      `
    }
  }}

  cursor: pointer;
  display: inline-block;
  width: 100%;
  max-width: 400px;
  border-radius: 50px;
  font-size: 1.4rem;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.8 ease-out;

  @media (min-width: ${breakpoints.desktop}) {
    width: auto;
  }

  ${(props) => {
    switch (props.display) {
      case `full`:
        return `
          display: block;
          width: 100%;
          max-width: unset;
          @media (min-width: ${breakpoints.desktop}) {
            display: block;
            width: 100%;
            max-width: unset;
          }
        `
      case `normal`:
        return `
          width: auto;
          @media (min-width: ${breakpoints.desktop}) {
            width: auto;
          }
        `
      default:
        break
    }
  }}

  ${(props) => {
    switch (props.padding) {
      case `small`:
        return `
        padding: 0 10px;

        @media (min-width: ${breakpoints.desktop}) {
          padding: 0 10px;
        }
        `
      default:
        return `
          padding: 0 30px;
          @media (min-width: ${breakpoints.desktop}) {
            padding: 0 30px;
            width: auto;
          }
        `
    }
  }}
`

export default ButtonStyled
