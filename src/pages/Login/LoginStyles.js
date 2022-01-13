import styled from "styled-components";

export const ContentLogin = styled.section`
    background: ${ props => props.theme.colors.gray[10] };
    padding: 40px 20px;
    height: 100vh;
`

export const HeaderLogin = styled.div`
    color: ${props => props.theme.colors.gray[100]};
    font-size: 25px;
    display: flex;
    line-height: 25px;
    & svg {
        width: 25px;
    }
    & h2 {
        width: 100%;
        text-align: center;
        font-size: 25px;
    }
`

export const BodyLogin = styled.div`
    margin: 30px 0;
`

export const ContentBrand = styled.div`
    width: 100%;
    & span {
        color: ${props => props.theme.colors.gray[90]};
        display: block;
        margin: 40px 0 0;
        text-align: center;
        font-size: 20px;
        font-weight: 600;

    } 
`
export const ContentForm = styled.form`
    margin: 40px 0 0;
    & .buttonSubmitForm {
        width: 100%;
        padding: 16px 0;
        line-height: 25px;
        margin: 30px 0 0;
    }
`
