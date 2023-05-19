import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-100']};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        font-size: 1.6rem;
    }
`
