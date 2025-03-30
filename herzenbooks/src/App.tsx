import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Home";
import Catalogpage from "./pages/Catalog";
import Cartpage from "./pages/Cart";
import Accountpage from "./pages/Account";

import BookCard from './components/BookCard';

import "./App.css";



function App() {
  
  return (
      <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/Catalog" element={<Catalogpage />} />
         <Route path="/Cart" element={<Cartpage />} />
         <Route path="/Account" element={<Accountpage />} />
         <Route path='/BookCard' element= {<BookCard/>}  />
        </Routes>
        
  )
}

export default App
