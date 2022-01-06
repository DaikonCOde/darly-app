import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 16px;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Barlow', sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .active {
        width: 15px !important;
        height: 15px !important;
    }

`;