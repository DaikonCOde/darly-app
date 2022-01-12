import styled, { keyframes } from "styled-components";


// animated 

const contentImageEntry = keyframes`
    0% {
        height: calc( 100vh + 50px);
    }
    50% {
        height: calc( 100vh + 50px);
    }
    100% {
        height: 70vh
    }
`
const imageEntry = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
        width: 90%;
    }
    100% {
        width: 260px;
    }
`

const contentInfoEntry = keyframes`
    0% {
        display: none;
        transform: translate(0, 250px);
        visibility: hidden;
    }
    100% {
        display: block;
        transform: translate(0, 0);
        visibility: show;
    }

`

// const contentSingle = keyframes`
//     from {
//         overflow-y: hidden;
//     }

//     to {
//         overflow-y: auto;
//     }
// `


export const HeaderSingleProduct = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100%;
`
export const ContentArrow = styled.span`
    color: ${props => props.theme.colors.gray[90]};
    font-size: 25px;
    line-height: 40px;
    text-align: start;
    position: relative;
    &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`


export const ContentSingleProduct = styled.section`
    width: 100%;
    max-height: 100vh;
    overflow-y: auto;
    animation-duration: 4s;
    background: ${ props => props.theme.colors.gradient };
`

export const ImageSingleProduct = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 0;
    top: 0;
    animation-duration: 4s;
    animation-name: ${contentImageEntry}; 

    & img {
        width: 260px;
        display: block; 
        margin: 0 auto;
        animation-duration: 4s;
        animation-name: ${imageEntry}
    };
`

export const InfoSingleProduct = styled.div`
    height: 250px;
    margin: -30px 0 0 0;
    background: ${ props => props.theme.colors.gray[10] };
    border-radius: 30px 30px 0 0;
    padding: 30px 20px 500px;
    position: relative;
    z-index: 1;
    animation-duration: 3s;
    animation-name: ${contentInfoEntry};

    & .titleProduct {
        color: ${ props => props.theme.colors.gray[100] };
        font-size: 24px;
        font-weight: 600;
    }

    & .priceProduct {
        color: ${ props => props.theme.colors.gray[90] };
        font-size: 18px;
        font-weight: 600;
        display: block;
        margin: 10px 0 0 0;
        span {
            font-size: 12px;
            text-decoration: line-through;
            color: ${ props => props.theme.colors.gray[40] };
            display: block;
            margin: 0 5px 0 0;
        }
    }
`

