import styled from "styled-components";
import { box } from '../../Styles/GlobalComponents/box'

export const ContentProductsAdded = styled.ul`
    width: 100%;
    margin: 0;
    max-height: 450px;
    overflow-y: auto;
    padding: 0 0 20px;
    &::-webkit-scrollbar {
        width: 4px;
    }
`

export const SingleProductAdded = styled(box)`
    padding: 15px 10px;
    display: grid;
    margin: 15px auto;
    max-width: 390px;
    grid-template: 105px 30px / 100px 1fr ;
`

export const ImageProduct = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    & .imageProduct {
        max-height: 100px;
        max-width: 100px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
    }

`

export const DescriptionProduct = styled.div`
    width: 90%;
    margin: 0 0 0 20px;
    & .titleProduct {
        color: ${ props => props.theme.colors.gray[100] };
        font-size: 18px;
        font-weight: 600;
        min-width: 100px;
        max-width: 240px;
        overflow:hidden;
        word-break: break-all;  
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
    }

    & .ratingProduct {
        color: ${ props => props.theme.colors.gray[100] };
        font-size: 12px;
        display: block;
        span {
            color: #F8C751;
            font-size: 15px;
            line-height: 15px;
            vertical-align: middle;
            display: inline-block;
            margin: 0 0 0 3px;
        }
    }

    & .priceProduct {
        color: ${ props => props.theme.colors.gray[90] };
        font-size: 18px;
        font-weight: 600;
        display: block;
        margin: 5px 0 0 0;
        span {
            font-size: 12px;
            text-decoration: line-through;
            color: ${ props => props.theme.colors.gray[40] };
            display: block;
            margin: 0 5px 0 0;
        }
    }
`

export const CountProduct = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px 0 0 0;
    & .count {
        color: ${ props => props.theme.colors.gray[100] };
        font-weight: 700;
    }
`

export const ButtonsCount = styled(box)`
    padding: 5px;
    font-size: 15px;
    line-height: 15px;
    width: 30px;
    height: 30px;
    color: ${ props => props.theme.colors.gray[100] };
    font-weight: 700;
    transition: all .5s linear;
    cursor: pointer;
    &:active {
        transform: scale(0.05);
    }
`

export const DeleteProduct = styled.button`
    justify-self: flex-end;
    align-self: flex-end;
    background: none;
    display: block;
    width: fit-content;
    transition: all .3s linear;
    & .deleteIcon {
        color: ${ props => props.theme.colors.gray[80] };
        font-size: 20px;
        vertical-align: middle;
    }

    & .delete {
        color: ${ props => props.theme.colors.gray[50] };
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
    }
    &:active {
        transform: scale(0.85);
    }
`