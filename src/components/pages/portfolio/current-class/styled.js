import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"
import { Hidden } from "@/components/common/grid"
import View from "@/components/view"
import { LazyLoadImage } from "react-lazy-load-image-component"

const CurrentClassStyled = styled(View)``

const Items = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  @media (min-width: ${breakpoints.desktop}) {
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

const Content = styled(Hidden)`
  width: 100%;
`
const ItemsHeading = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`
const TestimonialContent = styled(View)`
  width: 100%;
  border-top: 1px #ccc solid;
  padding-top: 40px;
  margin-top: 40px;
`

export { CurrentClassStyled, Items, ItemsHeading, Content, TestimonialContent }
