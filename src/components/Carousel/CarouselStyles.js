import styled from "styled-components";
import { Theme } from '../../styles';

export const ContentCarousel = styled.div`
    margin: 30px 0px;
    overflow: hidden;
`

export const ItemsCarousel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    transition: all .3s linear;
    width: 100%;
    margin-left: ${props => props.position}px;
`

export const SingleItemCarousel = styled.div`
    min-width: 300px;
    height: 190px;
    border-radius: 8px;
    background: ${Theme.colors.light_blue};
    margin: 0 0 0 20px;
    &:first-child {
        margin-left: 0;
    }
`

export const ContentPoints = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        margin: 8px;
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        transition: all .3s linear;
        background: ${Theme.colors.gray[80]};
    }
`
