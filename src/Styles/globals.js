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

    button {
        border: none;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .active {
        width: 15px !important;
        height: 15px !important;
    }

    .categoryActive {
        background: linear-gradient(138.31deg, #5D9CC6 -2.89%, #4E5BB3 114.03%) !important;
        border: none
    }

`;