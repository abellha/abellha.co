import { Wrapper } from "@/components/common/grid"
import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import View from "@/components/view"
import { LazyLoadImage } from "react-lazy-load-image-component"

const OurMentorsSerction = styled(Wrapper)`
  @media (min-width: ${breakpoints.desktop}) {
    background-repeat: no-repeat;
    background-image: url(${require(`images/our-mentors-right.svg?inline`)});
    background-position: right center;
    background-size: auto 700px;
  }
`

const Mentors = styled.div`
  display: flex;
  flex-wrap: wrap;  
`

const Mentor = styled(View)`
  width: 50%;
  @media (min-width: ${breakpoints.desktop}) {
    width: 33.33%
  }
`

const Background = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.primary.dark};
  margin: 7px;
  border-radius: 5px;
  min-height: 167px;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
  }
`

const Photo = styled(LazyLoadImage)`
  border-radius: 50%;
  width: 70px;
  height: 70px;

  @media (min-width: ${breakpoints.desktop}) {
    margin-right: 20px;
  }
`

const Name = styled.h3`
  letter-spacing: 0.2px;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-align: left;
  }
`

const Role = styled.p`
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.5rem;
    line-height: 2.4rem;
    text-align: left;
  }
`

export { OurMentorsSerction, Mentors, Mentor, Background, Inner, Photo, Name, Role }
