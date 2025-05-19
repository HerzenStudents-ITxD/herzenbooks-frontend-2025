// api/fakeApi.ts
export type BookPreviewData = {
  id: string;
  title: string;
  author: string;
  price: number;
  cover: string;
  department: string;
  publication_date: number; 
  inStock: boolean;
};

export type BookDetailsData = BookPreviewData & {
  description: string;
  pages: number;
  format: string;
  upc: string;
  publisher: string;
};

const fakeBooks: BookDetailsData[] = [
  {
    id: "1",
    title: "Коррекция нарушений связной речи у детей",
    author: "Арсеньева М. В. Ивлева М. Г.",
    price: 945,
    cover: `${import.meta.env.BASE_URL}coverbook1.jpg`,
    department: "коррекционная педагогика",
    description: "Пособие предназначено для студентов...",
    publication_date: 2023,
    inStock: true,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "Herzen книги",
  },
  {
    id: "2",
    title: "Жизнь номер один",
    author: "Липовецкий О.",
    price: 950,
    cover: `${import.meta.env.BASE_URL}coverbook2.jpg`,
    department: "спорт",
    description: "Взросление — самый непростой период...",
    publication_date: 2022,
    inStock: true,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "ИД Городец"
  },
  {
    id: "3",
    title: "Наречие в вепсском языке",
    author: "И. В. Бродский",
    price: 945,
    cover: `${import.meta.env.BASE_URL}coverbook3.jpg`,
    department: "Институт севера",
    description: "Пособие предназначено для студентов...",
    publication_date: 2023,
    inStock: true,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "Herzen книги"
  },
  {
    id: "4",
    title: "Древний языкв генезисе философских понятий",
    author: "Петр Петров",
    price: 950,
    cover: `${import.meta.env.BASE_URL}coverbook4.jpg`,
    department: "философия",
    description: "Материалы, представленные в пособии...",
    publication_date: 2022,
    inStock: true,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "Herzen книги"
  },
  {
    id: "5",
    title: "Художественный текстиль роспись по ткани",
    author: "Петр Петров",
    price: 950,
    cover: `${import.meta.env.BASE_URL}coverbook5.jpg`,
    department: "Художественное образование",
    description: "Настоящее издание представляет собой...",
    publication_date: 2022,
    inStock: true,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "Herzen книги"
  },
  {
    id: "6",
    title: "Традиции института народов Севера",
    author: "Петр Петров",
    price: 950,
    cover: `${import.meta.env.BASE_URL}coverbook6.jpg`,
    department: "Институт севера",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: true,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "Herzen книги"
  },
  {
    id: "7",
    title: "Традиции института народов Севера",
    author: "Петр Петров",
    price: 950,
    cover: `${import.meta.env.BASE_URL}coverbook6.jpg`,
    department: "Институт севера",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "Herzen книги"
  },
  {
    id: "8",
    title: "Традиции института народов Севера",
    author: "Петр Петров",
    price: 950,
    cover: `${import.meta.env.BASE_URL}coverbook6.jpg`,
    department: "Институт севера",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "Herzen книги"
  },
  {
    id: "9",
    title: "Традиции института народов Севера",
    author: "Петр Петров",
    price: 950,
    cover: `${import.meta.env.BASE_URL}coverbook6.jpg`,
    department: "Институт севера",
    description: "Продвинутые техники TypeScriptсемгншигзргнесексмищт...",
    publication_date: 2022,
    inStock: false,
    pages: 300,
    format: "172x290 мм",
    upc: "978-5-17-98649-4",
    publisher: "Herzen книги"
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
      publication_date,
      inStock 
    }) => ({
      id, 
      title, 
      author, 
      price, 
      cover, 
      department,
      publication_date,
      inStock
    }))
  );
};

export const getBookDetails = (id: string): Promise<BookDetailsData | undefined> => {
  return Promise.resolve(fakeBooks.find(book => book.id === id));
};