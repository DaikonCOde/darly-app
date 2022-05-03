import React from 'react';

import { useSearchParams } from 'react-router-dom';

const EditProduct = () => {
  
  const [ searchParams ] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <h1>Edit {id} </h1>

  )
};

export default EditProduct;
