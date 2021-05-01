import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"
import { LazyLoadImage } from "react-lazy-load-image-component"

const OurProgramsStyled = styled(View)`
  background: none ${({ theme }) => theme.backgrounds.secundary.light};
`

const SwiperCard = styled(View)`
  overflow: hidden;
  border-radius: 5px;
  background: none ${({ theme }) => theme.backgrounds.primary.light};
`

const CardInner = styled.div`
  overflow: hidden;
  background: none ${({ theme }) => theme.backgrounds.primary.light};
  border-radius: 5px;
  position: relative;
  margin-top: -30px;
  text-align: center;
  padding: 10px 5px;
`

const CardTitle = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 2.4rem;
  line-height: 2.7rem;
`

const CardDescription = styled.p`
  display: block;
  overflow: hidden;
  font-size: 1.4rem;
  line-height: 2rem;
  height: 80px;

  @media (min-width: ${breakpoints.desktop}) {
  }
`

const CardImage = styled(LazyLoadImage)`
  width: 100%;
  @media (min-width: ${breakpoints.desktop}) {
  }
`

export {
  OurProgramsStyled,
  SwiperCard,
  CardInner,
  CardTitle,
  CardDescription,
  CardImage,
}
