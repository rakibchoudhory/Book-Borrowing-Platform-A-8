import BookCard from "./BookCard";

const getBooksFetch = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platfrom.vercel.app/data.json",
  );
  const data = await res.json();
  return data.books.slice(0,4);
};

const FeaturedBooks = async () => {
  const books = await getBooksFetch();
  //   console.log(books, "books");
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-xl font-bold mb-4">Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
