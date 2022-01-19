import React from 'react';

// DB
// import { DBfirestore  } from '../../db/connect';
// import {  getDocs, collection} from 'firebase/firestore';

// Components
import Search from '../../components/Search/Search';
import Carousel from '../../components/Carousel/Carousel';
import ListCategories from '../../components/ListCategories/ListCategories';
import GridProducts from '../../components/GridProducts/GridProducts';
import Header from '../../components/Header/Header';

// Styles
import { ContentHome } from './HomeStyles';

const Home =  () => {

    
    // useEffect( () =>{
    //     const getData = async () => {
    //         const listProducts = await getDocs(collection(DBfirestore, 'products'));
    //         listProducts.forEach((doc) => {
    //             const product = doc.data()
    //             console.log(`${doc.id } : ${(product.name)} ${(product.precio)}`);
    //         })
    //     }
        
    //     getData();

    // }, [])

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
