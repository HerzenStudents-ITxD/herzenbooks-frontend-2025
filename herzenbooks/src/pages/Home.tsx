import React from 'react';
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div className='home-page'>
            <h1 className='text-3xl'
            > Herzen книги </h1>
        
        <div className='navigation-buttons'>
            <>
            <button
                onClick={() => navigate('/Catalog')} > 
                Каталог
            </button>

            <button
                onClick={() => navigate('/Cart')} > 
                Корзина
            </button>

            <button
                onClick={() => navigate('/Account')} > 
                Аккаунт
            </button>

            <button
                onClick={() => navigate('../BookCard')} > 
                Книга
            </button>
            
            </>
        </div>
        </div>

    );
};

export default Homepage;



