import styled from "styled-components";

export const ContentCarousel = styled.div`
    margin: 30px 0px;
    overflow: hidden;
    position: relative;
    .itemsCarousel {
        .swiper-wrapper {
            justify-content: space-around;
        }
    }
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
    max-width: 430px;
    height: 190px;
    border-radius: 16px;
    background: linear-gradient(180deg, #5D9CC6 -2.89%, #4E5BB3 114.03%);
    margin: 0 0 0 20px;
    padding: 25px;
    display: flex;
`
export const ContentTextSlide = styled.div`
    width: 70%;
    color: ${ props => props.theme.colors.gray[100] };
    & span {
        font-size: 28px;
        display: block;
        font-weight: 700;
    }
    & h3 {
        font-size: 21px;
        font-weight: 600;
    }

    & a {
        padding: 10px;
        border-radius: 6px;
        background: ${ props => props.theme.colors.gray[100] };
        color: ${ props => props.theme.colors.light_blue };
        width: fit-content;
        margin: 20px 0 0;
        font-weight: 600;
        display: block
    }
`
export const ContentImageSlide = styled.div`
    position: relative;
    bottom: -31px;
    right: -20px;
    width: fit-content;
    z-index: 0;
    & img {
        width: 100%;
    }
`

// Handles


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
    position: absolute;
    top: calc(50% - 30px);
    right: ${ props => props.right ? props.right : '' };
    left: ${ props => props.left ? props.left : '' };
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:  ${ props => props.theme.colors.gray[90] };
    z-index: 3;
    &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
` 