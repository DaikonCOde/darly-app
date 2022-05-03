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
        @media ${ props => props.theme.breakpoints.lg} {
            &::-webkit-scrollbar {
                width :8px;
                background: ${ props => props.theme.colors.gray[20] }
            } 
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: ${ props => props.theme.colors.gray[50] };
            }
        }
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
        background: none;
        cursor: pointer;
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
        background: ${ props => props.theme.colors.gradient } !important;
        border: none
    }

    &::selection {
        color: ${ props => props.theme.colors.gray[10]};
        background: ${ props => props.theme.colors.gray[70]};
    }

`;