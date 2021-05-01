import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"

const OurProgramsStyled = styled(View)`
  background-color: ${({ theme }) => theme.backgrounds.secundary.light};
  @media (min-width: ${breakpoints.desktop}) {
    background-repeat: no-repeat;
    background-image: url(${require(`images/our-programs-left.svg?inline`)});
    background-position: left 0;
    background-size: auto 850px;
  }
`

const OurProgramsInner = styled(View)`
  @media (min-width: ${breakpoints.desktop}) {
    background-repeat: no-repeat;
    background-image: url(${require(`images/our-programs-right.svg?inline`)});
    background-position: bottom right;
    background-size: auto 850px;
  }
`

const SwiperCard = styled(View)`
  overflow: hidden;
`

const CardHeading = styled.div`
  overflow: hidden;
`

const CardHeadingText = styled.h3`
  float: left;
  margin: 0 15px;
  text-align: left;
  font-size: 1.8rem;
  line-height: 2.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.highlight};

  &:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 10px auto 20px;
    background-color: ${(props) => props.theme.colors.highlight};
  }

  @media (min-width: ${breakpoints.desktop}) {
    float: none;
    text-align: center;
  }
`

const CardInner = styled.div`
  overflow: hidden;
  background: none ${({ theme }) => theme.backgrounds.primary.light};
  border-radius: 5px;
  position: relative;
  padding: 30px 20px;

  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 35px;
    padding-right: 35px;
  }
`

const CardTitle = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  line-height: 2.8rem;
`

const CardDescription = styled.p`
  display: block;
  overflow: hidden;
  font-size: 1.6rem;
  line-height: 2.4rem;

  @media (min-width: ${breakpoints.desktop}) {
  }
`

const Card = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.desktop}) {
  }
`

const CardList = styled.ul``

const CardListItem = styled.li`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  position: relative;
  padding-left: 10px;

  + li {
    margin-top: 5px;
  }

  &:before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 3px;
    height: 3px;
    position: absolute;
    top: 11px;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export {
  OurProgramsStyled,
  OurProgramsInner,
  SwiperCard,
  CardHeading,
  CardHeadingText,
  CardInner,
  CardTitle,
  CardDescription,
  Card,
  CardList,
  CardListItem,
}
