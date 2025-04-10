import React from "react";

// Типы для пропсов
type BookDetailsProps = {
  previewData: {
    id: string;
    title: string;
    author: string;
    price: number;
    cover: string;
    department: string;
  };
  details: {
    description: string;
    publication_date: number;
    inStock: boolean;
  };
};

const BookDetails = ({ previewData, details }: BookDetailsProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Обложка книги с fallback */}
      <img 
        src={previewData.cover || "/vite.svg" } 
        alt={`Обложка: ${previewData.title}`}
        className="w-full h-48 object-cover mb-3 rounded"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/vite.svg" ;
        }}
      />
      
      {/* Основная информация */}
      <div className="space-y-1">
        <h3 className="font-bold text-lg">{previewData.title}</h3>
        <p className="text-gray-600">{previewData.author}</p>
        <p className="text-green-700 font-bold">{previewData.price} ₽</p>
        <p className="text-sm text-blue-600">{previewData.department}</p>
      </div>

      {/* Детали (если переданы) */}
      {details && (
        <div className="mt-3 pt-3 border-t space-y-2">
          <p className="text-sm line-clamp-3">{details.description}</p>
          <p className="text-sm">Год издания: {details.publication_date}</p>
          <p className={details.inStock ? "text-green-600" : "text-red-600"}>
            {details.inStock ? "✓ В наличии" : "✗ Нет в наличии"}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;