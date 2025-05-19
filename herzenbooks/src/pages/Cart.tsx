import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { clearCart, createOrder } from '../store/cartSlice';
import CartItem from '../components/Book/CartItem';
import OrderModal from '../components/AccountModal/OrderModal';

const CartPage = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePlaceOrder = () => {
    dispatch(createOrder());
    setIsModalOpen(true);
  };

  return (
    <div className='flex w-5/6 flex-col mx-auto items-center'>
      <div className="container mx-auto text-4xl mb-6 font-bold mt-5">
        <h1 style={{ fontFamily: 'Akrobat' }}>корзина</h1>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="w-full text-center text-gray-500 mt-10" style={{ fontFamily: 'Akrobat' }}>
          ваша корзина пуста
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-10 w-full mt-10">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="flex justify-end w-full mt-10 pt-6">
            <div className="flex items-center gap-10">
              <span className="text-2xl font-bold" style={{ fontFamily: 'Akrobat' }}>итоговая сумма:</span>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Akrobat' }}>{totalAmount} Р</span>
              
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

          <button 
            onClick={handlePlaceOrder}
            className="w-50 h-12 mt-20 text-2xl bg-[rgb(248,80,39)] text-white rounded-full hover:bg-[rgb(248,80,39)] transition-colors"
            style={{ fontFamily: 'Akrobat' }}
          >
            собрать заказ
          </button> 

          <div className='flex text-sm text-center mt-5 md:text-lg w-70 md:w-92 leading-5 items-center' style={{ fontFamily: 'Futuris' }}>
            Мы не досталвяем книги на дом, вы можете забрать и 
            оплатить заказ только в нашем магазине по адресу Казанская улица, 1/25
          </div>
        </>
      )}

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default CartPage;