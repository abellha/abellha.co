import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"

const HeroStyled = styled(View)`
  background-color: ${({ theme }) => theme.backgrounds.primary.light};

  @media (min-width: ${breakpoints.desktop}) {
    background-image: url(${require(`images/background_hero_portfolio.svg?inline`)});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: auto 400px;
    background-position: right bottom;
    margin-bottom: -140px;
  }
`

export default HeroStyled
