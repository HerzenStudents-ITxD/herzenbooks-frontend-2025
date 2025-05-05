import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { clearCart } from '../store/cartSlice'; // Предполагается, что у вас есть такой action
import CartItem from '../components/Book/CartItem';

const CartPage = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();
  
  // Вычисляем общую сумму
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );

  // Обработчик очистки корзины
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='flex w-5/6 flex-col mx-auto items-start'>
      <div className="container mx-auto text-4xl mb-6 font-bold mt-5">
        <h1 style={{ fontFamily: 'Akrobat' }}>корзина</h1>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="w-full text-center text-gray-500 mt-10">
          Ваша корзина пуста
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-10 w-full mt-10">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          {/* Блок с итоговой суммой */}
          <div className="flex justify-end w-full mt-10 pt-6">
            <div className="flex items-center gap-10">
              <span className="text-2xl font-bold">итоговая сумма:</span>
              <span className="text-2xl font-bold">{totalAmount} Р </span>
              
              {/* Кнопка очистки корзины */}
              <button
                onClick={handleClearCart}
                className="flex items-center justify-center h-6 w-6 border-2 rounded-full text-xs font-bold
                          hover:bg-[rgb(0,0,0)] hover:text-white hover:border-black
                          transition-colors duration-200 ml-4"
                title="Очистить корзину"
              >
                ✕
              </button>
            </div>
          </div>
          <button className=" w-50 h-12 mt-20 text-2xl bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
             собрать заказ
          </button> 
        </>
      )}
    </div>
  );
};

export default CartPage;