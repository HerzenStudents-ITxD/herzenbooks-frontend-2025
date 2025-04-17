// api/fakeApi.ts
export type BookPreviewData = {
  id: string;
  title: string;
  author: string;
  price: number;
  cover: string;
  department: string;
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
    department: "логопедия",
    description: "Пособие предназначено для студентов, обучающихся по направлению 44.03.03 Специальное (дефектологическое) образование, направленность (профиль) 'Логопедия (Начальное образование детей с нарушениями речи)'. Представлены темы для изучения на практических занятиях, обозначено их основное содержание, приведен перечень заданий к каждой теме, списки литературы, средства оценки знаний по изученным темам.",
    publication_date: 2023,
    inStock: true
  },
  {
    id: "2",
    title: "TypeScript для профессионалов",
    author: "Петр Петров",
    price: 950,
    cover: "/vite.svg" ,
    department: "Программирование",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false
  },
  {
    id: "3",
    title: "TypeScript для профессионалов",
    author: "Петр Петров",
    price: 950,
    cover: "/vite.svg" ,
    department: "Программирование",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false
  }
];

export const getBookPreviews = (): Promise<BookPreviewData[]> => {
  return Promise.resolve(
    fakeBooks.map(({ id, title, author, price, cover, department }) => ({
      id, title, author, price, cover, department
    }))
  );
};

export const getBookDetails = (id: string): Promise<BookDetailsData | undefined> => {
  return Promise.resolve(fakeBooks.find(book => book.id === id));
};