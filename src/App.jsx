import React, { useState } from 'react';
import './App.css'
import Login from './Login';
import Home from './Home'
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order_summary from './Order_summary';
import Delivery from './Delivery';
import Payment from './Payment';

function App(){

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product_details' element={<ProductDetails />}/>
      <Route path='/Order_summary' element={<Order_summary/>}/>
      <Route path='/Delivery_Address' element={<Delivery/>}/>
      <Route path='/Payment' element={<Payment />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;