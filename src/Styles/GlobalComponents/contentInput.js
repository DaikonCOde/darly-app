import styled from "styled-components";
import { box } from "./box";

export const ContentInput = styled(box)`
display: flex;
flex-direction: row;    
margin: 20px 0 0;
padding: 14px 16px;
width: 100%;
`

export const FormIcon = styled.div`
    color: ${props => props.theme.colors.gray[60]};
    font-size: 25px;
    line-height: 0;
`

export const FormInput = styled.div`
    margin: 0 0 0 10px;
    width: 100%;
    input, textarea {
        width: 90%;
        background: none; 
        border: none;
        color: ${props => props.theme.colors.gray[70]};
        font-size: 16px;
        height: 25px;
        outline: none;
    }
    .changeVisibility {
        width: 16px;
        font-size: 16px;
        color: ${ props => props.theme.colors.gray[70] };
        vertical-align: middle;
    }
`