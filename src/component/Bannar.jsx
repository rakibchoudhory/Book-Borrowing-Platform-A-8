import Image from "next/image";
import Link from "next/link";
import BannarImg from "@/assets/bannar.jpg";
import "animate.css";

const Banner = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={BannarImg}
        alt="Header Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeInDown">
          Find Your Next Read
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl animate__animated animate__fadeInUp animate__delay-1s">
          Explore thousands of books across Story, Tech, and Science categories.
          Borrow your favorite books and start reading today.
        </p>

        <Link href="/allBooks">
          <button className="mt-8 px-8 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-lg hover:bg-yellow-300 transition animate__animated animate__zoomIn animate__delay-2s">
            Browse Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;