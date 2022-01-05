import styled from "styled-components";
import { Theme } from "../../styles";

export const ContentSearch = styled.div`
    margin: 0 20px;

`

export const TitleSearch = styled.h4`
    color: ${Theme.colors.gray[90]};
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
`

export const ContentForm = styled.div`
    background: linear-gradient(${Theme.colors.gray[20]}, ${Theme.colors.gray[20]}) padding-box, linear-gradient(155deg, #2F3134 16.19%, #202329 82.15%) border-box;
    border: 2px solid transparent;
    border-radius: ${Theme.radius[1]};
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.301983);
    display: flex;
    flex-direction: row;
    margin: 20px 0 0;
    padding: 16px 14px;
    width: 100%;
`

export const ContentIcon = styled.div`
    color: ${Theme.colors.gray[60]};
    font-size: 25px;
    line-height: 0;
    margin: 0 10px 0 0
`

export const Form = styled.form`
    & {
        input[type=text] {
            background: none; 
            border: none;
            color: ${Theme.colors.gray[70]};
            font-size: 16px;
            height: 25px;
            outline: none;
        }
    }
`