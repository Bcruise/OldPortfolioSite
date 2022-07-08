import React from 'react';
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

const Home = () => {
  return (
    <>
        <Intro />
        <ProductList />
        <About />
        <Contact />
    </>
  )
}

export default Home