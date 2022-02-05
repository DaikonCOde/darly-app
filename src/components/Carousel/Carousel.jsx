import React from "react";
import { Link } from "react-router-dom";

import {
  ContentCarousel,
  SingleItemCarousel,
  ContentTextSlide,
  ContentImageSlide,
} from "./CarouselStyles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    title: "Wireless HeadPhones",
    cta: "50% Desc",
    img_url: "girlhead.png",
    id: 1,
  },
  {
    title: "Smarth Watch",
    cta: "40% Desc",
    img_url: "girlhead.png",
    id: 2,
  },
  {
    title: "PS 5 lite",
    cta: "20% Desc",
    img_url: "girlhead.png",
    id: 3,
  },
];

const Carousel = () => {
  return (
    <ContentCarousel>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="itemsCarousel"
          breakpoints={{
            480: {
              width: 480,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id} >
              <SingleItemCarousel >
                <ContentTextSlide>
                  <span>{slide.cta}</span>
                  <h3>{slide.title}</h3>
                  <Link to="/">Comprar</Link>
                </ContentTextSlide>
                <ContentImageSlide>
                  <img
                    src={require(`../../Assets/image/${slide.img_url}`)}
                    alt=""
                  />
                </ContentImageSlide>
              </SingleItemCarousel>
            </SwiperSlide>
          ))}
        </Swiper>
    </ContentCarousel>
  );
};

export default Carousel;
