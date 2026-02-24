"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function OurServices({ data }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      );
    }
  }, [openIndex]);

  return (
    <div className="w-full lg:min-h-[96.5vh] min-h-150 bg-black rounded-[20px] relative overflow-hidden">
      <div className="lg:py-15 lg:px-15">
        <p className="text-white text-5xl font-bold">{data.title}</p>

        <div className="flex flex-col items-start w-full p-10 ">
          {data.cards.map((card: any, index: any) => {
            const isOpen = openIndex === index;

            return (
              <div
                className="w-full py-10 flex flex-col items-start gap-10"
                key={index}
              >
                <div
                  className="flex items-center justify-between w-full cursor-pointer group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center gap-10">
                    <p className="text-white text-3xl lg:text-5xl font-medium transition-transform duration-300 group-hover:translate-x-3">
                      {card.count}
                    </p>
                    <p className="text-white text-3xl lg:text-5xl font-medium transition-transform duration-300 group-hover:translate-x-3">
                      {card.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Link
                      href={card.read.href}
                      onClick={(e) => e.stopPropagation()} // Prevent accordion toggle on link click
                      className="border border-white/80 text-white hover:border-transparent text-md lg:px-7 lg:py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 "
                    >
                      {card.read.text}
                    </Link>

                    <div
                      className={`border border-white/80 rounded-full p-3 transition-all duration-500 ${
                        isOpen ? "rotate-90 bg-white" : "bg-transparent"
                      }`}
                    >
                      <MdArrowOutward
                        color={isOpen ? "black" : "white"}
                        className="text-2xl lg:text-3xl"
                      />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden w-full flex flex-col gap-10"
                    >
                      <div className="mt-5">
                        <p className="text-white text-xl lg:max-w-2xl">
                          {card.description}
                        </p>
                      </div>

                      <Link
                        href={card.view.href}
                        className="bg-transparent border border-white text-white text-md lg:px-7 lg:py-3 rounded-full transition-all duration-300 hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:border-transparent hover:text-white w-fit"
                      >
                        {card.view.text}
                      </Link>

                      {/* Framer Motion Carousel */}
                      <motion.div
                        ref={carouselRef}
                        className="flex gap-4 overflow-hidden pb-4 cursor-grab active:cursor-grabbing"
                      >
                        <motion.div
                          drag="x"
                          dragConstraints={{ right: 0, left: -width }}
                          className="flex gap-4"
                        >
                          {card.images.map((img: any) => (
                            <div
                              key={img.id}
                              className="min-w-75 h-50 relative rounded-2xl overflow-hidden shrink-0"
                            >
                              <Image
                                width={300}
                                height={200}
                                src={`${img.url}`}
                                alt={img.name}
                                className="w-full h-full object-cover pointer-events-none"
                                unoptimized
                              />
                            </div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="h-0.5 bg-[#FFFFFF] w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
