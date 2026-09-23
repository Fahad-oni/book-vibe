'use client';
import { BookContext } from '@/context/BookProvider';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

const WishlistBtn = ({ book }: { book: IBook }) => {
  const { wishlistBooks, setWishlistBooks } = useContext(BookContext) as {
    wishlistBooks: IBook[];
    setWishlistBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  };

  const handleWishlistBook = (book: IBook) => {
    setWishlistBooks([...wishlistBooks, book]);
    alert(`You have added "${book.bookName}" to your wishlist!`);
  };
  return (
    <button
      onClick={() => handleWishlistBook(book)}
      className="rounded-lg bg-[#4DB3CC] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#399db7]"
    >
      Wishlist
    </button>
  );
};

export default WishlistBtn;
