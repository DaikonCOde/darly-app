import styled from "styled-components"

export const ContentShoppingCart = styled.div`
    align-self: center;
    color: ${props => props.theme.colors.gray[90]};
    font-size: 25px;
    line-height: 40px;
    text-align: ${ props => props.align || 'start'};
    position: relative;
    padding: 0 8px 0 0;
    cursor: pointer;
    &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    & .countProducts {
        position: absolute;
        display: inline-block;
        background: ${ props => props.theme.colors.gradient };
        border-radius: 50%;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        width: 18px;
        height: 18px;
        top: 0px;
        right: 0px;
        font-weight: 600;
    }
`