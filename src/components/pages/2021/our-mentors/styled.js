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
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 33.33%;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.primary.dark};
  margin: 10px;
  border-radius: 5px;
  justify-content: center;
  padding: 10px 30px;
  min-height: 180px;

  @media (min-width: ${breakpoints.desktop}) {
    justify-content: start;
  }
`

const Inner = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
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
const NameRole = styled.div`
  width: 100%;
`

const Name = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 700;
  text-align: center;
  width: 100%;

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
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: left;
  }
`

export {
  OurMentorsSerction,
  Mentors,
  Mentor,
  Box,
  Inner,
  Photo,
  NameRole,
  Name,
  Role,
}
