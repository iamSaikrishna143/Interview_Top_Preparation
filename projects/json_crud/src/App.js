import React from "react";
import Layout from "./pages/layout";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes> */}
        <Product/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
