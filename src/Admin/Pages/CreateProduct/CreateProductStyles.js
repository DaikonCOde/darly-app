import styled from "styled-components";
import { FormInput } from "../../../Styles/GlobalComponents/contentInput";

 
export const ContentCreateProduct = styled.section`
  color: #fff;
  .title, .description {
    width: 49%;
    height: fit-content;
  }
  .price, .totalPrice, .rating, .state, .category {
    width: 18%;
  }
  .img_url, .gallery {
    width: 49%;
    position: relative;
    input {
      width : 80%;
    }
  }
  .description {
    flex-wrap: wrap;
    label {
      width :100%;
      margin: 0 0 10px 0;
    }
    & div {
      width: 100%;
    }
  }
  .state {
    span {
      font-size: 13px;
      input {
        width: 15px;
        height:15px;
        border-radius: 50%;
        vertical-align: middle;

      }
    }
  }
  button {
    color: ${ props => props.theme.colors.gray[100] };
    border: 1px solid #333;
    border-radius: 10px;
    padding: 12px 18px;
  }
`
export const ContentForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0 0 0;
  gap: 20px;
  div {
    margin-top: 0;
  }
`

export const InputAndLabel = styled(FormInput)`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  label {
    font-weight: 600;
    width :100%;
    margin: 0 10px 10px 0 ;
  }
`

export const ListFiles = styled.ul`
  font-size: 14px;
  li {
    display: block;
    margin: 5px 0;
  }
`