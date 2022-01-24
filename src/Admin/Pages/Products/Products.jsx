import React from 'react';
import { Link } from 'react-router-dom';

import { ContentProducts, Statistics, ButtonCreateProduct } from './ProductsStyles';


const Products = () => {
  return (
    <ContentProducts>
      <Statistics>
        <p>Total products: 1</p>

        <ButtonCreateProduct>
          <Link to='/dashboard/products/create' >Create Product</Link>
        </ButtonCreateProduct>
      </Statistics>

    </ContentProducts>
  )
};

export default Products;
