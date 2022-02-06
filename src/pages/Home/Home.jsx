import React, { useEffect } from "react";

// Hooks
import { useGetListProducts } from "../../Hooks/useGetListProducts";
import { useSelector } from "react-redux";
// Components
import Search from "../../components/Search/Search";
import Carousel from "../../components/Carousel/Carousel";
import StatusProduct from "../../components/StatusProduct/StatusProduct";
import GridProducts from "../../components/GridProducts/GridProducts";

// Styles
import { ContentHome } from "./HomeStyles";
import { Content } from "../../Styles/GlobalComponents/content";

const Home = () => {
  const { products } = useSelector((state) => state.listProducts);
  const { productsByStatus } = useSelector((state) => state.listStatusProducts);

  const [getListProducts] = useGetListProducts();

  useEffect(() => {
    if (products.length === 0) {
      getListProducts();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content>
      <ContentHome>
        <Search />
        <Carousel />
        <StatusProduct />
        <GridProducts products={productsByStatus} />
      </ContentHome>
    </Content>
  );
};

export default Home;
