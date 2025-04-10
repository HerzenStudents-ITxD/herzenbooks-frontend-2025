import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../../api/fakeApi';
import BookDetails from './BookDetails';

const BookCard = () => {
  const { id } = useParams();
  const [book, setBook] = useState<BookDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`Загружаем данные для книги ID: ${id}`)
    if (id) {
      getBookDetails(id)
        .then(data => {
          console.log('Получены данные:', data); // И это
          setBook(data || null);
          setLoading(false);
        })
        .catch(error => {
          console.error('Ошибка загрузки:', error);
          setLoading(false);
        });
    }
  }, [id]);
  if (loading) return <div>Загрузка...</div>;
  if (!book) return <div>Книга не найдена</div>;

  // Правильно передаем данные в BookDetails
  return (
    <div className="container mx-auto p-4">
      <BookDetails
        previewData={{
          id: book.id,
          title: book.title,
          author: book.author,
          price: book.price,
          cover: book.cover,
          department: book.department
        }}
        details={{
          description: book.description,
          publication_date: book.publication_date,
          inStock: book.inStock
        }}
      />
    </div>
  );
};

export default BookCard;