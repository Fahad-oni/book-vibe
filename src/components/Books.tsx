import React from 'react';
import BooksCard from './shared/BooksCard';
import { IBook } from '@/types/books.type';

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data as IBook[];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto px-12 my-20">
      <h2 className="mb-12 text-2xl font-bold text-gray-900 text-center ">
        Explore Popular Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.slice(0, 5).map((book: IBook) => (
          <BooksCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
