import styled from "styled-components";

export const ContentHeader = styled.div`
    background: ${ props => props.theme.colors.gray[10]};
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    padding: 20px 20px 30px;
`

export const ContentIcons = styled.div`
    align-self: center;
    color: ${props => props.theme.colors.gray[90]};
    font-size: 25px;
    line-height: 40px;
    text-align: ${ props => props.align || 'start'};
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

export const ContentLogo = styled.div`
    color: ${props => props.theme.colors.gray[90]};
    font-size: 28px;
    font-weight: 600;
    text-align: center;
`