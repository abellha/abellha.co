import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"

const HeroStyled = styled(View)`
  background-color: transparent;
  background-image: url(${require(`images/background_hero_index.svg?inline`)});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: auto 300px;

  @media (min-width: ${breakpoints.desktop}) {
    background-position: 100% 100%;
    background-size: 750px auto;
  }
`

export default HeroStyled
