import React, { useLayoutEffect, useEffect, useState } from 'react'
//  Hooks
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GetSingleProduct from '../../Helpers/getSingleProduct';
// Conponents
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
// Icons
import { CgChevronLeft } from 'react-icons/cg';
// Styles
import { HeaderSingleProduct, ContentArrow,  ContentSingleProduct, ImageSingleProduct, InfoSingleProduct } from './SingleProductStyles';
import Loading from '../../components/Loading/Loading';

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
        console.log(product)
        
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
                            <img src={`${product.img_url}`} alt={product.title} />
                        </ImageSingleProduct>
                        <InfoSingleProduct>
                            <h3 className='titleProduct'>
                                { product.title }
                            </h3>
                            <span className='priceProduct' >S/. { product.price }</span>
                        </InfoSingleProduct>
                    </ContentSingleProduct>
                )
            }
            
        </>
    )
}

export default SingleProduct

