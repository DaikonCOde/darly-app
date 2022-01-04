import styled from "styled-components";
import { Theme } from "../../styles";

export const ContentSearch = styled.div`
    margin: 0 20px;

`

export const TitleSearch = styled.h4`
    font-size: 20px;
    color: ${Theme.colors.gray[90]};
    font-weight: 600;
    text-transform: capitalize;
`

export const ContentForm = styled.div`
    background: ${Theme.colors.gray[20]};
    border-radius: ${Theme.radius[1]};
    border: 2px solid;
    border-image-source: linear-gradient(144.06deg, #2F3134 16.19%, #202329 82.15%);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.301983);
    margin: 20px 0 0;
    width: 100%;
    padding: 16px 14px;
    display: flex;
    flex-direction: row;
`

export const ContentIcon = styled.div`
    font-size: 25px;
    line-height: 0;
    color: ${Theme.colors.gray[60]};
    margin: 0 10px 0 0
`

export const Form = styled.form`
    & {
        input[type=text] {
            background: none; 
            color: ${Theme.colors.gray[70]};
            border: none;
            outline: none;
            font-size: 16px;
            height: 25px
        }
    }
`