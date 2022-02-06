import React, { useEffect, useLayoutEffect } from 'react';
// Hooks
import { useSearchParams } from 'react-router-dom';
import { useGetListProductsByCategory } from '../../Hooks/useGetListProductsByCategory';
// Components
import GridProducts from '../../components/GridProducts/GridProducts';
import Loading from '../../components/Loading/Loading';
// Styles
import { ContentCategory } from './CategoryStyles';
import { TitleSection } from '../../Styles/GlobalComponents/Titles';

const Category = () => {

  const [ searchParams ] = useSearchParams();
  const [ getListProductsByCategory, listProducts, isLoading ] = useGetListProductsByCategory();
  const q = searchParams.get('q');
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    getListProductsByCategory(q);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return (
    <ContentCategory>
      <TitleSection>Resultados para: { q }</TitleSection>
      {
        isLoading
          ? <Loading />
          : <GridProducts products={ listProducts } />  
      }
    </ContentCategory>
  )
};

export default Category;
