"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudy({ data }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.cases || data.cases.length === 0) return null;

  const currentCase = data.cases[activeIndex];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="px-6 lg:px-10 mx-auto">
        {/* Main Title */}
        <h2 className="text-5xl lg:text-7xl font-bold text-black mb-16 tracking-tight">
          {data.title}
        </h2>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-gray-200 mb-20 relative">
          <div className="flex gap-8 lg:gap-14 overflow-x-auto no-scrollbar pb-5">
            {data.cases.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-lg lg:text-xl font-bold whitespace-nowrap transition-all relative ${
                  activeIndex === index ? "text-black" : "text-gray-400"
                }`}
              >
                Case Study {index + 1}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute bottom-[-21px] left-0 right-0 h-[3px] bg-black z-10"
                  />
                )}
              </button>
            ))}
          </div>

          <Link
            href="/cases"
            className="flex items-center gap-2 text-black font-bold text-lg pb-5 hover:opacity-60 transition-all group"
          >
            View All
            <span className="text-2xl group-hover:translate-x-1 transition-transform">
              ›
            </span>
          </Link>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Branding Row */}
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mb-16">
              <div className="w-44 h-44 lg:w-56 lg:h-56 bg-black rounded-[40px] flex items-center justify-center shrink-0 shadow-2xl">
                <Image
                  src={currentCase.logo.url}
                  alt={currentCase.name}
                  width={150}
                  height={150}
                  className="object-contain p-8"
                  unoptimized
                />
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-5xl lg:text-6xl font-bold text-black mb-2">
                    {currentCase.name}
                  </h3>
                  <p className="text-xl lg:text-2xl text-gray-400 font-medium">
                    {currentCase.about}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {currentCase.tags?.map((tag: any) => (
                    <span
                      key={tag.id}
                      className="px-8 py-3 bg-[#F4F4F4] rounded-full text-sm font-bold text-black"
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-6xl mb-16">
              <h4 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-6">
                {currentCase.product_title}
              </h4>
              <p className="text-lg lg:text-2xl text-gray-500 leading-relaxed">
                {currentCase.description}
              </p>
            </div>

            {/* Featured Image Container */}
            <div className="relative w-full h-[500px] lg:h-[750px]  overflow-hidden group">
              <Image
                src={currentCase.image.url}
                alt="Case Study Showcase"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />

              {/* THE BOTTOM GRADIENT (Purely Decorative) */}
              <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-white via-white/60 to-transparent pointer-events-none z-10" />

              {/* CENTERED BUTTON OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Link
                  href={`/cases/${currentCase.id}`}
                  className="px-10 mt-150 py-5 rounded-full bg-white text-black hover:bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] hover:text-white text-xl shadow-2xl hover:scale-110 active:scale-95 transition-all"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
