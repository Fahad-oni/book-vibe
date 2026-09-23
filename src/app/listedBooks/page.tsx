'use client';
import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { BookContext } from '@/context/BookProvider';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

const ListedBooks = () => {

  const {readBooks, wishlistBooks} = useContext(BookContext) as {
    readBooks: IBook[];
    wishlistBooks: IBook[];
  };
  return (
    <div className="mx-auto container px-12 py-10">
      <h2 className="mb-12 text-2xl font-bold text-gray-900 text-center ">
        Listed Books
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {readBooks.map(book => (
                <ListedBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No read books found.</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlistBooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishlistBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {wishlistBooks.map(book => (
                <ListedBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No wishlist books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;