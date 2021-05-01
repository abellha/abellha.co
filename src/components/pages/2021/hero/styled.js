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

const Logo = styled.a`
  display: inline-block;
  overflow: hidden;
  width: 170px;
  height: 38px;
  background: transparent url(${require(`images/abellha_white.png?inline`)}) 0 0
    no-repeat;
  background-size: cover;
  text-indent: -9999px;
  margin: 0 auto;
`

const TitleStyled = styled.p`
  color: ${(props) => props.theme.colors.secundary};
  font-size: 1.8rem;
  line-height: 2.2rem;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
`

const Message = styled(Title)``

export { HeroStyled, Logo, TitleStyled, Message }
