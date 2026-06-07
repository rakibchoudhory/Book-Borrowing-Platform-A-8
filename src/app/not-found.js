import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-950 px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-extrabold text-yellow-400">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          Looks like the page you're looking for has been borrowed from our
          library and hasn't been returned yet.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-lg hover:bg-yellow-300 transition">
              Back to Home
            </button>
          </Link>

         
        </div>

        <div className="mt-12 text-6xl">
          
        </div>
      </div>
    </div>
  );
}