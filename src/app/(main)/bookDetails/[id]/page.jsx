
import Image from "next/image";
import { redirect, notFound } from "next/navigation";
import { getBooks } from "../../../../data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BorrowButton from "@/component/BorrowButton";


const BookDetailsPage = async ({ params }) => {
  // User Login Check
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  
  if (!user) {
    redirect("/signIn");
  }

  const { id } = await params;
  const paramsId = Number(id);

 
  const books = await getBooks();

 
  const filterBook = books.find(
    (book) => book.id === paramsId
  );


  if (!filterBook) {
  return  <h2>Not Found Book</h2>
  }

 

 return (
  <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-16 animate-fadeIn">
  <div className="w-11/12 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="group animate-slideLeft">
        <div className="relative h-[500px] lg:h-[400px] overflow-hidden rounded-3xl shadow-2xl border border-white/10">
          <Image
            src={filterBook.image_url}
            alt={filterBook.title}
            fill
            priority
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 animate-slideRight">
        <div className="flex gap-3">
          <span className="badge badge-success text-white animate-pulse">
            Available
          </span>

          <span className="badge badge-info text-white">
            Library Book
          </span>
        </div>

        <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight animate-float">
          {filterBook.title}
        </h1>

        <p className="text-xl text-slate-300">
          By{" "}
          <span className="text-cyan-400 font-semibold">
            {filterBook.author}
          </span>
        </p>

        {/* Description */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500">
          <h2 className="text-lg font-bold text-white mb-3">
            Description
          </h2>

          <p className="text-slate-300 leading-relaxed">
            {filterBook.description}
          </p>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-white">
            Available Copies:
          </h3>

          <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-bold animate-pulse">
            {filterBook.available_quantity}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <BorrowButton />

          <button className="btn btn-outline btn-info hover:scale-105 transition-transform duration-300">
            Add Wishlist
          </button>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="my-24 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

    {/* Related Books */}
    <div>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        More Books You May Like
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books
          .filter((book) => book.id !== filterBook.id)
          .slice(0, 4)
          .map((book, index) => (
            <div
              key={book.id}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-3 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all duration-500 animate-fadeUp"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-white line-clamp-1 text-lg">
                  {book.title}
                </h3>

                <p className="text-slate-400 text-sm mt-2">
                  {book.author}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</section>
);
};

export default BookDetailsPage;