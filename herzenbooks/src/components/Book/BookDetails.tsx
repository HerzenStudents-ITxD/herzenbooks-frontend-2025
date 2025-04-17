import { BookDetailsData } from '../../api/fakeApi';

interface BookDetailsProps {
  book: BookDetailsData; // Полные данные
}

export const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    <div className="book-page">
        
        <div className="flex flex-col mt-30">
          <h1 className="text-5xl font-bold uppercase">{book.title}</h1>
          <p className="text-3xl mt-3">{book.author}</p>
          </div>

        <div className='flex flex-row mt-10 gap-10'>  
          <div className="flex w-1/3  ">
          <img
            src={book.cover}
            alt={book.title}
            className="object-contain"
            onError={(e) => (e.currentTarget.src = '/placeholder-book.png')}/>
          </div>
        <div className='flex flex-col w-1/3 '>
          <button className=' text-2xl'>описаниe</button>
          <div className='text-s' style={{ fontFamily: 'Futuris' }}>
            <p>{book.description}</p>
          </div>
        </div>
          <div className="flex flex-col w-1/3 h-50 bg-white rounded-xl items-center gap-4">
          
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
           book.inStock 
             ? 'text-[rgb(245,80,39)]'
             : 'text-[rgb(43,64,143)]'}`}>{book.inStock ? 'есть в наличии' : 'нет в наличии'}
             </span>

            <span className="font-bold text-5xl">{book.price} ₽ </span>
           
            <button>добавить в корзину</button>
          </div>

        </div>
          
          <div className="pt-4">
            <p className="text-xl font-medium">
              <span>Год издания:</span> {book.publication_date}
              <span>Издательство </span> 
            </p>
          </div>
        
    </div>
  );
};