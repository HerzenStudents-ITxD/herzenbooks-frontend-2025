import { useState } from 'react';


const Accountpage = () => {
    return (
        <div className='flex w-5/6 flex-col mx-auto items-start'>
          <div className="container mx-auto mb-6 mt-5">
            <h1 className= "font-bold text-4xl"style={{ fontFamily: 'Akrobat' }}>мой аккаунт</h1>

            <div className='flex flex-row justify-between  mt-15'>

               <div className='flex p-10 flex-col bg-white w-75 h-85 rounded shadow-sm'>  
                  <div className='flex flex-col gap-5 text-lg'style={{ fontFamily: 'Futuris' }}>
                    <p> имя фамилия </p>
                    <p> почта </p>
                    <p> телефон </p>
                    <p> пароль </p>
                  </div>
                  
                  <div className='flex flex-col items-start text-sm mt-5'>
                  <button className='text-[rgb(43,64,143)]'>
                    редактировать 
                    <span className='ml-3 mt-3 absolute bg-[rgb(43,64,143)] rounded-full h-1 w-1'></span>
                  </button>
                  <button className='text-[rgb(248,80,39)]'>
                    удалить аккаунт
                    <span className='ml-3 mt-3 absolute bg-[rgb(248,80,39)] rounded-full h-1 w-1'></span>
                  </button>
                  </div>
                  
               </div>

               <div className='flex w-5/7 flex-col'>
                 <h1 className='text-2xl'>заказы</h1>
               </div>
            </div>

          </div>
        </div>

          )
    
}

export default Accountpage