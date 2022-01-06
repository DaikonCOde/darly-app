import styled from "styled-components";
import { box } from "../../Styles/GlobalComponents/box";

export const ContentListCategories = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin: 50px 20px 0;
    padding: 0 0 15px 0;

`
export const SingleCategory = styled(box)`
    min-width: fit-content;
    padding: 10px 20px;
    color: ${ props => props.theme.colors.gray[90] };
    font-weight: 600;
    margin: 0 5px;
`