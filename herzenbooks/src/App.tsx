import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Home";
import Catalogpage from "./pages/Catalog";
import Cartpage from "./pages/Cart";
import Accountpage from "./pages/Account";


import BookCard from './components/Book/BookCard';

import "./App.css";

import "/fonts/akrobat-bold.woff2"

function App() {
  
  return (
      <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/Catalog" element={<Catalogpage />} />
         <Route path="/Cart" element={<Cartpage />} />
         <Route path="/Account" element={<Accountpage />} />
         <Route path='/book/:id' element= {<BookCard/>}  /> 
        </Routes>
        
  )
}

export default App
