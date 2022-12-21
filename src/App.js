import React from "react"
import {Route, Routes } from 'react-router-dom'
import "./App.css"
import Header from "./components/Header/Header";
import ItemListContainer from "./components/MainPage/ItemListContainer";
import Home from "./components/MainPage/Home";
import ItemDetailContainer from "./components/MainPage/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
