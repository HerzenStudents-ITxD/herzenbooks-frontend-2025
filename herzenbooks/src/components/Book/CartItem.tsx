import React from 'react';
import { CartItem as CartItemType } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) newQuantity = 1;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-row items-start gap-4">
        <img 
          src={item.cover || "/vite.svg"} 
          alt={`Обложка: ${item.title}`}
          className="h-35 w-auto object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/vite.svg";
          }}
        />
        <div>
          <h3 className="font-bold text-2xl uppercase">{item.title}</h3>
          <p className="text-lx">{item.author}</p>
        </div>
      </div>
      
      <div className="flex flex-row items-center gap-7 font-bold">
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
            className={`flex items-center justify-center h-8 w-4 rounded-full
                      ${item.quantity <= 1 ? 'opacity-30 cursor-default' : 'hover:bg-gray-100'}`}
          >
            <img  
              alt="Уменьшить"
              src='vector2.svg'
              className="w-5 h-5"
            />
          </button>
          
          <span className="text-2xl min-w-[2rem] text-center">
            {item.quantity} шт
          </span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="flex items-center justify-center h-8 w-4 rounded-full hover:bg-gray-100"
          >
            <img  
              alt="Увеличить"
              src='vector1.svg'
              className="w-5 h-5"
            />
          </button>
        </div>
        
        <p className="w-24 text-center text-2xl font-extrabold">{item.price * item.quantity} Р</p>

        



        <button
          onClick={handleRemove}
          className="flex items-center justify-center h-6 w-6 border-2 rounded-full text-xs font-bold
                    hover:bg-[rgb(0,0,0)] hover:text-white hover:border-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;