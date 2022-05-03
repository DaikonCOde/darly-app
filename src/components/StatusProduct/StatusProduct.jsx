import React, { useEffect } from "react";

import { ContentListCategories, SingleCategory } from "./StatusProductStyles";

import { useGetProductsByStatus } from "../../Hooks/useGetProductsByStatus";

const StatusProduct = [
  {
    title: "Todos",
    type: "all",
    id: 0,
  },
  {
    title: "En Stock",
    type: "stock",
    id: 1,
  },
  {
    title: "Pronto",
    type: "comingSoon",
    id: 2,
  },
  {
    title: "A Pedido",
    type: "onRequest",
    id: 3,
  },
];

const StatusProducts = () => {

  if(!localStorage.getItem("idStatusProduct")) {
    localStorage.setItem("idStatusProduct", 0);
  }

  const [ getProductsByStatus ] = useGetProductsByStatus();

  useEffect(() => {
    const statusId = parseInt(localStorage.getItem("idStatusProduct"));
    console.log(statusId);
    ChangeCategory(statusId);
  }, []);

  // handle click on single categorie

  const HandleCategories = (e) => {
    const id = parseInt(e.target.id);
    const type = e.target.dataset.type;

    getProductsByStatus(type);
    localStorage.setItem("idStatusProduct", id);
    ChangeCategory(id);
  };

  const ChangeCategory = (id) => {
    const singleCategory = document.querySelectorAll(".singleCategory");

    singleCategory.forEach((category) =>
      parseInt(category.id) === id
        ? category.classList.add("categoryActive")
        : category.classList.remove("categoryActive")
    );
  };

  return (
    <ContentListCategories>
      {StatusProduct.map((product) => (
        <SingleCategory
          onClick={HandleCategories}
          key={product.id}
          className="singleCategory"
          id={product.id}
          data-type={product.type}
        >
          {product.title}
        </SingleCategory>
      ))}
    </ContentListCategories>
  );
};

export default StatusProducts;
