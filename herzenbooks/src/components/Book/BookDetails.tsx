import { BookDetailsData } from '../../api/fakeApi';

interface BookDetailsProps {
  book: BookDetailsData; // Полные данные
}

export const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="md:flex">
        <div className="md:w-1/3 bg-gray-50 flex justify-center p-8">
          <img
            src={book.cover}
            alt={book.title}
            className="h-64 object-contain"
            onError={(e) => (e.currentTarget.src = '/placeholder-book.png')}
          />
        </div>

        <div className="">
          <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
          <p className=" mb-4">{book.author}</p>
          
          <div className="flex items-center gap-4 mb-6">
            
            <span className="font-bold">{book.price} ₽</span>
           
          </div>

          <p className= " mb-6">{book.description}</p>
          
          <div className="border-t pt-4">
            <p className="text-xl">
              <span className="font-medium">Год издания:</span> {book.publication_date}
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};