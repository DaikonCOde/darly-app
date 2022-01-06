import React from 'react';
import Search from '../../components/Search/Search';
import Carousel from '../../components/Carousel/Carousel';
import ListCategories from '../../components/ListCategories/ListCategories';

import { ContentHome } from './HomeStyles';
import GridProducts from '../../components/GridProducts/GridProducts';

const Home = () => {
    return (
        <ContentHome>
            <Search />
            <Carousel />
            <ListCategories />
            <GridProducts />
        </ContentHome>
    )
}

export default Home
