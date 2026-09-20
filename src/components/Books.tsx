import React from 'react';
import BooksCard from './shared/BooksCard';
import { IBook } from '@/types/books.type';

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/booksData.json');
  const data = await res.json();
  return data as IBook[];
};

const Books = async () => {

  const books = await getBooks();


  return (
    <section className="container mx-auto px-12 my-20">
      <h2 className="mb-12 text-2xl font-bold text-gray-900 text-center ">Books</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book: IBook) => <BooksCard key={book.bookId} book={book} />)}
      </div>
    </section>
  );
};

export default Books;