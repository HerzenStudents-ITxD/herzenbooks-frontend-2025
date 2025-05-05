import React, { useState } from "react";
import { BookPreviewData } from '../../api/fakeApi';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';

interface BookPreviewProps {
  book: BookPreviewData;
  onClick?: () => void;
}

export const BookPreview = ({ book, onClick }: BookPreviewProps) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart(book)); // Отправляем книгу в корзину
    setIsClicked(true);
  };

  const getIcon = () => {
    if (isClicked || isHovered) return "/cart_mini2.svg";
    return "/cart_mini.svg";
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
        </div>

        <div className="flex flex-row gap-5">
          <p className="font-bold text-xl">{book.price} P</p>
          <p className="text-xl"> | </p>
          <button
            onClick={handleAddClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => !isClicked && setIsHovered(false)} 
            className="self-start hover:transition-opacity"
          >
            <img 
              src={getIcon()} 
              alt="Добавить в корзину"
              className="w-6 h-6 transition-all"
            />
          </button>
        </div>
      </div>
    </div>
  );
};