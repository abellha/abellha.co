import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import Paragraph from "@/components/common/paragraph"
import { LazyLoadImage } from "react-lazy-load-image-component"

const TestimonialStyled = styled.section`
  .testimonial {
    padding-bottom: 40px;
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    .swiper-pagination-bullet {
      height: 8px;
      width: 8px;
      background: transparent;
      border: 1px solid #000;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #000;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    .testimonial {
      padding-bottom: 0;
      .swiper-pagination {
        display: none;
      }
      .swiper-button-prev,
      .swiper-button-next {
        display: block;
      }
    }
  }
`
const Photo = styled(LazyLoadImage)`
  width: 80px;
  height: 80px;
`
const Description = styled(Paragraph)`
  font-style: italic;
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

  position: absolute;
  top: 50%;
  margin-top: -22.5px;
  z-index: 10;
  cursor: pointer;
`
const ButtonPrev = styled(Button)`
  left: -70px;
  right: auto;

  ${(props) => {
    switch (props.isBeginning) {
      case true:
        return `
        display: none;
        `
      case false:
      default:
        return `
        background: transparent url(${require(`images/slider_nav_prev.svg?inline`)});
      `
    }
  }}
`
const ButtonNext = styled(Button)`
  right: -70px;
  left: auto;
  ${(props) => {
    switch (props.isEnd) {
      case true:
        return `
        display: none;
        `
      case false:
      default:
        return `
        background: transparent url(${require(`images/slider_nav_next.svg?inline`)});
      `
    }
  }}
`

export { TestimonialStyled, Photo, Description, ButtonPrev, ButtonNext }
