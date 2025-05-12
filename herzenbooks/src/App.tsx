import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Home";
import Catalogpage from "./pages/Catalog";
import Cartpage from "./pages/Cart";
import Accountpage from "./pages/Account";

import { Layout } from './components/UI/Layout';

import {Bookpage} from './pages/Book';

import { NotFound } from "./pages/NotFound";


import "./App.css";


function App() {
  
  return (
      <Routes>
         <Route path="/" element={<Layout><Homepage /></Layout>} />
         <Route path="/Catalog" element={<Layout><Catalogpage /></Layout>} />
         <Route path="/Cart" element={<Layout><Cartpage /></Layout>} />
         <Route path="/Account" element={<Layout><Accountpage /></Layout>} />
         <Route path='/Book/:id' element= {<Layout><Bookpage/></Layout>}  /> 
         <Route path="*" element={<NotFound />}/> 
         

        </Routes>
        
  )
}

export default App

