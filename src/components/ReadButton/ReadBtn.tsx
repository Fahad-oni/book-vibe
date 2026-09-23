'use client';
import { BookContext } from '@/context/BookProvider';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

const ReadBtn = ({ book }: { book: IBook }) => {
  
  const {readBooks, setReadBooks} =useContext(BookContext) as {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  };

  const handleReadBook = (book: IBook) => { 
    setReadBooks([...readBooks, book]);
    alert(`You have marked "${book.bookName}" as read!`);
  }
  return (
    <button
      onClick={() => handleReadBook(book)}
      className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
      Read
    </button>
  );
};

export default ReadBtn;