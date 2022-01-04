import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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


`;

export const Theme = {
    colors: {
        'light_blue': '#4A9CDC',
        'yellow': '#F7C651',
        'white': '#ffffff', 
        'gray': {
        10: '#1F1F1F',
        20: '#262626',
        30: '#515151',
        40: '#595959',
        50: '#7C7C7C',
        60: '#999999',
        70: '#ACACAC',
        80: '#B8B8B8',
        90: '#ECEBEB',
        100: '#FFFFFF', 
        },
    },
    margin: {
        content: '0 20px'
    },
    radius: {
        1: '10px',
    }
}