import styled from "styled-components";

export const HeaderSingleProduct = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    position: fixed;
    top: 0;
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
`

export const ImageSingleProduct = styled.div`
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ props => props.theme.colors.gradient };
    position: sticky;
    z-index: -1;
    top: 0;
    & img {
        width: 180px;
        display: block; 
        margin: 0 auto
    }
`

export const InfoSingleProduct = styled.div`
    height: 300px;
    margin: -30px 0 0 0;
    background: ${ props => props.theme.colors.gray[10] };
    border-radius: 30px 30px 0 0;
    padding: 30px 20px;
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