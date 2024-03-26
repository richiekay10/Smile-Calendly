import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Startup from './pages/Startup';
import Register  from './pages/Register';
import Login from './pages/Login';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Startup' element={<Startup />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;