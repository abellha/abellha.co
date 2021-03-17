import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"

const Wrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1600px;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: ${(props) => (props.noPadding ? 0 : "0 20px")};

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1100px;
    padding: ${(props) => (props.noPaddingDesktop ? 0 : "0 20px")};
  }
`
const Row = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: ${breakpoints.desktop}) {
    grid-column-gap: 20px;
    grid-template-columns: repeat(16, 1fr);
  }
`

const Col = styled.div`
  grid-column-end: span ${(props) => props.size};
  grid-column-start: ${(props) => props.position};
  order: ${(props) => props.order};
  align-self: ${(props) => props.alignSelf};
  width: 100%;

  @media (min-width: ${breakpoints.desktop}) {
    grid-column-end: span ${(props) => props.sizeDesktop};
    grid-column-start: ${(props) => props.positionDesktop};
    order: ${(props) => props.orderDesktop};
    align-self: ${(props) => props.alignSelfDesktop};
  }
`

const Hidden = styled.div`
  display: ${(props) => (props.forBreakpoint == "mobile" ? "none" : "block")};

  @media (min-width: ${breakpoints.desktop}) {
    display: ${(props) =>
      props.forBreakpoint == "desktop" ? "none" : "block"};
  }
`

export { Wrapper, Container, Row, Col, Hidden }
