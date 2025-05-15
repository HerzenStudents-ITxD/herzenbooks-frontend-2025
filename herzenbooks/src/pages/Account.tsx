import { useState } from 'react';
import { useAppSelector } from '../store/hooks';

const Accountpage = () => {
  const orders = useAppSelector(state => state.cart.orders);
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');

  return (
    <div className='flex w-5/6 flex-col mx-auto items-start'>
      <div className="container mx-auto mb-6 mt-5">
        <h1 className="font-bold text-4xl" style={{ fontFamily: 'Akrobat' }}>мой аккаунт</h1>

        <div className='flex flex-row justify-between mt-15'>
          <div className='flex p-10 flex-col bg-white w-75 h-85 rounded shadow-s'>  
            <div className='flex flex-col gap-5 text-lg' style={{ fontFamily: 'Futuris' }}>
              <p> имя фамилия </p>
              <p> почта </p>
              <p> телефон </p>
              <p> пароль </p>
            </div>
            
            <div className='flex flex-col items-start text-sm mt-5'>
              <button className='text-[rgb(43,64,143)]'>
                ● редактировать 
              </button>
              <button className='text-[rgb(248,80,39)]'>
                ● удалить аккаунт
              </button>
            </div>
          </div>

          <div className='flex w-5/7 flex-col'>
            <h1 className='text-2xl' style={{ fontFamily: 'Akrobat' }}>заказы</h1>
            
            {orders.length === 0 ? (
              <p className="mt-4" style={{ fontFamily: 'Akrobat' }}>У вас нет активных заказов</p>
            ) : (
              <div className="mt-4 space-y-4">
                {orders.map((order, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between">

                      <div>
                        <h3 className="font-bold uppercase text-xl" style={{ fontFamily: 'Akrobat' }}>{order.title}</h3>
                        <p style={{ fontFamily: 'Akrobat' }}>{order.author}</p>
                      
                      </div>

                      <div>
                      <p className="text-xl" style={{ fontFamily: 'Akrobat' }}>
                          {new Date(order.orderDate).toLocaleDateString('ru-RU')}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className={`text-2xl ${
                          order.status === 'processing' ? 'text-black' : 
                          order.status === 'ready' ? 'text-green-500' : 'text-gray-500'
                        }`} style={{ fontFamily: 'Akrobat' }}> 
                          {order.status === 'processing' ? 'собирается' : 
                           order.status === 'ready' ? 'Готов к выдаче' : 'Завершен'}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountpage;