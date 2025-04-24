// components/Cart/CartItem.tsx
import { BookPreviewData } from '../../api/fakeApi';

interface CartItemProps {
  book: BookPreviewData;
  onRemove: () => void;
}

export const CartItem = ({ book, onRemove }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <div className="flex items-center gap-3">
        <img 
          src={book.cover || "/vite.svg"} 
          alt={book.title}
          className="w-12 h-16 object-contain"
        />
        <div>
          <h4 className="font-semibold line-clamp-1">{book.title}</h4>
          <p className="text-sm text-gray-600">{book.author}</p>
          <p className="font-bold">{book.price} ₽</p>
        </div>
      </div>
      <button 
        onClick={onRemove}
        className="text-red-500 hover:text-red-700"
      >
        ×
      </button>
    </div>
  );
};