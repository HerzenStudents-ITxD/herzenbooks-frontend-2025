import React from "react";
import { BookPreviewData } from '../../api/fakeApi';

interface BookPreviewProps {
  book: BookPreviewData;
  onClick?: () => void;
  onAddToCart?: () => void;
}

export const BookPreview = ({ book, onClick, onAddToCart }: BookPreviewProps) => {
  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.();
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

      <div className="flex flex-col" style={{ fontFamily: 'Akrobat' }}>
        <div>
          <h3 className="font-bold text-lg uppercase">{book.title}</h3>
          <p className="text-sm">{book.author}</p>
          <p className="font-bold">{book.price} ₽</p>
        </div>

        {/* кнопка добавить в корзину */}
        <button
          onClick={handleAddClick}
          className="mt-2 px-3 py-1 self-start"
        >
          <img 
             src="/cart_mini.svg" 
             alt="Добавить в корзину"
             className="w-5 h-5" // Размеры по вашему усмотрению
            />
        </button>
      </div>
    </div>
  );
};