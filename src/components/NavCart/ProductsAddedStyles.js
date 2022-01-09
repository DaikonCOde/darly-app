import styled from "styled-components";
import { box } from '../../Styles/GlobalComponents/box'

export const ContentProductsAdded = styled.ul`
    width: 100%;
    margin: 0;
    max-height: 400px;
    overflow-y: auto;
`

export const SingleProductAdded = styled(box)`
    padding: 20px 10px;
    display: grid;
    margin: 15px 0;
    grid-template: 110px 30px / 40% 60% ;
`

export const ImageProduct = styled.div`
    width: 100%;
    & .imageProduct {
        max-height: 110px;
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
    }

    & .ratingProduct {
        color: ${ props => props.theme.colors.gray[100] };
        font-size: 12px;
        display: block;
        margin: 10px 0 0 0;
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
        font-size: 20px;
        font-weight: 600;
        display: block;
        margin: 15px 0 0 0;
        span {
            font-size: 18px;
            text-decoration: line-through;
            color: ${ props => props.theme.colors.gray[40] };
            display: inline-block;
            margin: 0 5px 0 0;
        }
    }
`

export const CountProduct = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

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
    transition: all .3 linear;
    &:active {
        transform: scale(0.85);
    }
`

export const DeleteProduct = styled.button`
    justify-self: flex-end;
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
    }
    &:active {
        transform: scale(0.85);
    }
`