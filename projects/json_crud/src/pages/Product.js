import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const Product = () => {
  const [content, setContent] = useState(<ProductList showForm={showForm} />);
  function showList() {
    setContent(<ProductList showForm={showForm} />);
  }
  function showForm(product) {
    setContent(<ProductForm product={product} showList={showList} />);
  }
  return <div className="container my-5">{content}</div>;
};

export default Product;
