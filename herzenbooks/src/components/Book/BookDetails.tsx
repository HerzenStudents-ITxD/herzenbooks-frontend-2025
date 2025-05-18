import { useState, useEffect } from 'react';
import { BookDetailsData, BookPreviewData, getBookPreviews } from '../../api/fakeApi';
import { BookPreview } from './BookPreview';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';

interface BookDetailsProps {
  book: BookDetailsData;
}

export const BookDetails = ({ book }: BookDetailsProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [departmentBooks, setDepartmentBooks] = useState<BookPreviewData[]>([]);
  const MAX_PREVIEW_LENGTH = 300;

  const isInCart = cartItems.some(item => item.id === book.id);

  useEffect(() => {
    const loadDepartmentBooks = async () => {
      try {
        const books = await getBookPreviews();
        const sameDepartmentBooks = books
          .filter(b => b.department === book.department && b.id !== book.id)
          .slice(0, 3);
        setDepartmentBooks(sameDepartmentBooks);
      } catch (error) {
        console.error('Failed to load department books:', error);
      }
    };

    loadDepartmentBooks();
  }, [book.department, book.id]);

  const handleAddToCart = () => {
    if (!isInCart && book.inStock) {
      dispatch(addToCart({
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        cover: book.cover,
        department: book.department,
        publication_date: book.publication_date
      }));
    }
  };

  const previewDescription = book.description.length > MAX_PREVIEW_LENGTH
    ? `${book.description.substring(0, MAX_PREVIEW_LENGTH)}...`
    : book.description;

  const renderDescriptionTab = () => (
    <>
      <div className='text-lg pt-4' style={{ fontFamily: 'Futuris' }}>
        <p>{showFullDescription ? book.description : previewDescription}</p>
        
        {book.description.length > MAX_PREVIEW_LENGTH && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-black mt-3 text-lg flex items-center" 
            style={{ fontFamily: 'Akrobat' }}
          >
            {showFullDescription ? (
              <>
                свернуть
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                полное описание
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </>
  );

  const renderSpecsTab = () => (
    <div className="pt-4 flex flex-row gap-10" style={{ fontFamily: 'Futuris' }}>
      <div className="text-lg font-medium">
        <p>Год издания</p>
        <p>Издательство</p>
        <p>Количество страниц</p>
        <p>Формат</p>
        <p>UPC код</p>
      </div>
      <div className='text-lg font-medium'>
        <p>{book.publication_date}</p>
        <p>{book.publisher}</p>
        <p>{book.pages}</p>
        <p>{book.format}</p>
        <p>{book.upc}</p>
      </div>
    </div>
  );

  return (
    <div className="book-page">
      <div className="flex flex-col mt-30">
        <h1 className="text-5xl font-bold uppercase">{book.title}</h1>
        <p className="text-3xl mt-3">{book.author}</p>
      </div>

      <div className='flex flex-row flex-wrap mt-10 gap-8'>  
        <div className="flex w-70 md:w-90 m-0">
          <img
            src={book.cover}
            alt={book.title}
            className="object-contain"
            onError={(e) => (e.currentTarget.src = '/placeholder-book.png')}
          />
        </div>

        <div className='flex flex-col items-start w-110'>
          <div className='flex flex-row gap-15'>
            <button 
              className={`text-2xl mb-5 relative ${activeTab === 'description' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              описание
              {activeTab === 'description' && (
                <span className="absolute mt-10 left-0 w-full h-0.5 bg-black"></span>
              )}
            </button>

            <button          
              className={`text-2xl mb-5 relative ${activeTab === 'specs' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              характеристика
              {activeTab === 'specs' && (
                <span className="absolute mt-10 left-0 w-full h-0.5 bg-black"></span>
              )}
            </button>
          </div>

          {activeTab === 'description' ? renderDescriptionTab() : renderSpecsTab()}
        </div>

        <div className="flex flex-col w-80 m-10 pl-11 justify-center h-45 bg-white shadow-md rounded-xl items-start gap-2">
          <span className={`rounded-full text-2sm font-medium ${
            book.inStock 
              ? 'text-[rgb(248,80,39)]'
              : 'text-[rgb(43,64,143)]'}`}
          >
            {book.inStock ? '● есть в наличии' : '● нет в наличии'}
          </span>

          <span className="font-bold text-5xl">{book.price} Р</span>
          
          <button 
            onClick={handleAddToCart}
            disabled={!book.inStock || isInCart}
            className={`text-2xl ${isInCart ? 'text-black cursor-default' : ''} ${
              !book.inStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 rounded transition-colors'
            }`}
          >
            {isInCart ? 'книга в корзине' : 'добавить в корзину'}
          </button>
        </div>
      </div>

      {departmentBooks.length > 0 && (
        <div className="mt-20 w-full">
          <h3 className="text-4xl font-bold mb-5">книги по вашей специальности</h3>
          <div className="flex flex-row gap-6 mt-10 flex-wrap">
            {departmentBooks.map(book => (
              <BookPreview key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};