"use client";
import "animate.css";
import { useEffect, useState } from "react";
import BookCard from "@/component/homePage/BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const loadBooks = async () => {
      const res = await fetch(
        "https://online-book-borrowing-platfrom.vercel.app/data.json",
      );

      const data = await res.json();

      setBooks(data.books);
    };

    loadBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchTitle = book.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "All" || book.category === category;

    return matchTitle && matchCategory;
  });

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
        All Books
      </h2>

      {/* Search */}
      <div className="mb-8 animate__animated animate__fadeInUp">
        <input
          type="text"
          placeholder="Search books by title..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Sidebar + Books */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        {/* Sidebar */}
        <aside className="lg:col-span-1 animate__animated animate__fadeInLeft ">
          <div className="bg-base-100 shadow-lg border rounded-2xl p-5 sticky top-20 py-10">
            <h3 className="font-bold text-xl mb-10 border-b pb-2">Categories</h3>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setCategory("All")}
                className={`btn ${
                  category === "All" ? "btn-primary" : "btn-outline"
                }`}
              >
                All Books
              </button>

              <button
                onClick={() => setCategory("Story")}
                className={`btn justify-start ${
                  category === "Story" ? "btn-primary" : "btn-outline"
                }`}
              >
                📖 Story
              </button>
              <button
                onClick={() => setCategory("Tech")}
                className={`btn justify-start ${
                  category === "Tech" ? "btn-primary" : "btn-outline"
                }`}
              >
                💻 Tech
              </button>

              <button
                onClick={() => setCategory("Science")}
                className={`btn justify-start ${
                  category === "Science" ? "btn-primary" : "btn-outline"
                }`}
              >
                🔬 Science
              </button>
            </div>
          </div>
        </aside>

        {/* Books Grid */}
        <div className="lg:col-span-3 animate__animated animate__fadeInRight">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold">No books found 😢</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
