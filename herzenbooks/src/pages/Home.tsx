import React from 'react';
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate();
    return (
        <>
        
        <div className='home-page flex flex-col w-full mx-auto items-center  md:w-5/6'>

            
            <div className='flex w-4/6 ml-10 md:w-4/6 md:ml-60'> 
                <img src="logo.svg" alt="LoGO" className="h-19 lg:h-27"/>
            </div>
            
            <div className='flex w-1/3 flex-col '>
            
            <div className='flex w-70 mt-5 lg:w-150 md:mt-10'>
                <p className='text-lg leading-5 md:text-2xl md:leading-6 mx-auto'style={{ fontFamily: 'Futuris' }}>
                новинки художественной литературы 
                от издательства российского государственного педагогического университета имени А.И. Герцена</p>
             </div>

             <button 
                onClick={() => navigate('/Catalog')} 
                className=' w-32 h-10 mt-6 mb-10 text-sm sm:text-lg   bg-[rgb(248,80,39)] text-white hover:bg-[rgb(72,41,34)] hover:text-white transition-colors duration-200  rounded-full '> 
                найти книгу
            </button>
            </div>

            <img src="home_image.svg" alt="image" className= "w-100 m-2 md:w-4/6 md:mt-2-0" />
      
        </div>
         
        <div className='flex mx-auto w-5/6 mt-20 flex-col '>
             <div className='flex flex-col '>

                <h1 className='text-4xl md:text-5xl font-bold'>
                   мероприятия 
                </h1>
                
                <div className='flex flex-row flex-wrap w-full gap-8 mt-15'>
                    
                    <div className='flex w-100 flex-col bg-white p-7 rounded-xl'>
                    
                        <h1 className=' text-2xl leading-7 mb-12'>Практический семинар для педагогов русского языка </h1>
                        <div className='flex flex-row justify-between'>
                             <p className='text-3xl mb-2'>29.09</p>
                             <button>перейти</button>
                        </div>
                        <img src="ivent1.jpg" alt="image" />
                    </div>

                    <div className='flex w-100 flex-col  bg-white p-7 rounded-xl'>
                        <h1 className=' text-2xl leading-7 mb-12'>Мастер-классы для школьников, студентов и педагогов</h1>
                        <div className='flex flex-row justify-between'>
                             <p className='text-3xl mb-2'>29.09</p>
                             <button>перейти</button>
                        </div>
                        <img src="ivent2.jpg" alt="image" />
                    </div>

                    <div className='flex w-100 flex-col  bg-white p-7 rounded-xl'>
                        <h1 className=' text-2xl leading-7 mb-12'>Лекция о жизни и творчестве Виктора Пелевина</h1>
                        <div className='flex flex-row justify-between'>
                             <p className='text-3xl mb-2'>29.09</p>
                             <button>перейти</button>
                        </div>
                        <img src="ivent3.jpg" alt="image" />
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



