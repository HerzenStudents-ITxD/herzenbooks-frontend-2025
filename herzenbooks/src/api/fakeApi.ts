// api/fakeApi.ts
export type BookPreviewData = {
  id: string;
  title: string;
  author: string;
  price: number;
  cover: string;
  department: string;
  publication_date: number; 
};

export type BookDetailsData = BookPreviewData & {
  description: string;
  publication_date: number;
  inStock: boolean;
  
};

const fakeBooks: BookDetailsData[] = [
  {
    id: "1",
    title: "Коррекция нарушений связной речи у детей",
    author: "Арсеньева М. В. Ивлева М. Г.",
    price: 945,
    cover: "/coverbook1.jpg",
    department: "коррекционная педагогика",
    description: "Пособие предназначено для студентов, обучающихся по направлению 44.03.03 Специальное (дефектологическое) образование, направленность (профиль) 'Логопедия (Начальное образование детей с нарушениями речи)'. Представлены темы для изучения на практических занятиях, обозначено их основное содержание, приведен перечень заданий к каждой теме, списки литературы, средства оценки знаний по изученным темам.",
    publication_date: 2023,
    inStock: true
  },
  
  {
    id: "2",
    title: "Жизнь номер один",
    author: "Липовецкий О.",
    price: 950,
    cover: "/coverbook2.jpg" ,
    department: "спорт",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false
  },
   {
    id: "3",
    title: "Наречие в вепсском языке",
    author: "И. В. Бродский",
    price: 945,
    cover: "/coverbook3.jpg",
    department: "Институт севера",
    description: "Пособие предназначено для студентов, обучающихся по направлению 44.03.03 Специальное (дефектологическое) образование, направленность (профиль) 'Логопедия (Начальное образование детей с нарушениями речи)'. Представлены темы для изучения на практических занятиях, обозначено их основное содержание, приведен перечень заданий к каждой теме, списки литературы, средства оценки знаний по изученным темам.",
    publication_date: 2023,
    inStock: true
  },
  {
    id: "4",
    title: "Древний языкв генезисе философских понятий",
    author: "Петр Петров",
    price: 950,
    cover: "/coverbook4.jpg" ,
    department: "философия",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false
  },
  {
    id: "5",
    title: "Художественный текстиль роспись по ткани",
    author: "Петр Петров",
    price: 950,
    cover: "/coverbook5.jpg" ,
    department: "право | менеджмент",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false
  }
  ,
  {
    id: "6",
    title: "Традиции института народов Севера",
    author: "Петр Петров",
    price: 950,
    cover: "/coverbook6.jpg" ,
    department: "Институт севера",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false
  }
];

export const getBookPreviews = (): Promise<BookPreviewData[]> => {
  return Promise.resolve(
    fakeBooks.map(({ 
      id, 
      title, 
      author, 
      price, 
      cover, 
      department,
      publication_date // Добавляем это поле
    }) => ({
      id, 
      title, 
      author, 
      price, 
      cover, 
      department,
      publication_date // Включаем в возвращаемый объект
    }))
  );
};

export const getBookDetails = (id: string): Promise<BookDetailsData | undefined> => {
  return Promise.resolve(fakeBooks.find(book => book.id === id));
};