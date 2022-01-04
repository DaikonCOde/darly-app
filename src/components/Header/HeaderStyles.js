import styled from "styled-components";
import { Theme } from "../../styles";

export const ContentHeader = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    padding: 30px 20px;
    background: ${Theme.colors.gray[10]};
`

export const ContentIcons = styled.div`
    font-size: 25px;
    align-self: center;
    line-height: 40px;
    color: ${Theme.colors.gray[90]};
    text-align: ${ props => props.align || 'start'};
`

export const ContentLogo = styled.div`
    text-align: center;
    color: ${Theme.colors.gray[90]};
    font-size: 28px;
    font-weight: 600;
`