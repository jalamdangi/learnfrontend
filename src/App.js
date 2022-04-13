import React from 'react';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Testapi from './components/pages/Testapi';
import Product from './components/pages/Product'
import Singlepost from './components/pages/Singlepost';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/testapi' element={<Testapi/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='testapi/singlepost/:id' element={<Singlepost/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
