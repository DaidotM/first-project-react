import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/home';
import RegisterProduct from './views/register-product';
import DetailProduct from './views/detail-product';
import About from './views/about';

const Router = () => (
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/register-product' element={<RegisterProduct />} />
    <Route path='/detail-product/:id' element={<DetailProduct />} />
    <Route path='/about' element={<About/>} />
  </Routes>
);

export default Router;
