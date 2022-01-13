import styled from "styled-components"
import { box } from './box'


export const ButtonGradient = styled.button`
    color: ${ props => props.theme.colors.gray[90] };
    font-weight: 600;
    font-size: 20px;
    background: ${props => props.theme.colors.gradient};
    border-radius: 10px;
    display: block;
    text-transform: uppercase;
    transition: all .3s linear;
    width: fit-content;
    line-height: 20px;
    &:active {
        transform: scale(0.85);
    }
    
`

export const ButtonBorder = styled(box)`
    min-width: fit-content;
    padding: 10px 20px;
    color: ${ props => props.theme.colors.gray[90] };
    font-weight: 600;
    margin: 0 5px;

`