import styled from "styled-components";
import { Content } from '../../Styles/GlobalComponents/content'

export const ContainerHeader = styled(Content) `
    padding: 10px 20px;
    min-height: fit-content;
    position: sticky;
    top: 0;
    z-index: 9;
` 

export const ContentHeader = styled.div`
    background: ${ props => props.theme.colors.gray[10]};
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    max-width: 1240px;
    margin: 0 auto
`

export const ContentIcons = styled.div`
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

export const ContentLogo = styled.div`
    color: ${props => props.theme.colors.gray[100]};
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    .imgLogo {
        width: 30px;
        height: fit-content;
        line-height: 0;
        display: inline-block;
        margin: 0 10px 0 0;
        img {
            width: 100%;
            vertical-align: middle;
        }
    }

`