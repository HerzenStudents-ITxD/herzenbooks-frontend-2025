import React, { useEffect, useState, useMemo } from 'react';
import { getBookPreviews } from '../api/fakeApi';
import { BookPreviewData } from '../api/fakeApi';
import { BookPreview } from '../components/Book/BookPreview';
import { useNavigate } from "react-router-dom";



const Catalogpage = () => {
  const [books, setBooks] = useState<BookPreviewData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(''); // временное значение для input
  const [yearInput, setYearInput] = useState(''); // временное значение для input года
  const [activeDepartment, setActiveDepartment] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState(''); // финальное значение для поиска
  const [yearQuery, setYearQuery] = useState(''); // финальное значение для года
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

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setYearQuery(yearInput);
  };

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

    if (yearQuery) {
      result = result.filter(book => 
        book.publication_date.toString().includes(yearQuery)
      );
    }
    
    return result;
  }, [books, activeDepartment, searchQuery, yearQuery]);

  const handleBookClick = (bookId: string) => {
    navigate(`/book/${bookId}`);
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className='flex w-5/6 flex-col mx-auto items-center'>
      <div className="container mx-auto text-4xl mb-6 font-bold mt-5">
        <h1 style={{ fontFamily: 'Akrobat' }}>каталог</h1>
      </div>
  
      {/* контейнер с кнопками департаментов */}
      <div className='container mx-auto flex items-start'>
        <div className="flex flex-row gap-4 lowercase">
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
      </div>
  
      <div className='container mx-auto items-start flex flex-row mt-15'>
        {/* контейнер с фильтром */}
        <div className="flex flex-none w-50 m-10 mt-0 ml-0 bg-white rounded">
          <div className="flex flex-col gap-6 m-6">
            <div className='flex flex-col gap-3'>
              <p>название/автор</p> 
              <input
                type="text"
                placeholder="название/автор"
                className="w-full max-w-md px-4 py-2 border rounded"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <p>год издания</p> 
              <input
                type="text"
                placeholder="год издания"
                className="w-full max-w-md px-4 py-2 border rounded"
                value={yearInput}
                onChange={(e) => setYearInput(e.target.value)}
              />
            </div>
            {/* Кнопка "Найти" */}
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-[rgb(248,80,39)] text-white rounded-full hover:bg-[rgb(230,70,30)]"
            >
              поиск
            </button>
          </div>
        </div>
  
        {/* контейнер с книгами */}
        <div>
          {filteredBooks.length === 0 ? (
            <div className="w-full text-center text-gray-500">
              Книги не найдены. Попробуйте изменить параметры поиска.
            </div>
          ) : (
            <div className="flex flex-wrap gap-12 justify-between w-full"> 
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