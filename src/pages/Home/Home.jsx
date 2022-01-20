import React, { useEffect } from 'react';

// DB
import { updateListProducts } from '../../Store/Reducers/ListProducts/ListProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Helpers/getProducts';

// Components
import Search from '../../components/Search/Search';
import Carousel from '../../components/Carousel/Carousel';
import ListCategories from '../../components/ListCategories/ListCategories';
import GridProducts from '../../components/GridProducts/GridProducts';
import Header from '../../components/Header/Header';

// Styles
import { ContentHome } from './HomeStyles';

const Home =  () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.listProducts)

    useEffect( () => {
        
        const data = async () => {
            const listProducts =  await getProducts();
            
            if (listProducts.length === products.length) return null;

            dispatch( updateListProducts(listProducts) );

        }

        data()
    
    }, [dispatch, products] ) 

    return (
        <>
            <Header />
            <ContentHome>
                <Search />
                <Carousel />
                <ListCategories />
                <GridProducts />
            </ContentHome>
        </>
    )
}

export default Home
