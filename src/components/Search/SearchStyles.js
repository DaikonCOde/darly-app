import styled from "styled-components";
import { ContentInput } from '../../Styles/GlobalComponents/contentInput'

export const ContentSearch = styled.div`

`

export const TitleSearch = styled.h4`
    color: ${props => props.theme.colors.gray[90]};
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
`

export const ContentForm = styled(ContentInput)`
    margin: 20px 0 0;
`

export const ContentIcon = styled.div`
    color: ${props => props.theme.colors.gray[60]};
    font-size: 25px;
    line-height: 0;
    margin: 0 10px 0 0
`

export const Form = styled.form`

    input[type=text] {
        background: none; 
        border: none;
        color: ${props => props.theme.colors.gray[70]};
        font-size: 16px;
        height: 25px;
        outline: none;
    }

`