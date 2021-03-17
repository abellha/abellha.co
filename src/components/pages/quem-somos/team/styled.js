import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Photo = styled(LazyLoadImage)`
  width: 90px;
  height: 90px;
  border-radius: 50%;

  @media (min-width: ${breakpoints.desktop}) {
    width: 120px;
    height: 120px;
  }
`

const Name = styled.h3`
  font-family: "Bellota Text", cursive;
  letter-spacing: 0.2px;
  font-size: 2.4rem;
  line-height: 2.7rem;
`

const Role = styled.p`
  font-size: 1.8rem;
  line-height: 2.1rem;
  font-weight: 700;
`

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.7rem;
`

export { Photo, Name, Role, Description }
