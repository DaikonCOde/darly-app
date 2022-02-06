import styled from "styled-components";
import { box } from "../../Styles/GlobalComponents/box";

export const ContentProducts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr; 
    grid-gap: 10px;
    margin: 30px auto;
    max-width: 1240px;
    position: relative;
    @media ${ props => props.theme.breakpoints.sm} {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${ props => props.theme.breakpoints.lg} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media ${ props => props.theme.breakpoints.lg} {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`

export const SingleProduct = styled(box)`
    height: 100%;
    min-width: 135px;
    max-width: 230px;
    padding: 14px;
    justify-self: center;
`

export const ContentTitle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 0 10px 0;
    min-height: 45px;
    & .titleProduct {
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        min-width: 100px;
        max-width: 160px;
        overflow:hidden;
        word-break: break-all;  
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
        color: ${ props => props.theme.colors.gray[90] };
    };

    & .ratingProduct {
        color: ${ props => props.theme.colors.gray[100] };
        font-size: 12px;
        display: block;
        width: 40px;
        & span {
            color: #F8C751;
            font-size: 15px;
            line-height: 15px;
            vertical-align: middle;
            display: inline-block;
        }
    }
`

export const ContentImage = styled.div`
    width: 100%;
    min-height: 100px;
    max-height: 200px;
    & img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

export const ContentPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0 0;
    & .priceTotal {
        font-size: 12px;
        text-decoration: line-through;
        color: ${ props => props.theme.colors.gray[40] };
        display: block;
    }

    & .priceDesc {
        color: ${ props => props.theme.colors.gray[90] };
        font-size: 16px;
        font-weight: 600;
    }

    & .addToCart {
        padding: 6px;
        border-radius: 4px;
        line-height: 0;
    }

`