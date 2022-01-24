import styled from "styled-components";
import { FormInput } from "../../../Styles/GlobalComponents/contentInput";

 
export const ContentCreateProduct = styled.section`
  color: #fff;
  .price, .totalPrice, .rating, .stock {
    width: 23%;
  }
  .img_url, .gallery {
    width: 49%;
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
  label {
    font-weight: 600;
    margin: 0 10px 0 0 ;
  }
  textarea {
    height: 100px;
  }
  .input-image, .input-gallery {
    border: ${ props => props.isDragOverPort ? ' 2px dotted #fff ' : ' 2px dotted transparent ' }
  }
  .input-gallery {
    border: ${ props => props.isDragOverGallery ? ' 2px dotted #fff ' : ' 2px dotted transparent ' }
  }
`