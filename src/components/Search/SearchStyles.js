import styled from "styled-components";
import { box } from '../../Styles/GlobalComponents/box'

export const ContentSearch = styled.div`
    margin: 0 20px;

`

export const TitleSearch = styled.h4`
    color: ${props => props.theme.colors.gray[90]};
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
`

export const ContentForm = styled(box)`
    display: flex;
    flex-direction: row;
    margin: 20px 0 0;
    padding: 16px 14px;
    width: 100%;
`

export const ContentIcon = styled.div`
    color: ${props => props.theme.colors.gray[60]};
    font-size: 25px;
    line-height: 0;
    margin: 0 10px 0 0
`

export const Form = styled.form`
    & {
        input[type=text] {
            background: none; 
            border: none;
            color: ${props => props.theme.colors.gray[70]};
            font-size: 16px;
            height: 25px;
            outline: none;
        }
    }
`