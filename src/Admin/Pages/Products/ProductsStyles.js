import styled from "styled-components";

import { ButtonGradient } from "../../../Styles/GlobalComponents/buttonGradient";

export const ContentProducts = styled.section`

`

export const Statistics =  styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
`

export const ButtonCreateProduct = styled(ButtonGradient)`
  text-transform: none;
  padding: 14px 16px;
  font-size: 18px
`

export const ListOfProducts = styled.div`
  ul {
    margin: 20px 0;
    color: ${ props => props.theme.colors.gray[100]}
  }
`

export const Product = styled.li`
  border: 1px solid ${ props => props.theme.colors.gray[50]};
  padding: 10px 15px;
  margin: 10px 0 ;
  display: flex;
  gap: 0 10px;
  .productImg {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
    }
  }
  .productTitle {
    max-width: 300px;
    overflow: hidden;
  }

`

export const ContentButtons = styled.div`
  align-self: center;
  margin: 0 0 0 auto;

  .btn {
    font-size: 20px;
    margin: 0 10px;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(0.85);
    }
  }
  .btnEdit {
    color: ${ props => props.theme.colors.light_blue};
  }
  .btnDelete {
    color: ${ props => props.theme.colors.gray[40]};
  }
`