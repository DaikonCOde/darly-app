import styled from "styled-components";

export const ContentCartEmpty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
`

export const ImageCart = styled.div`
    & img {
        width: 250px;
        display: block;
        margin: 0 auto;
    } 
`

export const DescriptionCart = styled.div`
    & p {
        font-size: 18px;
        color: ${ props => props.theme.colors.gray[80] };
        font-weight: 600;
        text-align: center;
        margin: 30px 0 0 0;
    }
`