import styled from "styled-components";
import { box } from "../../Styles/GlobalComponents/box";

export const ContentProducts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 230px; 
    grid-gap: 10px;
    margin: 30px 20px;
`

export const SingleProduct = styled(box)`
    height: 230px;
    width: 160px;
    max-width: 200px;
    padding: 14px;
    justify-self: center;
`

export const ContentTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;
    & h2 {
        font-size: 16px;
        font-weight: 600;
        color: ${ props => props.theme.colors.gray[90] }
    };
`

export const ContentImage = styled.div`
    width: 100%;
    height: 140px;
    & img {
        object-fit: contain;
        width: 100%;
    }
`

export const ContentPrice = styled.div`
    display: flex;
    justify-content: space-between;
    
    & .priceTotal {
        font-size: 12px;
        text-decoration: line-through;
        color: ${ props => props.theme.colors.gray[40] };
        display: block;
    }

    & .priceDesc {
        color: ${ props => props.theme.colors.gray[90] };
        font-size: 14px;
        font-weight: 600;
    }

    & .addToCart {
        color: ${ props => props.theme.colors.gray[90] };
        font-size: 20px;
        width: fit-content;
        background: ${ props => props.theme.colors.gradient };
        padding: 6px;
        border-radius: 4px;
        line-height: 0;
        transition: all .3 linear;
        &:active {
            transform: scale(0.9);
        }
    }

`