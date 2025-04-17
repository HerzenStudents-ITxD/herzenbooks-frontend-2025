import React, { useEffect, useState, useMemo } from 'react';
import { getBookPreviews } from '../api/fakeApi';
import { BookPreviewData } from '../api/fakeApi';
import { BookPreview } from '../components/Book/BookPreview';
import { useNavigate } from "react-router-dom";

const Catalogpage = () => {
  const [books, setBooks] = useState<BookPreviewData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDepartment, setActiveDepartment] = useState<string>('Все');
  const navigate = useNavigate();

  useEffect(() => {
    getBookPreviews()
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const departments = useMemo(() => 
    ['Все', ...new Set(books.map(book => book.department))],
    [books]
  );

  const filteredBooks = useMemo(() => {
    let result = books;
    
    if (activeDepartment !== 'Все') {
      result = result.filter(book => book.department === activeDepartment);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [books, activeDepartment, searchQuery]);

  const handleBookClick = (bookId: string) => {
    navigate(`/book/${bookId}`);
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className='flex w-5/6 flex-col mx-auto items-start'>
      <div className="container mx-auto text-4xl mb-6 font-bold mt-5">
        <h1 style={{ fontFamily: 'Akrobat' }}>каталог</h1>
      </div>


      {/* кнопки фильтрации */}
      <div className="flex flex-row gap-4 mb-8 lowercase">
        {departments.map(department => (
          <button
            key={department}
            onClick={() => setActiveDepartment(department)}
            className={`px-4 py-2 rounded-full ${
              activeDepartment === department
                ? 'bg-[rgb(248,80,39)] text-white'
                : 'bg-white hover:bg-[rgb(248,80,39)] hover:text-white'
            }`}
          >
            {department}
          </button>
        ))}
      </div>

       
      <div className='flex flex-row'>
      {/* список книг */}
      {/* поисковая строка */}

      <div className=" flex flex-col mb-8">
        <input
          type="text"
          placeholder="поиск по названию или автору..."
          className="w-full max-w-md px-4 py-2 border rounded  focus:outline-none focus:ring-2 focus:ring-[rgb(248,80,39)]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
         <input
          type="text"
          placeholder="поиск по году издания"
          className="w-full max-w-md px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[rgb(248,80,39)]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
      {filteredBooks.length === 0 ? (
        <div className="w-full text-center text-gray-500">
          Книги не найдены. Попробуйте изменить параметры поиска.
        </div>
      ) : (
        <div className="flex justify-center gap-8 w-full">
          {filteredBooks.map(book => (
            <div 
              key={book.id}
              onClick={() => handleBookClick(book.id)}
              className="cursor-pointer"
            >
              <BookPreview book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Catalogpage;