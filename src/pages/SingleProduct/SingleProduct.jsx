import React, { useLayoutEffect, useEffect, useState } from "react";
//  Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateListProducts } from "../../Store/Reducers/ListProducts/ListProducts";
import { getProducts } from "../../Helpers/getProducts";
import { AddProductCart } from "../../Helpers/AddProductCart";
// Conponents
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import Loading from "../../components/Loading/Loading";

// Icons
import { CgChevronLeft } from "react-icons/cg";

// Styles
import {
  HeaderSingleProduct,
  ContentArrow,
  ContentSingleProduct,
  ImageSingleProduct,
  InfoSingleProduct,
  ContentCarouselImage,
  ContentButtons,
} from "./SingleProductStyles";
import {
  ButtonGradient,
  ButtonBorder,
} from "../../Styles/GlobalComponents/buttonGradient";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import config from "../../config";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.listProducts);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [submitProductCart] = AddProductCart();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (products.length === 0) {
        const listProducts = await getProducts();
        const singleProduct = listProducts.find((product) => product.id === id);
        setProduct(singleProduct);
        dispatch(updateListProducts(listProducts));
      } else {
        const singleProduct = products.find((product) => product.id === id);
        setProduct(singleProduct);
      }
      setLoading(false);
    };

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handlePath = (e) => {
    navigate(-1);
  };

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${config.PHONE}&text=Hola%20Darly%20Store%20quiero%20adquirir%20este%20producto:%0A-%20Nombre:%20${product.title}%0A-%20Precio:%20${product.price}%0A-%20Cantidad:%201%0A-%20Mi%20nombre%20es:%20...%0A-%20Soy%20de:%20...`;

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
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
              >
                {product.gallery_url.map((img) => {
                  return (
                    <SwiperSlide className="itemCarousel" key={img}>
                      <img
                        onLoad={() => setLoading(false)}
                        lazy="true"
                        src={img}
                        alt={product.title}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ContentCarouselImage>
          </ImageSingleProduct>
          <InfoSingleProduct>
            <h3 className="titleProduct">{product.title}</h3>
            <span className="priceProduct">
              <span>S/. {product.totalPrice}</span> S/.{" "}
              {product.price.toFixed(2)}{" "}
            </span>
            <p className="description"> {product.description} </p>
            <ContentButtons>
              <ButtonGradient as="a" href={urlWhatsApp} target="_blank">
                Comprar
              </ButtonGradient>
              <ButtonBorder
                className="button-border"
                onClick={() => submitProductCart(product.id)}
              >
                Agregar la carrito
              </ButtonBorder>
            </ContentButtons>
          </InfoSingleProduct>
        </ContentSingleProduct>
      )}
    </>
  );
};

export default SingleProduct;
