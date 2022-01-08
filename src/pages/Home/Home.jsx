import React  from 'react';

// Components
import Search from '../../components/Search/Search';
import Carousel from '../../components/Carousel/Carousel';
import ListCategories from '../../components/ListCategories/ListCategories';
import GridProducts from '../../components/GridProducts/GridProducts';

// Styles

import { ContentHome } from './HomeStyles';

const Home = () => {

    return (
        <>
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
