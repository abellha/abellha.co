import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"
import Paragraph from "@/components/common/paragraph"
import { LazyLoadImage } from "react-lazy-load-image-component"

const MentorsStyled = styled(View)`
  background-color: ${({ theme }) => theme.backgrounds.primary.dark};
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  @media (min-width: ${breakpoints.desktop}) {
    background-image: url(${require(`images/bg_transparent.png?inline`)});
  }
`

const MentorItem = styled(View)`
  background: ${({ theme }) => theme.backgrounds.primary.light};
  background: linear-gradient(
    ${({ theme }) => theme.backgrounds.tertiary} 80px,
    ${({ theme }) => theme.backgrounds.tertiary} 80px,
    ${({ theme }) => theme.backgrounds.primary.light} 80px
  );
  padding: 40px 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.desktop}) {
    padding: 40px;
  }
`

const Photo = styled(LazyLoadImage)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.backgrounds.primary.light};

  @media (min-width: ${breakpoints.desktop}) {
    width: 120px;
    height: 120px;
  }
`

const TestimonialStyled = styled(Paragraph)`
  font-size: 1.4rem;
  line-height: 2.4rem;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`
const InfoStyled = styled(Paragraph)`
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 700;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
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

export {
  MentorsStyled,
  MentorItem,
  Photo,
  TestimonialStyled,
  InfoStyled,
  ButtonPrev,
  ButtonNext,
}
