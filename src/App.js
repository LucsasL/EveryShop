// Hook Imports
import React, { createContext } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Imports
import Header from "./components/Header";
import Nav from "./components/nav";
// import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/index.css";

// Route/Page Import
import Product from "./pages/product";

// Data Import
import data from "./db/data";
const { img, title, star, reviews, prevPrice, newPrice } = data;

// Context
export const productSelected = createContext(data);

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Product />
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path={`/product/${title}`} element={<Product />} />
        </Routes>
      </Router> */}
      <Footer />
    </>
  );
}

export default App;
