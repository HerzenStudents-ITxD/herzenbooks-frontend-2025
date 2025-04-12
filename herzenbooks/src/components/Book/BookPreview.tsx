import React from "react";
import "/fonts/akrobat-bold.woff2"

import { BookPreviewData } from '../../api/fakeApi'; 

interface BookPreviewProps {
  book: BookPreviewData; 
  onClick?: () => void; 
}

export const BookPreview = ({ book, onClick }: BookPreviewProps) => {
  return (
    <div className=" flex flex-row w-90 h-40 gap-6">
<img 
  src={book.cover || "/vite.svg" } 
  alt={`Обложка: ${book.title}`}
  className="h-full w-auto object-contain"
  onError={(e) => {
    (e.target as HTMLImageElement).src = "/vite.svg" ;
  }}
/>


<div className="flex flex-col"style={{ fontFamily: 'Akrobat' }}>
  <div>
  <h3 className="font-bold text-lg uppercase">{book.title}</h3>
  <p className="ext-sm">{book.author}</p>
  <p className="font-bold">{book.price} ₽</p>
  <p className="text-sm">{book.department}</p>
  </div>

</div> 

</div>
  );
};


