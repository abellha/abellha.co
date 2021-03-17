import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import { LazyLoadImage } from "react-lazy-load-image-component"

const LogoStyled = styled.section``

const ImageItem = styled.div`
  width: 50%;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}) {
    width: auto;
  }
`

const Image = styled(LazyLoadImage)`
  mix-blend-mode: multiply;
  min-width: 70%;
  max-width: 95%;
`

export { LogoStyled, ImageItem, Image }
