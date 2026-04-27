"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function BrandingFaq({ data }: any) {
  const [openId, setOpenId] = useState<number | null>(
    data?.cards?.[0]?.id || null,
  );

  if (!data) return null;

  const { title, description, cards } = data;

  return (
    <section className="w-full bg-white py-12 lg:py-16 px-6 lg:px-16 mt-6 scale-[0.97] origin-top">
      <div className="w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* LEFT COLUMN: SCALED HEADER */}
        <div className="w-full lg:w-[40%] space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-black tracking-tighter leading-[1.1]">
            {title}
          </h2>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-sm">
            {description}
          </p>
        </div>

        {/* RIGHT COLUMN: SCALED ACCORDION LIST */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
          {cards?.map((card: any) => {
            const isOpen = openId === card.id;
            return (
              <div
                key={card.id}
                className={`w-full rounded-[24px] border transition-colors duration-300 scale-[0.97] ${
                  isOpen
                    ? "bg-[#F9F9F9] border-gray-100"
                    : "bg-[#F9F9F9]/40 border-gray-50 hover:bg-[#F9F9F9]"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : card.id)}
                  className="w-full flex justify-between items-start p-6 lg:p-8 text-left"
                >
                  <span className="text-xl lg:text-2xl font-bold text-black max-w-[85%] leading-tight">
                    {card.question}
                  </span>
                  <div className="text-xl text-black mt-1">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 lg:px-8 pb-8">
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                      {card.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
