"use client";

import { useState, useEffect } from "react";

export default function Testimonial({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Safe checks for data consistency
  const cards = data?.cards || [];
  const totalCards = cards.length;
  const itemsToShow = 3;
  const totalPages = Math.ceil(totalCards / itemsToShow);

  useEffect(() => {
    // If there's only 1 page or no cards, don't start the timer
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]); // Array size is now constant (1 item)

  return (
    <section className="py-16 px-4 md:px-16 bg-white overflow-hidden">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          {data.title}
        </h2>

        <div className="flex gap-2">
          {/* Use totalPages to render dots */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === index
                  ? "w-12 bg-linear-to-r from-blue-600 to-cyan-400"
                  : "w-8 bg-black hover:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="flex transition-transform duration-700 ease-in-out -mx-3"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card: any) => (
            <div key={card.id} className="w-full md:w-1/3 px-3 shrink-0">
              <div className="bg-black text-white p-10 rounded-[20px] h-full flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{card.name}</h3>
                  <p className="text-gray-400 text-sm">{card.designation}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-white gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < card.starCount ? "text-white" : "text-gray-600"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    {card.starCount}.0
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
