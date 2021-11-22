import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './views/about';
import Home from './views/home';
import MyComponents from './views/my-components';

const Router = () => (
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/my-components' element={<MyComponents/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
);

export default Router;
