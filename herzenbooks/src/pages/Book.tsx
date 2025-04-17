// pages/Book.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails, BookDetailsData } from '../api/fakeApi'; 
import { BookDetails } from '../components/Book/BookDetails';


export const Bookpage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookDetailsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getBookDetails(id)
        .then(data => {
          setBook(data || null);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className="text-center py-8">Загрузка...</div>;
  if (!book) return <div className="text-center py-8">Книга не найдена</div>;

  return (
    <div className="flex-col w-5/6 mx-auto  items-center">
      <div className="container mx-auto">
        <BookDetails book={book} />
      </div>
    </div>
  );
};