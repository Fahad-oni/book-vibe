
import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/hero_img.jpg';

const Homepage = () => {
  return (
    <main>
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-12">
        <div className="overflow-hidden rounded-3xl bg-[#F3F3F3] px-6 py-10 sm:px-10 md:px-14 lg:px-16">
          
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">

            {/* Text Content */}
            <div className="w-full max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-600">
                Discover Your Next Read
              </p>

              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Books to freshen up your bookshelf
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                Explore our collection of inspiring books and discover your
                next favorite read.
              </p>

              <button className="btn mt-7 border-0 bg-green-600 px-7 text-white hover:bg-green-700">
                View The List
              </button>
            </div>

            {/* Image */}
            <div className="flex w-full justify-center md:justify-end">
              <Image
                src={BannerImg}
                alt="Books"
                width={450}
                height={450}
                priority
                className="w-full max-w-sm rounded-2xl object-cover shadow-lg sm:max-w-md"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;

