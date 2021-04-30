import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"
import { LazyLoadImage } from "react-lazy-load-image-component"

const SideBySideStyled = styled(View)`
  padding: 50px 0;
  background-image: none;

  @media (min-width: ${breakpoints.desktop}) {
    background-repeat: no-repeat;
    padding: 150px 0;

    ${(props) => {
      switch (props.model) {
        case `model-9`:
          return `
            background-image: url(${require(`images/sidebyside_model-9.svg?inline`)});
            background-position: bottom right;
            background-size: auto 360px;
          `
        case `model-8`:
          return `
            background-image: url(${require(`images/sidebyside_model-8.svg?inline`)});
            background-position: center bottom;
            background-size: auto 300px;
          `
        case `model-7`:
          return `
            background-image: url(${require(`images/sidebyside_model-7.svg?inline`)});
            background-position: left bottom;
            background-size: auto 240px;
          `
        case `model-6`:
          return `
            background-image: url(${require(`images/sidebyside_model-6.svg?inline`)});
            background-position: right calc(50% + 60px);
            background-size: auto 400px;
          `
        case `model-5`:
          return `
            background-image: url(${require(`images/sidebyside_model-5.svg?inline`)});
            background-position: center center;
            background-size: auto 250px;
          `
        case `model-4`:
          return `
            background-image: url(${require(`images/sidebyside_model-4.svg?inline`)});
            background-position: left calc(50% + 50px);
            background-size: auto 380px;
          `
        case `model-3`:
          return `
            background-image: url(${require(`images/sidebyside_model-3.svg?inline`)});
            background-position: right 60px;
            background-size: auto 350px;
          `
        case `model-2`:
          return `
            background-image: url(${require(`images/sidebyside_model-2.svg?inline`)});
            background-position: calc(50% + 200px) top ;
            background-size: 770px auto;
          `
        case `model-1`:
          return `
            background-image: url(${require(`images/sidebyside_model-1.svg?inline`)});
            background-position: left 60px;
            background-size: auto 400px;
          `
        default:
          break
      }
    }}
  }
`

const Blockquote = styled.blockquote`
  font-size: ${(props) => (props.small ? "1.4rem" : "1.8rem")};
  ${(props) => props.bold && "font-weight: 700;"};
  line-height: 3rem;
  border-left: 2px solid ${({ theme }) => theme.backgrounds.tertiary};
  padding-left: 20px;
`

const Image = styled(LazyLoadImage)`
  width: 100%;
`

export { SideBySideStyled, Blockquote, Image }
