import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sara Ali Khan",
      role: "Cardiologist Patient",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Thanks for all the services, no doubt it's the best hospital.",
    },
    {
      id: 2,
      name: "Simon Targett",
      role: "Neurologist Patient",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
      text: "Thanks for all the services, no doubt it's the best hospital.",
    },
    {
      id: 3,
      name: "Sara Ali Khan",
      role: "Cardiologist Patient",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      text: "Thanks for all the services, no doubt it's the best hospital.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto text-center py-10 px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">Patients Testimonial</h2>
      <p className="text-gray-500 mt-2">
        Let's see what our happy patients say
      </p>

      {/* Carousel Container */}
      <div className="relative mt-8 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700"
          onClick={prevSlide}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Testimonial Cards */}
        <div className="flex space-x-4 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 transform ${
                index === currentIndex
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-50"
              } bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-72`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-purple-600"
              />
              <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              {/* Rating */}
              <div className="flex mt-2 text-yellow-400">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="mt-2 text-gray-600 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700"
          onClick={nextSlide}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;