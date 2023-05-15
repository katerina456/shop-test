import React from 'react';
import './css/app.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Basket from './components/Basket';

import productsList from "./productsList.json";

function App() {
  const [basketProducts, setBasketProducts] = React.useState([]);

  function addBasketProduct(item) {
    let cod = item.id;
    
    let index = basketProducts.findIndex(e => e.id === cod);

    if (index === -1) {
      setBasketProducts(prev => {
        item.quantity = 1
        return [...prev, item];
      }) 
    } else {
      setBasketProducts(basketProducts.filter(prod => prod.id !== item.id));
    }
  }

  function apdateBasketElement(cod, quantity) {
    let index = basketProducts.findIndex(e => e.id === cod);

    setBasketProducts(prev => {
      prev[index].quantity= quantity
      return prev;
    }) 
  }

  return (
    <BrowserRouter >
    <div className="App">
      <Header count={basketProducts.length} />

      <Routes>
        <Route exact path="/" element={<Catalog products={productsList} 
              handleClick={addBasketProduct} />} 
        />

        <Route exact path='/basket' element={<Basket products={basketProducts} 
              handleClick={addBasketProduct}
              apdate={apdateBasketElement} />} 
        />
      </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
