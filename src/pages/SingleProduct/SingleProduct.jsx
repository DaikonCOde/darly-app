import React, { useLayoutEffect, useEffect, useState } from 'react'
//  Hooks
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GetSingleProduct from '../../Helpers/getSingleProduct';
// Conponents
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import Loading from '../../components/Loading/Loading';
// Icons
import { CgChevronLeft } from 'react-icons/cg';

// Styles
import { HeaderSingleProduct, ContentArrow,  ContentSingleProduct, ImageSingleProduct, InfoSingleProduct, ContentCarouselImage } from './SingleProductStyles';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation  } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

const SingleProduct =  () => {

    const {id} = useParams();
    const { products } = useSelector( state => state.listProducts );
    const [ loading, setLoading ] = useState(true);
    const [ product, setProduct ] = useState({});
    const navigate = useNavigate()

    useLayoutEffect( () => { 
        window.scrollTo(0, 0);
    }, [] )
    
    useEffect(() => {
        const getData = async () => {

            if(products.length === 0) {
                const objProduct = await GetSingleProduct(id);
                setProduct(objProduct);
            }  else {
                const singleProduct = products.find( product => product.id === id );
                setProduct(singleProduct)
            }
            setLoading(false)
            
        }
        
        getData()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ id ]);

    const handlePath = (e) => {
        navigate(-1)
    }


    return (
        <>
            <HeaderSingleProduct>
                <ContentArrow onClick={handlePath}>
                        <CgChevronLeft />
                </ContentArrow>
                <ShoppingCart />
            </HeaderSingleProduct>
            {loading 
                ? <Loading />
                : (
                    <ContentSingleProduct>
                        <ImageSingleProduct>
                            <ContentCarouselImage>
                                <Swiper
                                // install Swiper modules
                                modules={[Navigation ]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={true}   
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                >
                                    {
                                        product.gallery_url.map( (img ) => {
                                            return (
                                                <SwiperSlide  className="itemCarousel"  key={img}>
                                                    <img onLoad={() => setLoading(false)} lazy='true' src={img} alt={product.title} />
                                                    
                                                </SwiperSlide>

                                            )
                                        } )
                                    }
                                </Swiper>
                            </ContentCarouselImage>
                        </ImageSingleProduct>
                        <InfoSingleProduct>
                            <h3 className='titleProduct'>
                                { product.title }
                            </h3>
                            <span className='priceProduct' >S/. { product.price.toFixed(2) }</span>
                            <p  className='description'> { product.description } </p>
                        </InfoSingleProduct>
                    </ContentSingleProduct>
                )
            }
            
        </>
    )
}

export default SingleProduct

