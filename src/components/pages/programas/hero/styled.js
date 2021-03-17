import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"

const HeroStyled = styled(View)`
  background-color: ${({ theme }) => theme.backgrounds.primary.dark};
  background-image: url(${require(`images/background_hero_programas.png?inline`)});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: auto 300px;

  @media (min-width: ${breakpoints.desktop}) {
    background-position: right bottom;
    background-size: 35%;
  }
`

export default HeroStyled
