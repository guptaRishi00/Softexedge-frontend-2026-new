"use client";

import Image from "next/image";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { RxArrowBottomRight } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function WhySoftexedge({ data }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data) return null;

  return (
    <section className="w-full bg-black p-8 md:p-12 lg:p-10 overflow-hidden rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-between py-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
            {data.title}
          </h2>

          <div className="flex flex-col w-full">
            {data.cards?.map((card: any, index: number) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={card.id}
                  className="w-full border-b border-white/20 py-8 cursor-pointer group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-4xl font-medium text-white transition-all">
                      {card.title}
                    </h3>

                    <div
                      className={`rounded-full p-3 transition-all duration-300 ${
                        isOpen ? "bg-white" : "border border-white/40"
                      }`}
                    >
                      {isOpen ? (
                        <RxArrowBottomRight className="text-black text-2xl" />
                      ) : (
                        <MdArrowOutward className="text-white text-2xl" />
                      )}
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
                        <p className="text-white/60 text-lg mt-6 max-w-lg leading-relaxed">
                          {card.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-auto rounded-[20px] overflow-hidden">
          <Image
            src={data.image.url}
            alt={data.image.name || "Why SoftEXedge"}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
