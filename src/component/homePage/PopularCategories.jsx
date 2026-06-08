"use client";

import "animate.css";

const categories = [
  {
    id: 1,
    name: "Story Books",
    icon: "📖",
    total: "120+ Books",
  },
  {
    id: 2,
    name: "Tech Books",
    icon: "💻",
    total: "85+ Books",
  },
  {
    id: 3,
    name: "Science Books",
    icon: "🔬",
    total: "95+ Books",
  },
];

const PopularCategories = () => {
  return (
    <section className="w-11/12 mx-auto my-20">
      <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInDown">
        Popular Categories
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="card bg-base-100 shadow-lg hover:-translate-y-2 transition-all duration-300 animate__animated animate__zoomIn"
          >
            <div className="card-body items-center text-center">
              <span className="text-6xl">{category.icon}</span>

              <h3 className="text-2xl font-bold">
                {category.name}
              </h3>

              <p>{category.total}</p>

              <button className="btn btn-primary mt-3">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;