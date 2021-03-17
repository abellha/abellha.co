import { useState, useRef, useContext } from "react"
import { ThemeContext } from "styled-components"
import ReactLoadingBar from "react-top-loading-bar"
import breakpoints from "@/utils/breakpoints"
import { ReactLoadingBarStyle } from "./styled"

export default function LoadingBar(props) {
  const theme = useContext(ThemeContext)
  const ref = React.useRef()

  React.useEffect(() => {
    if (props.isLoadingComplete) {
      ref.current && ref.current.complete()
    } else {
      ref.current && ref.current.continuousStart()
    }
  }, [ref.current, props.isLoadingComplete])

  return (
    <ReactLoadingBarStyle>
      <ReactLoadingBar
        onRef={(_ref) => (ref.current = _ref)}
        height={3}
        color={theme.backgrounds.tertiary}
      />
    </ReactLoadingBarStyle>
  )
}
