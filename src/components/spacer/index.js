import PropTypes from "prop-types"
import styled from "styled-components"
import breakpoints from "@/utils/breakpoints"

const SpacerIn = styled.div`

  ${(props) =>
    props.paddingAll != null && `padding: ${5 * props.paddingAll}px;`}
  ${(props) =>
    props.paddingTop != null && `padding-top: ${5 * props.paddingTop}px;`}
  ${(props) =>
    props.paddingBottom != null &&
    `padding-bottom: ${5 * props.paddingBottom}px;`}
  ${(props) =>
    props.paddingRight != null && `padding-right: ${5 * props.paddingRight}px;`}
  ${(props) =>
    props.paddingLeft != null && `padding-left: ${5 * props.paddingLeft}px;`}
  
  @media (min-width: ${breakpoints.desktop}) {
    ${(props) =>
      props.paddingAllDesktop != null &&
      `padding: ${5 * props.paddingAllDesktop}px;`}
  ${(props) =>
    props.paddingTopDesktop != null &&
    `padding-top: ${5 * props.paddingTopDesktop}px;`}
  ${(props) =>
    props.paddingBottomDesktop != null &&
    `padding-bottom: ${5 * props.paddingBottomDesktop}px;`}
  ${(props) =>
    props.paddingRightDesktop != null &&
    `padding-right: ${5 * props.paddingRightDesktop}px;`}
  ${(props) =>
    props.paddingLeftDesktop != null &&
    `padding-left: ${5 * props.paddingLeftDesktop}px;`}
  }
`

const SpacerOut = styled.div`
  ${(props) => props.marginAll != null && `margin: ${5 * props.marginAll}px;`}
  ${(props) =>
    props.marginTop != null && `margin-top: ${5 * props.marginTop}px;`}
  ${(props) =>
    props.marginBottom != null && `margin-bottom: ${5 * props.marginBottom}px;`}
  ${(props) =>
    props.marginRight != null && `margin-right: ${5 * props.marginRight}px;`}
  ${(props) =>
    props.marginLeft != null && `margin-left: ${5 * props.marginLeft}px;`}

  @media (min-width: ${breakpoints.desktop}) {
    ${(props) =>
      props.marginAllDesktop != null &&
      `margin: ${5 * props.marginAllDesktop}px;`}
    ${(props) =>
      props.marginTopDesktop != null &&
      `margin-top: ${5 * props.marginTopDesktop}px;`}
    ${(props) =>
      props.marginBottomDesktop != null &&
      `margin-bottom: ${5 * props.marginBottomDesktop}px;`}
    ${(props) =>
      props.marginRightDesktop != null &&
      `margin-right: ${5 * props.marginRightDesktop}px;`}
    ${(props) =>
      props.marginLeftDesktop != null &&
      `margin-left: ${5 * props.marginLeftDesktop}px;`}
  }
`

SpacerIn.propTypes = {
  children: PropTypes.node.isRequired,
  paddingAll: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingAllDesktop: PropTypes.number,
  paddingTopDesktop: PropTypes.number,
  paddingRightDesktop: PropTypes.number,
  paddingBottomDesktop: PropTypes.number,
  paddingLeftDesktop: PropTypes.number,
}

SpacerOut.propTypes = {
  children: PropTypes.node.isRequired,
  marginAll: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginAllDesktop: PropTypes.number,
  marginTopDesktop: PropTypes.number,
  marginRightDesktop: PropTypes.number,
  marginBottomDesktop: PropTypes.number,
  marginLeftDesktop: PropTypes.number,
}

export { SpacerIn, SpacerOut }
