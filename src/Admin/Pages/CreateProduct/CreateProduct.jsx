import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Hooks
import { uploadImage } from "../../../Helpers/uploadImage";
import { createProduct } from "../../../Helpers/createProduct";
import { useSelector } from "react-redux";
import { doc } from 'firebase/firestore';
import { DBfirestore } from "../../../db/connect";
// Utils
import Loading from '../../../components/Loading/Loading';
import { EDITOR_JS_TOOLS } from "../../../Utils/toolsEditor";
import { StatusProduct } from "../../../Utils/statusProducts";
import { createReactEditorJS } from "react-editor-js";
// Styles
import {
  ContentCreateProduct,
  InputAndLabel,
  ContentForm,
  ListFiles,
} from "./CreateProductStyles";
import { ContentInput } from "../../../Styles/GlobalComponents/contentInput";
import {
  ButtonGradient,
  ButtonBorder,
} from "../../../Styles/GlobalComponents/buttonGradient";


const CreateProduct = () => {
  
  const editorCore = useRef(null)
  const { listCategories } = useSelector((state) => state.categories);

  const [ isLoading, setIsLoading ] = useState(false)
  const [ portada, setPortada ] = useState({ urlImg: [] , data: [], isLoading: false});
  const [ gallery, setGallery ] = useState({ urlImg: [] , data: [], isLoading: false});

  const [ statusProduct, setStatusProduct ] = useState(
    new Array(StatusProduct.length).fill(false)
  );
  const [ category, setCategory ] = useState('');

  const ReactEditorJs = createReactEditorJS();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      title: e.target.elements.title.value,
      price: parseInt(e.target.elements.price.value),
      totalPrice: parseInt(e.target.elements.totalPrice.value),
      rating: parseInt(e.target.elements.rating.value),
      stock: {
        stock: statusProduct[0],
        comingSoon: statusProduct[1],
        onRequest: statusProduct[2],
      },
      category: doc( DBfirestore, 'categories', category ),
      img_url: portada.urlImg[0],
      gallery_url: [...portada.urlImg, ...gallery.urlImg],
    };

    editorCore.current.save()
      .then((output) => {
        data.description = output;

        console.log(data);
        createProduct(data).then((response) => {
          console.log(response)
          setIsLoading(false);

          if (response) {
            navigate("/dashboard/products");
          }
        });
      })

  };

  const handleChangeCategory = (e) => {
    const newCategeory = e.target.value;

    setCategory(newCategeory);
  }

  const handleUploadGallery = (e) => {
    const gallery = [...e.target.files];

    console.log(gallery)
    setGallery( (prevState) => ( {...prevState, data: gallery } ) );

  }

  const handleUploadPortada = (e) => {

    const portada = [ ...e.target.files ];
    setPortada( (prevState) => ( {...prevState, data: portada } ) );
  }

  const handleSelectStatus = (id) => {
    const updatedCheckedState = statusProduct.map((item, index) =>
      index === id ? !item : item
    );
    setStatusProduct(updatedCheckedState);
  }


  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance
  }, [])

  return (
    <ContentCreateProduct>
      {
        isLoading && <Loading />
      }
      <h3>Crear Producto</h3>
      <ContentForm onSubmit={handleSubmit}>
        <ContentInput className="title">
          <InputAndLabel>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              required
            />
          </InputAndLabel>
        </ContentInput>
        <ContentInput className='description' >
          <label > Descripción</label>
          <ReactEditorJs  
            // holder='custom' 
            tools={EDITOR_JS_TOOLS} 
            defaultValue={{}}
            onInitialize={handleInitialize}
            ref={editorCore}
            // readOnly='true'
          >
          </ReactEditorJs>
        </ContentInput>
        <ContentInput className="price">
          <InputAndLabel>
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              name="price"
              step="0.01"
              id="price"
              placeholder="Price"
              required
            />
          </InputAndLabel>
        </ContentInput>
        <ContentInput className="totalPrice">
          <InputAndLabel>
            <label htmlFor="totalPrice">Precio total</label>
            <input
              type="number"
              name="totalPrice"
              step="0.01"
              id="totalPrice"
              placeholder="Total Price"
              required
            />
          </InputAndLabel>
        </ContentInput>
        <ContentInput className="rating">
          <InputAndLabel>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              name="rating"
              step="0.01"
              id="rating"
              placeholder="Rating"
              required
            />
          </InputAndLabel>
        </ContentInput>
        <ContentInput className="state">
          <InputAndLabel>
            <label > Estado</label>
            {
              StatusProduct.map( ({ label, value, id }) => (
                <span key={id} >
                  <input 
                    type="checkbox" 
                    value={value}
                    id={`status-id-${id}`}
                    name={label}
                    checked={statusProduct[id]}
                    onChange={() => handleSelectStatus(id)}
                  />
                  <label htmlFor={`status-id-${id}`} > {label} </label>
                </span>
              ))
            }
          </InputAndLabel>
        </ContentInput>
        <ContentInput className="category">
          <InputAndLabel>
            <label >Categorías</label>
            <select name="listCategories" id="listCategories" value={category} onChange={ handleChangeCategory } >
              {
                listCategories.map( (opt) => (
                  <option key={opt.id} value={opt.id}>{opt.name}</option>
                ) )
              }
            </select>
          </InputAndLabel>
        </ContentInput>
        <ContentInput className="img_url">
          <InputAndLabel >
            <label htmlFor="img_url">Portada</label>
            <input
              type='file'
              className="input-image"
              name="img_url"
              id="img_url"
              placeholder="Portada"
              onChange= { handleUploadPortada }
            />
            {
              portada.isLoading
                ? <Loading />
                : (
                  <button 
                    type='button'
                    onClick={ () => uploadImage(portada, setPortada) }
                  >
                    upload
                  </button>

                )
            }
          </InputAndLabel>
        </ContentInput>
        <ContentInput className="gallery">
          <InputAndLabel>
            <label htmlFor="img_url">Galeria</label>
            <input
              type='file'
              className="input-gallery"
              name="gallery"
              id="gallery"
              placeholder="Image Gallery"
              onChange={ handleUploadGallery }
              multiple
            />
            {
              gallery.isLoading
                ? <Loading />
                : (
                  <button 
                    type='button'
                    onClick={ (e) => {
                      e.preventDefault()
                      uploadImage(gallery, setGallery)
                      } }
                  >
                    upload
                  </button>
                )
            }
            <ListFiles>
              {
                gallery.data.length === 0 
                  ? (<li></li>)
                  : gallery.data.map( (file) => (
                    <li key={file.name} >{file.name}</li>
                ) )
              }
            </ListFiles>
          </InputAndLabel>
        </ContentInput>

        <ButtonGradient type="submit">Create</ButtonGradient>
        <ButtonBorder onClick={ () => navigate(-1) } >Cancel</ButtonBorder>
      </ContentForm>
    </ContentCreateProduct>
  );
};

export default CreateProduct;
