import styled from "styled-components";

export const box = styled.div`
    background: linear-gradient(${props => props.theme.colors.gray[20]}, ${props => props.theme.colors.gray[20]}) padding-box, linear-gradient(155deg, #2F3134 16.19%, #202329 82.15%) border-box;
    border: 2px solid transparent;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.301983);
    border-radius: ${ props => props.theme.radius[1] };
`