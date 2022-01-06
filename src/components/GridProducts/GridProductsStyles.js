import styled from "styled-components";
import { box } from "../../Styles/GlobalComponents/box";

export const ContentProducts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 230px; 
    grid-gap: 10px;
    margin: 30px 20px;
`

export const SingleProduct = styled(box)`
    height: 230px;
    width: 100%;
    max-width: 200px;
`