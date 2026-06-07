"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    text: "This platform completely changed how I read books online.",
  },
  {
    id: 2,
    name: "Sarah Khan",
    text: "The Tech collection is amazing. Found many useful books.",
  },
  {
    id: 3,
    name: "Hasan Mahmud",
    text: "Simple UI and smooth borrowing experience.",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    text: "Best digital library project I've used recently.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-base-200 py-20 mt-20">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Readers Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="card bg-base-100 shadow-xl h-64">
                <div className="card-body justify-center items-center text-center">
                  <div className="text-5xl mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <p className="italic">
                    "{review.text}"
                  </p>

                  <h3 className="font-bold text-lg mt-4">
                    {review.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;