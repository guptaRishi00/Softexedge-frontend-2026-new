"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

export default function Questions({ data }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data) return null;

  return (
    <section className="w-full bg-black rounded-[20px] p-10 lg:p-20 text-white">
      <h2 className="text-4xl lg:text-6xl font-bold mb-16">{data.title}</h2>

      <div className="flex flex-col w-full px-10">
        {data.list.map((item: any, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.id}
              className="w-full border-b border-white/20 py-8 last:border-none"
            >
              <div
                className="flex items-center justify-between w-full cursor-pointer group"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <h3 className="text-2xl lg:text-4xl font-medium max-w-2xl group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4">
                  {item.cta && (
                    <Link
                      href={item.cta.href}
                      className={`text-md lg:px-7 lg:py-3 rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-white text-black"
                          : "border border-white/80 text-white hover:bg-white hover:text-black"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.cta.text}
                    </Link>
                  )}

                  <div
                    className={`border border-white/80 rounded-full p-2 lg:p-3 transition-transform duration-500 ${
                      isOpen ? "rotate-90 bg-zinc-800" : ""
                    }`}
                  >
                    <MdArrowOutward className="text-xl lg:text-3xl" />
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
                    className="overflow-hidden"
                  >
                    <p className="text-white/70 text-lg lg:text-xl mt-6 max-w-3xl leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
