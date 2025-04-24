import React from 'react';
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate();
    return (
        <>
        
        <div className='home-page flex flex-col w-5/6 mx-auto  items-center'>
            
            <div className='flex w-4/6 ml-5'> 
                <img src="logo.svg" alt="LoGO" className="h-27"/>
            </div>
            
            <div className='flex w-1/3 flex-col'>
             <div>
                <p className='text-2xl leading-6 mt-10  mx-auto'style={{ fontFamily: 'Futuris' }}>
                новинки художественной литературы 
                от издательства российского государственного педагогического университета имени А.И. Герцена</p>
             </div>
             <button 
                onClick={() => navigate('/Catalog')} 
                className=' w-25 h-9 mt-6 mb-10 bg-white text-black hover:bg-[rgb(248,80,39)] hover:text-white transition-colors duration-200  rounded-full '> 
                найти книгу
            </button>
            </div>

            <img src="home_image.svg" alt="image" className= "w-4/6 mt-2-0" />
      
        </div>
         
        <div className='flex mx-auto w-5/6 mt-20 flex-col '>
             <div className='flex flex-col '>
                <h1 className='text-5xl font-bold'>
                   мероприятия 
                </h1>
                <div className='flex flex-row gap-10 mt-15'>
                    <div className='flex w-1/3  flex-col  bg-white p-7 rounded-xl'>
                        <h1>практический семинар для педагогов</h1>
                        <p>29.09</p>
                        <img src="ivent1.jpg" alt="image" />
                    </div>
                    <div className='flex w-1/3  flex-col bg-white '>
                        <h1>практический семинар для педагогов</h1>
                        <img src="" alt="" />
                    </div>
                    <div className='flex w-1/3  flex-col  bg-white '>
                        <h1>практический семинар для педагогов</h1>
                        <img src="" alt="" />
                    </div>
                </div>


            </div>
             <h1 className='text-5xl font-bold'>
                новые книги
             </h1>

    </div>

    </>
    );
};

export default Homepage;



