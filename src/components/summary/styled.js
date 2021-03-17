import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"

const SummaryStyled = styled(View)`
  background: none ${({ theme }) => theme.backgrounds.secundary.dark};
  color: ${({ theme }) => theme.colors.secundary};

  @media (min-width: ${breakpoints.desktop}) {
  }
`

const Info = styled.p``

const InfoNumber = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-family: "Bellota Text", cursive;
  font-weight: 300;
  font-size: 4.6rem;
  line-height: 7rem;
  letter-spacing: -2.3px;
  min-width: 100px;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 7.6rem;
    line-height: 10rem;
  }
`

const InfoText = styled.span`
  display: inline-block;
  width: 160px;
  font-family: "Bellota Text", cursive;
  font-size: 1.6rem;
  line-height: 2.3rem;
  font-weight: 400;

  ::before {
    display: block;
    margin: 5px 0;
    content: "";
    width: 30px;
    height: 2px;
    background: none ${({ theme }) => theme.backgrounds.tertiary};
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2rem;
    line-height: 2.3rem;
    width: 175px;
  }
`

export { SummaryStyled, Info, InfoNumber, InfoText }
