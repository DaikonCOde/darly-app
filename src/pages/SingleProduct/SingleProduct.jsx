import React from 'react'
//  Hooks
import { useNavigate, useParams } from 'react-router-dom';
import useSingleProduct from '../../Hooks/useSingleProduct';
// Conponents
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
// Icons
import { CgChevronLeft } from 'react-icons/cg';
// Styles
import { HeaderSingleProduct, ContentArrow,  ContentSingleProduct, ImageSingleProduct, InfoSingleProduct } from './SingleProductStyles';

const SingleProduct = () => {

    const {slug} = useParams();

    const product = useSingleProduct(slug);
    const navigate = useNavigate()

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
            <ContentSingleProduct>
                <ImageSingleProduct>
                    <img src={require(`../../Assets/image/${product.img_url}`)} alt="" />
                </ImageSingleProduct>
                <InfoSingleProduct>
                    <h3 className='titleProduct'>
                        { product.title }
                    </h3>
                    <span className='priceProduct' >S/. { product.price }</span>

                </InfoSingleProduct>
            </ContentSingleProduct>
        </>
    )
}

export default SingleProduct
