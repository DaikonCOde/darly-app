import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { ContentProducts, Statistics, ButtonCreateProduct, ListOfProducts, Product, ContentButtons } from './ProductsStyles';
import { TitleSection } from '../../../Styles/GlobalComponents/Titles';

import { MdEdit, MdDelete } from 'react-icons/md';

const Products = () => {
  const { products } = useSelector((state) => state.listProducts);
  return (
    <ContentProducts>
      <Statistics>
        <p>Total de productos: {products.length}</p>

        <Link to='/dashboard/products/create' >
          <ButtonCreateProduct>
            Crear Producto
          </ButtonCreateProduct>
        </Link>
      </Statistics>

      <ListOfProducts>
        <TitleSection className='title'>Productos</TitleSection>
        <ul>
        {
          products.map( (product) => (
            <Product key={product.id} >
              <div className='productImg'>
                <img src={product.img_url} alt={product.title} />
              </div>
              <h4 className='productTitle' >
                {product.title}
              </h4>
              <span className='productPrice'>
                { product.price }
              </span>
              <span>
                {/* { product.statusProduct }   */}
              </span>
              <ContentButtons>
                <Link to={`/dashboard/products/edit?id=${product.id}`} className='btn btnEdit' ><MdEdit /></Link>
                <button className='btn btnDelete'><MdDelete /></button>
              </ContentButtons>
            </Product>
          ))
        }
        </ul>

      </ListOfProducts>

    </ContentProducts>
  )
};

export default Products;
