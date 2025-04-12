import React from 'react';
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate();
    return (
        <>
        
        <div className='home-page flex flex-col w-5/6 mx-auto  items-center'>
            
            <div className='flex w-4/6 ml-5'> 
                <img src="logo.svg" alt="LoGO" className="h-25 mt-10"/>
            </div>
            
            
            <div>
                <p className='flex w-1/3 text-2xl leading-6 mt-15  mx-auto'style={{ fontFamily: 'Futuris' }}>
                новинки художественной литературы 
                от издательства российского государственного педагогического университета имени А.И. Герцена</p>
            </div>
            
            <img src="home_image.svg" alt="image" className= "w-4/6 mt-2-0" />
      
        </div>
         
        <div className='flex mx-auto w-5/6 mt-20 flex-col '>
             <h1 className='text-5xl font-bold'>
                мероприятия 
             </h1>
             <h1 className='text-5xl font-bold'>
                новые книги
             </h1>

    </div>

    </>
    );
};

export default Homepage;



