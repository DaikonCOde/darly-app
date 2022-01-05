import React from 'react';
import Search from '../../components/Search/Search';
import Carousel from '../../components/Carousel/Carousel';

import { ContentHome } from './HomeStyles';

const Home = () => {
    return (
        <ContentHome>
            <Search />
            <Carousel />
        </ContentHome>
    )
}

export default Home
