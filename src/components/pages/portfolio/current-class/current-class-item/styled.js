import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Image = styled(LazyLoadImage)``

const Item = styled.div`
  border-bottom: 1px solid #ccc;

  @media (min-width: ${breakpoints.desktop}) {
    flex-grow: 1;
  }

  > div {
    border-right: 1px solid #ccc;
  }

  &#item5 {
    > div {
      border-right: none;
    }
  }
`

const Heading = styled.div`
  min-height: 125px;
  display: flex;
  align-items: center;
  border-bottom: ${(props) =>
    props.isActiveMobile ? "1px solid #ccc;" : "none"};
  background-color: ${(props) => (props.isActiveMobile ? "#F2F2F2" : "#FFF")};
  cursor: pointer;
  padding: 10px 15px;
  position: relative;

  :before {
    display: block;
    content: "";
    height: 10px;
    width: 10px;
    background-repeat: no-repeat;
    background-image: url(${require(`images/arrow.png?inline`)});
    background-position: center;
    position: absolute;
    right: 30px;
    z-index: 9;
    top: calc(50% - 10px);
    transform: ${(props) =>
      props.isActiveMobile ? "rotate(180deg)" : "rotate(0)"};
  }
  @media (min-width: ${breakpoints.desktop}) {
    border-bottom: ${(props) =>
      props.isActiveDesktop ? "1px solid #ccc;" : "none"};
    background-color: ${(props) =>
      props.isActiveDesktop ? "#F2F2F2" : "#FFF"};
    justify-content: center;
    border-bottom: ${(props) =>
      props.isActiveDesktop ? "3px solid #333;" : "none"};
    :before {
      display: none;
    }
  }
`

const HeadingTitle = styled.h3`
  text-indent: -9999px;
  overflow: hidden;
`

const HeadingImg = styled.img`
  max-width: 196px;
  max-height: 77px;
  mix-blend-mode: multiply;
`

const Body = styled.div`
  display: ${(props) => (props.isActiveMobile ? "block" : "none")};
  padding: 20px 25px;
  @media (min-width: ${breakpoints.desktop}) {
    display: block;
  }
`

const InfoTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  color: #000;
  font-size: 1.8rem;
  line-height: 2.5rem;
`
const DescriptionBody = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #000;
  font-size: 1.4rem;
  line-height: 2.4rem;
`
const BigNumber = styled.p`
  font-family: "Bellota Text", cursive;
  font-weight: 700;
  color: #f8cd4a;
  font-size: 6rem;
  line-height: 7rem;
  letter-spacing: -3px;
`
const BigNumberDescription = styled.p`
  font-family: "Bellota Text", cursive;
  color: #333333;
  font-size: 1.6rem;
  line-height: 2rem;
`
const TestimonialItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const TestimonialPhoto = styled.p``

const TestimonialInfo = styled.div`
  margin-left: 15px;
`
const TestimonialID = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  color: #000;
  font-size: 1.6rem;
  line-height: 2rem;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.8rem;
    line-height: 2.6rem;
  }
`
const TestimonialCompany = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #000;
  font-size: 1.6rem;
  line-height: 2rem;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.8rem;
    line-height: 2.6rem;
  }
`
const TestimonialDesc = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #333;
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-style: italic;
  padding-top: 40px;
  background-image: url(${require(`images/testimonial.png?inline`)});
  background-repeat: no-repeat;
  background-position: left calc(0% + 15px);

  @media (min-width: ${breakpoints.desktop}) {
    background-image: none;
    padding-top: 0;
  }
`

export {
  Image,
  Item,
  Heading,
  HeadingTitle,
  HeadingImg,
  Body,
  InfoTitle,
  DescriptionBody,
  BigNumber,
  BigNumberDescription,
  TestimonialItem,
  TestimonialInfo,
  TestimonialPhoto,
  TestimonialID,
  TestimonialCompany,
  TestimonialDesc,
}
