import styled from "styled-components";

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
    position: relative;
    
`

export const SingleItemCarousel = styled.div`
    min-width: 300px;
    height: 190px;
    border-radius: 16px;
    background: ${props => props.theme.colors.light_blue};
    margin: 0 0 0 20px;
    &:nth-child(2) {
        margin-left: 0;
    }
`

export const ContentPoints = styled.div`
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin: 10px auto 0;
    gap: 10px;
    & span {
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        transition: all .3s linear;
        background: ${props => props.theme.colors.gray[80]};
    }
`

export const Arrow = styled.div`
    min-width: 40px;
    height: 40px;
    background: ${ props => props.theme.colors.gray[30] }80;
    border-radius: 50%;
    position: sticky;
    top: calc(50% - 30px);
    right: ${ props => props.right ? props.right : '' };
    left: ${ props => props.left ? props.left : '' };
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:  ${ props => props.theme.colors.gray[90] };
    &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
` 