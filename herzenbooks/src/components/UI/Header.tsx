import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from './Footer'; 



export const Header =()=> {
        const navigate = useNavigate();
    
    return (
        <header className="flex mt-6 text-2xl font-bold  mx-5  justify-center gap-20">

            <>
            <button
                onClick={() => navigate ("/")}>
                    <img src="logo.svg" alt="LoGO" className="h-10"/>
            </button>

            <button
                onClick={() => navigate ("/")}>
                   <img src="rectangle.svg" alt="LoGO" className="h-10"/>
            </button>

            <button
                onClick={() => navigate(Footer)} > 
                контакты
            </button>

            <button
                onClick={() => navigate('././Catalog')} > 
                каталог
            </button>

            <button
                onClick={() => navigate('././Cart')} > 
                корзина
            </button>

            <button
                onClick={() => navigate('././Account')} > 
                <img src="akk.svg" alt="acc" className="h-6"/>
            </button>
            </>

        
        

        </header>
        
    );
    
};
