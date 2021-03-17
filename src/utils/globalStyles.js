import { createGlobalStyle } from "styled-components"
import defaultTheme from "@/utils/defaultTheme"
import resetCss from "@/utils/resetCss"

const GlobalStyles = createGlobalStyle`

    ${resetCss}

    ::selection { 
      background: ${defaultTheme.backgrounds.tertiary};
      color: #333;
    }

    html {
      font-size: 10px;
    }

    body {
      background: ${defaultTheme.backgrounds.primary.light} none;
      color: ${defaultTheme.colors.primary};
      font-family: 'Open Sans', sans-serif;
      font-size: 10px;
      line-height: 1.2;
      font-weight: 400;
    }

    body::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    
    body::-webkit-scrollbar-track {
      background-color: rgba(256, 256, 256, 0);
    }
    
    body::-webkit-scrollbar-thumb {
      background-color: ${defaultTheme.backgrounds.tertiary};
      border: 3px solid transparent;
      border-radius: 10px;
      background-clip: content-box;
    }

    strong {
      font-weight: 700;
    }

`

export default GlobalStyles
