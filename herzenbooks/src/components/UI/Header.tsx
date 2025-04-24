import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from './Footer'; 


export const Header =()=> {
        const navigate = useNavigate();

    return (
        <header className="flex mx-auto w-5/6 mt-6  font-bold  mx-5  justify-between gap-20">
            <>
            <button
                onClick={() => navigate ("/")}>
                    <img src="logo.svg" alt="LoGO" className="h-10"/>
            </button>

            
            <div className='flex text-s w-140 h-10 bg-white shadow-lg'>
            <input
              type="text"
              placeholder="поиск"
              className="w-full p-3"
            />
          </div>



            <button className="text-2xl"
                 onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                 контакты
            </button>

            <button className="text-2xl"
                onClick={() => navigate('/Catalog')} > 
                каталог
            </button>

            <button className="text-2xl"
                onClick={() => navigate('/Cart')} > 
                корзина
            </button>

            <button className="text-2xl"
                onClick={() => navigate('/Account')} > 
                <img src="akk.svg" alt="acc" className="h-6"/>
            </button>
            </>

        </header>
        
    );
    
};
