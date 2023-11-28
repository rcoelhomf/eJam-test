import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-blue: #2C7EF8
        --color-green: #59ae43
        --color-red: #F82C2C
        --color-black: #000000
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow: overlay;
    }
`