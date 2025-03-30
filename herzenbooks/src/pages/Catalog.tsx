import React from 'react';
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";



const Catalogpage = () => {
    const navigate = useNavigate();

    return <div>
        <h1>Каталог</h1>
        
        <div className='book-list'>
            <button
                onClick={() => navigate('../BookCard')} > 
                Книга
            </button>
            </div>
        </div>
        
}



export default Catalogpage