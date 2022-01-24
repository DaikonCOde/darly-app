import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContentCreateProduct, InputAndLabel, ContentForm } from './CreateProductStyles'; 
import { ContentInput } from '../../../Styles/GlobalComponents/contentInput';
import { uploadImage } from '../../../Helpers/uploadImage';
import { ButtonGradient, ButtonBorder } from '../../../Styles/GlobalComponents/buttonGradient';
import { createProduct } from '../../../Helpers/createProduct';

const CreateProduct = () => {

  const [dragPort, setDragPort] = useState(null);
  const [ dragGallery, setDragGallery ] = useState(null);
  const [ urlImageGallery, setUrlImageGallery ] = useState([]); 
  const [ urlImagePort, setUrlImagePort ] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    setDragGallery(null)

  }, [urlImageGallery])

  const handleDropImage = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setDragPort(file)
    
    uploadImage(file, setUrlImagePort);

  }

  const handleDropGallery = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    uploadImage(file, setUrlImageGallery);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      price: e.target.elements.price.value,
      totalPrice: e.target.elements.totalPrice.value,
      rating: e.target.elements.rating.value,
      stock: e.target.elements.stock.value,
      img_url: urlImagePort,
      gallery_url: urlImageGallery,
    }

    createProduct(data)
      .then(() => {
        navigate('/dashboard/products')
      })

  }

  return (
    <ContentCreateProduct>
      <h3>Create Product</h3>
      <ContentForm onSubmit={handleSubmit} >
        <ContentInput className='title'>
          <InputAndLabel>
              <label htmlFor="title">Title</label>
              <input type="text" name='title' id='title' placeholder="Title" required/>
          </InputAndLabel>
        </ContentInput>
        <ContentInput className='description'>
          <InputAndLabel >
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id='description' placeholder="Description" required/>
          </InputAndLabel>
        </ContentInput>
        <ContentInput className='price'>
          <InputAndLabel>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id='price' placeholder="Price" required/>
          </InputAndLabel>
        </ContentInput>
        <ContentInput className='totalPrice'>
          <InputAndLabel>
            <label htmlFor="totalPrice">total Price</label>
            <input type="number" name="totalPrice" id='totalPrice' placeholder="Total Price" required/>
          </InputAndLabel>
        </ContentInput>
        <ContentInput className='rating' >
          <InputAndLabel>
            <label htmlFor="rating">Rating</label>
            <input type="number" name="rating" id='rating' placeholder="Rating" required/>
          </InputAndLabel>
        </ContentInput>
        <ContentInput className='stock'>
          <InputAndLabel>
            <label htmlFor="stock">Stock</label>
            <input type="number" name="stock" id='stock' placeholder="Stock" required/>
          </InputAndLabel>
        </ContentInput>
        <ContentInput className='img_url'>
          <InputAndLabel isDragOverPort={dragPort}>
            <label htmlFor="img_url">Portada</label>
            <textarea
              className='input-image'
              value={dragPort?.name}
              name="img_url" 
              id='img_url' 
              placeholder="Portada" 
              required
              onDragEnter={() => setDragPort(true)}
              onDragLeave={() => setDragPort(false)}
              onDrop={handleDropImage}
            />
          </InputAndLabel>
        </ContentInput>
        <ContentInput className='gallery'>
          <InputAndLabel isDragOverGallery={dragGallery}>
            <label htmlFor="img_url">Gallery</label>
            <textarea
              className='input-gallery'
              name="gallery" 
              id='gallery' 
              placeholder="Image Gallery" 
              required
              onDragEnter={() => setDragGallery(true) }
              onDragLeave={() => setDragGallery(false)}
              onDrop={handleDropGallery}
            />
          </InputAndLabel>
        </ContentInput>
        
        <ButtonGradient type="submit" >Create</ButtonGradient>
        <ButtonBorder>Cancel</ButtonBorder>
      </ContentForm>
    </ContentCreateProduct>
  )
};

export default CreateProduct;
