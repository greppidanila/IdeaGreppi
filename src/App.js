import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";
import "./App.css"
import Header from "./common/Header/Header";
import Pages from "./Pages/Pages";
import Data from "./components/ItemListCard/Data";
import Cart from "./common/Cart.js/Cart";
import Footer from "./common/Footer/Footer";

function App() {
  const {productItems} =  Data

  const [cartItem, setCardItem] = useState ([])

  const addToCart = (product) =>{
    const productExit = cartItem.find((item)=> item.id === product.id)
    if (productExit){
      setCardItem(cartItem.map((item) =>
      (item.id === product.id ? 
        {...productExit,qty:productExit.qty + 1 } : item)))
    }else{
      setCardItem([...cartItem, {...product, qty:1}])
    }
  } 
  
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item)=> item.id === product.id)
    if(productExit.qty===1){
      setCardItem(cartItem.filter((item)=> item.id !== product.id))
    }else{
      setCardItem(cartItem.map((item)=> (item.id === product.id? {...productExit, qty: productExit.qty - 1}: item)))
    }
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem}/>
        <Routes>
          <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} /> 
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
