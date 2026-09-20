import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';
import { BiStar } from 'react-icons/bi';


const BookCard = ({ book }: { book: IBook }) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <div className="w-full max-w-72.5 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="flex h-50 items-center justify-center rounded-xl bg-[#F3F3F3]">
        <Image
          src={image}
          alt={bookName}
          width={130}
          height={150}
          className="h-40   w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#F0FDF4] px-3 py-1 text-xs font-medium text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Title */}
      <h2 className="mt-3 line-clamp-1 font-serif text-[19px] font-bold text-gray-900">
        {bookName}
      </h2>

      {/* Author */}
      <p className="mt-2 text-xs text-gray-500">
        By : <span className="font-medium text-gray-700">{author}</span>
      </p>

      {/* Divider */}
      <div className="my-3 border-t border-dashed border-gray-200" />

      {/* Bottom Information */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-600">{category}</span>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-gray-700">
            {rating.toFixed(2)}
          </span>

          <BiStar size={17} strokeWidth={1.5} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
