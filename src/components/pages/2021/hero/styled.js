import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"
import Title from "@/components/title"

const HeroStyled = styled(View)`
  background-color: transparent;
  background-image: url(${require(`images/background_hero_2021.jpg?inline`)});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${breakpoints.desktop}) {
    background-position: right bottom;
    background-size: cover;
  }
`

const TitleStyled = styled.p``

const Message = styled(Title)``

export { HeroStyled, TitleStyled, Message }
