import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    // console.log(book , "single book");
  const {
    id,
    title,
    author,
    image_url,
    category,
    available_quantity,
  } = book;
// console.log(image_url);
  return (
   <div className="group relative overflow-hidden rounded-2xl bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 border border-base-300">
  
 
  <div className="relative h-80 overflow-hidden">
    <Image
      src={image_url}
      alt={title}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-700 "
      
    />

    
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

    {/* Category */}
    <div className="absolute top-4 left-4 ">
      <span className="badge badge-primary badge-lg">
        {category}
      </span>
    </div>

  
    <div className="absolute top-4 right-4">
      <span className="badge badge-success">
        {available_quantity} Copies
      </span>
    </div>

    <div className="absolute bottom-4 left-4 right-4 text-white">
      <h2 className="font-bold text-2xl line-clamp-2">
        {title}
      </h2>

      <p className="text-sm text-gray-200 mt-1">
        {author}
      </p>
    </div>
  </div>

  <div className="p-5">
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">
          Featured Collection
        </p>
      </div>

      <div className="rating rating-xs">
        <input
          type="radio"
          className="mask mask-star"
          defaultChecked
        />
        <input type="radio" className="mask mask-star" defaultChecked />
        <input type="radio" className="mask mask-star" defaultChecked />
        <input type="radio" className="mask mask-star" defaultChecked />
        <input type="radio" className="mask mask-star" defaultChecked />
      </div>
    </div>

    <Link
      href={`/bookDetails/${id}`}
      className="btn btn-primary w-full rounded-xl "
    >
      <button className="btn-primary font-bold cursor-pointer">📖 View Details</button>
    </Link>
  </div>
</div>
  );
};

export default BookCard;