import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"
import Title from "@/components/title"
import Paragraph from "@/components/common/paragraph"
import { LazyLoadImage } from "react-lazy-load-image-component"

const NaMidiaStyled = styled(View)`
  @media (min-width: ${breakpoints.desktop}) {
  }
`

const NaMidiaItem = styled(View)`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.backgrounds.primary.dark};
  width: 270px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.desktop}) {
    width: 385px;
  }
`

const NaMidiaItemImage = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
`

const Button = styled.button`
  background-size: contain;
  overflow: hidden;
  text-indent: -9999px;
  width: 45px;
  height: 45px;
  padding: 0;
  border: 0;
  outline: none;
  margin: 0 5px;
`
const ButtonPrev = styled(Button)`
  background: transparent url(${require(`images/slider_nav_prev.svg?inline`)});
  ${(props) => props.isBeginning && `display: none`}
`
const ButtonNext = styled(Button)`
  background: transparent url(${require(`images/slider_nav_next.svg?inline`)});
  ${(props) => props.isEnd && `display: none`}
`

export { NaMidiaStyled, NaMidiaItem, NaMidiaItemImage, ButtonPrev, ButtonNext }
