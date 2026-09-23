import ReadBtn from '@/components/ReadButton/ReadBtn';
import WishlistBtn from '@/components/WishlistButton/WishListBtn';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';
import { BiStar } from 'react-icons/bi';

interface BookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

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

const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
  const { id } = await params;
  const books = await getBooks();
  const book = books.find(b => b.bookId === Number(id)) as IBook;

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Details Card */}
      <div className="overflow-hidden rounded-xl  bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Book Image */}
          <div className="flex min-h-125 items-center justify-center bg-[#F3F3F3] p-8 md:border-r border-gray-200">
            <Image
              src={book.image}
              alt={book.bookName}
              width={300}
              height={400}
              className="max-h-100 w-auto object-contain"
            />
          </div>

          {/* Book Information */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h1 className="font-serif text-3xl font-bold text-gray-900">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-2 text-sm text-gray-500">
              By :{' '}
              <span className="font-medium text-gray-700">{book.author}</span>
            </p>

            {/* Divider */}
            <div className="my-4 border-t border-gray-200" />

            {/* Category */}
            <p className="text-sm text-gray-600">{book.category}</p>

            {/* Review */}
            <div className="mt-5">
              <p className="text-sm leading-6 text-gray-600">
                <span className="font-bold text-gray-800">Review:</span>{' '}
                {book.review}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-gray-800">Tag</span>

              {book.tags?.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-gray-200" />

            {/* Book Details */}
            <div className="space-y-3 text-sm">
              <div className="flex">
                <span className="w-36 text-gray-500">Number of Pages:</span>

                <span className="font-semibold text-gray-800">
                  {book.totalPages}
                </span>
              </div>

              <div className="flex">
                <span className="w-36 text-gray-500">Publisher:</span>

                <span className="font-semibold text-gray-800">
                  {book.publisher}
                </span>
              </div>

              <div className="flex">
                <span className="w-36 text-gray-500">Year of Publishing:</span>

                <span className="font-semibold text-gray-800">
                  {book.yearOfPublishing}
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-36 text-gray-500">Rating:</span>

                <div className="flex items-center gap-1">
                  <span className="font-semibold text-gray-800">
                    {book.rating.toFixed(1)}
                  </span>

                  <BiStar size={18} className="text-yellow-500" />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <ReadBtn book={book} />

              <WishlistBtn book={book} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
