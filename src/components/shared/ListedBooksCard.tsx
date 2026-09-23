import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiBookOpen, BiGroup } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';

const ListedBooksCard = ({book}:{book:IBook}) => {
  return (
    <div className="flex w-full gap-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* Book Image */}
      <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={110}
          height={120}
          className="h-full w-full rounded-lg object-contain p-2"
        />
      </div>

      {/* Book Information */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{book.bookName}</h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">By : {book.author}</p>

        {/* Tags + Year */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-semibold text-gray-600">Tag</span>

          {book.tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-600"
            >
              #{tag}
            </span>
          ))}

          <span className="flex items-center gap-1 text-gray-500">
            <FiMapPin size={14} />
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Publisher + Pages */}
        <div className="mt-3 flex flex-wrap items-center gap-5 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <BiGroup size={16} />
            Publisher: {book.publisher}
          </span>

          <span className="flex items-center gap-1">
            <BiBookOpen size={16} />
            Page {book.totalPages}
          </span>
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-gray-200" />

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Category */}
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
            Category: {book.category}
          </span>

          {/* Rating */}
          <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-500">
            Rating: {book.rating}
          </span>

          {/* Details */}
          <Link
            href={`/books/${book.bookId}`}
            className="rounded-full bg-green-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default ListedBooksCard;