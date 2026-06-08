import BookCard from "./BookCard";
import "animate.css";

const getBooksFetch = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platfrom.vercel.app/data.json",
  );
  const data = await res.json();
  return data.books.slice(0, 4);
};

const FeaturedBooks = async () => {
  const books = await getBooksFetch();
  // console.log(books, "books");
  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold animate__animated animate__fadeInDown">
          Featured Books
        </h2>

        <p className="mt-3 text-gray-500 animate__animated animate__fadeInUp">
          Discover our most popular and recommended books.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate__animated animate__fadeIn">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
