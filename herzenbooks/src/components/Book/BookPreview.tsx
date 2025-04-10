import React from "react";
import "/fonts/akrobat-bold.woff2"


type BookPreviewProps = {
    previewData: {
      id: string;
      title: string;
      author: string;
      price: number;
      cover: string;
      department: string;
    };
  };
  
  const BookPreview = ({ previewData }: BookPreviewProps) => {
    return (
      <div className=" flex flex-row w-90 h-40 gap-6">
        {/* Обложка книги с fallback */}
        <img 
          src={previewData.cover || "/vite.svg" } 
          alt={`Обложка: ${previewData.title}`}
          className="h-full w-auto object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/vite.svg" ;
          }}
        />
        
        {/* Основная информация */}
        <div className="flex flex-col"style={{ fontFamily: 'Akrobat' }}>
          <div>
          <h3 className="font-bold text-lg uppercase">{previewData.title}</h3>
          <p className="text-gray-600">{previewData.author}</p>
          <p className="text-gray-600 font-bold">{previewData.price} ₽</p>
          <p className="text-sm text-blue-600">{previewData.department}</p>
          </div>

        </div> 
        
      </div>
  );
};

export default BookPreview;