"use client";

import { useState, useEffect } from "react";

export default function Testimonial({ data }: any) {
  const cards = data?.cards || [];
  const itemsToShow = 3;

  // Clone cards for infinite effect
  const extendedCards = [
    ...cards.slice(-itemsToShow),
    ...cards,
    ...cards.slice(0, itemsToShow),
  ];

  const [currentIndex, setCurrentIndex] = useState(itemsToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalCards = cards.length;

  // Infinite jump logic
  useEffect(() => {
    if (currentIndex >= totalCards + itemsToShow) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(itemsToShow);
      }, 700);
    }
    if (currentIndex <= itemsToShow - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalCards + itemsToShow - 1);
      }, 700);
    }
  }, [currentIndex, totalCards]);

  useEffect(() => {
    if (!isTransitioning) {
      void document.documentElement.offsetHeight;
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000); // Increased to 4s for better readability
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-10 bg-white overflow-hidden">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          {data.title}
        </h2>

        {/* Dots */}
        <div className="flex gap-2">
          {cards.map((_: any, index: any) => {
            const normalizedIndex =
              (currentIndex - itemsToShow + totalCards) % totalCards;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index + itemsToShow)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  normalizedIndex === index
                    ? "w-12 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]"
                    : "w-8 bg-black hover:bg-gray-700"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* VIEWPORT: This container hides everything outside the 3 cards */}
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform ${
            isTransitioning ? "duration-700 ease-in-out" : "duration-0"
          }`}
          style={{
            // The math translates based on the width of 1/3rd of the container
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {extendedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              // w-1/3 ensures exactly 3 items fill 100% of the viewport width
              className="w-full md:w-1/3 px-3 shrink-0 box-border"
            >
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
