'use client';
import { IBook } from '@/types/books.type';
import React, { createContext, useState } from 'react';

export const BookContext = createContext({});

const BookProvider = ({ children }: { children: React.ReactNode }) => {

  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlistBooks, setWishlistBooks] = useState<IBook[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlistBooks,
    setWishlistBooks,
  }
  return <BookContext.Provider value = {sharedData}>{children}</BookContext.Provider>;
};

export default BookProvider;