import React, { useEffect, useState } from 'react';
import { getBookPreviews } from '../api/fakeApi';
import { BookPreviewData } from '../api/fakeApi'; 

import {BookPreview} from '../components/Book/BookPreview';
import { useNavigate } from "react-router-dom";

import "/fonts/akrobat-bold.woff2"


const Catalogpage = () => {
  const [books, setBooks] = useState<BookPreviewData[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    getBookPreviews()
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleBookClick = (bookId: string) => {
    console.log(`Переход на книгу с ID: ${bookId}`); 
    navigate(`/book/${bookId}`); // fереход на страницу книги
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl  mb-6 font-bold" style={{ fontFamily: 'Akrobat' }}>каталог</h1>

      <div className="flex  ml-15 flex-wrap justify-center gap-10">
        
        {books.map(book => (
          <div 
            key={book.id}
            onClick={() => handleBookClick(book.id)} //  клик
            className="cursor-pointer" //  курсор при наведении
          >
            <BookPreview
              book={book}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Catalogpage;