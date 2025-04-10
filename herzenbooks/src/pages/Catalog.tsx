import React, { useEffect, useState } from 'react';
import { getBookPreviews } from '../api/fakeApi';
import BookPreview from '../components/Book/BookPreview';
import { useNavigate } from "react-router-dom";


import "/fonts/akrobat-bold.woff2"


const Catalogpage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    getBookPreviews()
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleBookClick = (bookId) => {
    console.log(`Переход на книгу с ID: ${bookId}`); // Добавьте это
    navigate(`/book/${bookId}`); // Переход на страницу книги
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl  mb-6 font-bold" style={{ fontFamily: 'Akrobat' }}>каталог</h1>

      <div className="flex  ml-15 flex-wrap justify-center gap-10">
        
        {books.map(book => (
          <div 
            key={book.id}
            onClick={() => handleBookClick(book.id)} // Обработчик клика
            className="cursor-pointer" // Меняем курсор при наведении
          >
            <BookPreview
              previewData={book}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Catalogpage;