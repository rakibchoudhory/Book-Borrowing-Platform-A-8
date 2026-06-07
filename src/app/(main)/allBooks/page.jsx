import BookCard from '@/component/homePage/BookCard';
import React from 'react';
const getBooksFetch = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platfrom.vercel.app/data.json",
  );
  const data = await res.json();
  return data.books;
};
const page = async() => {
    const books = await getBooksFetch();
  //   console.log(books, "books");
    return (
        <div className="w-11/12 mx-auto my-10">
      <h2 className="text-xl font-bold mb-4">Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      </div>
    </div>
    );
};

export default page;