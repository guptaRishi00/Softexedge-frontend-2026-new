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
    <section className="w-full py-15 bg-white overflow-hidden rounded-[20px]">
      {" "}
      {/* Reduced py-20 to py-12 */}
      <div className="px-6 lg:px-10 mx-auto">
        {/* Main Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-10 tracking-tight">
          {data.title}
        </h2>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-gray-200 mb-10 relative px-10">
          {" "}
          {/* Reduced mb-20 to mb-10 */}
          <div className="flex gap-6 lg:gap-10 overflow-x-auto no-scrollbar pb-3">
            {" "}
            {/* Reduced gap and padding */}
            {data.cases.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-base lg:text-lg font-bold cursor-pointer whitespace-nowrap transition-all relative ${
                  activeIndex === index ? "text-black" : "text-gray-400"
                }`}
              >
                Case Study {index + 1}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-black z-10"
                  />
                )}
              </button>
            ))}
          </div>
          <Link
            href="/cases"
            className="flex items-center gap-2 text-black font-bold text-sm pb-3 hover:opacity-60 transition-all group"
          >
            View All
            <span className="text-xl group-hover:translate-x-1 transition-transform">
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
            className="px-10"
          >
            {/* Branding Row */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-10">
              {" "}
              {/* Reduced gap and margin */}
              <div className="w-28 h-28 lg:w-36 lg:h-36 bg-black rounded-3xl flex items-center justify-center shrink-0 shadow-xl">
                {" "}
                {/* Shrunk logo box */}
                <Image
                  src={currentCase.logo.url}
                  alt={currentCase.name}
                  width={80}
                  height={80}
                  className="object-contain p-4"
                  unoptimized
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-1">
                    {" "}
                    {/* Shrunk title */}
                    {currentCase.name}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-400 font-medium">
                    {currentCase.about}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentCase.tags?.map((tag: any) => (
                    <span
                      key={tag.id}
                      className="px-4 py-1.5 bg-[#F4F4F4] rounded-full text-xs font-bold text-black"
                    >
                      {" "}
                      {/* Reduced tag size */}
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="w-full mb-10">
              {" "}
              {/* Reduced max-width and margin */}
              <h4 className="text-xl lg:text-2xl font-bold text-[#2D2D2D] mb-4">
                {currentCase.product_title}
              </h4>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed">
                {currentCase.description}
              </p>
            </div>

            {/* Featured Image Container */}
            <div className="relative w-full h-87.5 lg:h-75 overflow-hidden group">
              {" "}
              {/* Shrunk image height */}
              <Image
                src={currentCase.image.url}
                alt="Case Study Showcase"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />
              {/* BOTTOM GRADIENT */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />
              {/* CENTERED BUTTON OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Link
                  href={`/cases/${currentCase.id}`}
                  className="px-7 py-3 rounded-full mt-55 font-medium bg-white text-black hover:bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] hover:text-white text-base"
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
