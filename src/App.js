import React from 'react';
import './css/app.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Basket from './components/Basket';

import productsList from "./productsList.json";

function App() {
  console.log(productsList);
  const [basketProducts, setBasketProducts] = React.useState([]);

  function addBasketProduct(item, num) {
    let cod = item.id;
    console.log(cod)
    let index = basketProducts.findIndex(e => e.id === cod);

    if (index === -1) {
      setBasketProducts(prev => {
        console.log('num',num)

        if (num) {
          item.quantity = num
        } else {
          item.quantity = 1
        }

        
        console.log(item)
        return [...prev, item];
      }) 
    } else {
      setBasketProducts(basketProducts.filter(prod => prod.id !== item.id));
    }
  }


  function apdateBasketElement(cod, quantity) {
    /* let array = basketProducts;
    console.log(array) */
    let index = basketProducts.findIndex(e => e.id === cod);
    /* console.log(index) */
    /* array[index].quantity = quantity; */

    setBasketProducts(prev => {
      prev[index].quantity= quantity
      return prev;
    }) 
    
  }

  console.log(basketProducts)

  return (
    <BrowserRouter >
    <div className="App">
      <Header count={basketProducts.length} />

      <Routes>
        <Route exact path="/" element={<Catalog products={productsList} handleClick={addBasketProduct} />} />

        <Route exact path='/basket' element={<Basket products={basketProducts} 
        apdate={apdateBasketElement}
        />} />
      </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
