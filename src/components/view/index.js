import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"

const View = styled.div`
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  text-align: ${(props) => props.textAlign};

  @media (min-width: ${breakpoints.desktop}) {
    position: ${(props) => props.positionDesktop};
    width: ${(props) => props.widthDesktop};
    max-width: ${(props) => props.maxWidthDesktop};
    height: ${(props) => props.heightDesktop};
    padding: ${(props) => props.paddingDesktop};
    margin: ${(props) => props.marginDesktop};
    display: ${(props) => props.displayDesktop};
    align-items: ${(props) => props.alignItemsDesktop};
    justify-content: ${(props) => props.justifyContentDesktop};
    flex-direction: ${(props) => props.flexDirectionDesktop};
    flex-wrap: ${(props) => props.flexWrapDesktop};
    text-align: ${(props) => props.textAlignDesktop};
  }
`
export default View
