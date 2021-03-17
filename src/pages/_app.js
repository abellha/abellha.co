import App from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "@/utils/globalStyles"
import defaultTheme from "@/utils/defaultTheme"
import "react-lazy-load-image-component/src/effects/blur.css"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
