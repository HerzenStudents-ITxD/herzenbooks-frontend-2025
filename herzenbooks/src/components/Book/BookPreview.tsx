import React, { useState, useEffect } from "react";
import { BookPreviewData } from '../../api/fakeApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';

interface BookPreviewProps {
  book: BookPreviewData & { inStock?: boolean };
  onClick?: () => void;
}

export const BookPreview = ({ book, onClick }: BookPreviewProps) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const cartItems = useAppSelector(state => state.cart.items);

  // Проверяем, есть ли книга в корзине при загрузке компонента
  useEffect(() => {
    const itemInCart = cartItems.some(item => item.id === book.id);
    setIsInCart(itemInCart);
  }, [cartItems, book.id]);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!book.inStock) return;
    dispatch(addToCart(book));
    setIsInCart(true);
  };

  const getIcon = () => {
    if (!book.inStock) return `${import.meta.env.BASE_URL}cart_mini.svg`;    
    if (isHovered || isInCart) return `${import.meta.env.BASE_URL}cart_mini2.svg`;
    return `${import.meta.env.BASE_URL}cart_mini.svg`;
  };

  return (
    <div className="flex flex-row w-75 h-40 gap-6" onClick={onClick}>
      <img 
        src={book.cover || "/vite.svg"} 
        alt={`Обложка: ${book.title}`}
        className="h-full w-auto object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/vite.svg";
        }}
      />

      <div className="flex flex-col justify-between" style={{ fontFamily: 'Akrobat' }}>
        <div>
          <h3 className="font-bold text-lg uppercase leading-5">{book.title}</h3>
          <p className="text-sm">{book.author}</p>
          {!book.inStock && (
            <p className="text-xs text-[rgb(43,64,143)] mt-1">Нет в наличии</p>
          )}
        </div>

        <div className="flex flex-row gap-5 items-center">
          <p className="font-bold text-xl">{book.price} P</p>
          <p className="text-xl"> | </p>
          <button
            onClick={handleAddClick}
            onMouseEnter={() => book.inStock && setIsHovered(true)}
            onMouseLeave={() => book.inStock && setIsHovered(false)}
            className="self-start hover:transition-opacity"
            disabled={!book.inStock}
          >
            <img 
              src={getIcon()} 
              alt={book.inStock ? "Добавить в корзину" : "Нет в наличии"}
              className={`w-6 h-6 transition-all ${!book.inStock ? 'opacity-50' : ''}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};