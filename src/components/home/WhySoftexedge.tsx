"use client";

import Image from "next/image";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { RxArrowBottomRight } from "react-icons/rx";

export default function WhySoftexedge({ data }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-black rounded-[20px] relative overflow-hidden transition-all duration-500 ease-in-out">
      <div className="flex flex-col lg:flex-row items-stretch w-full justify-between lg:py-15 lg:px-15 gap-10">
        <div className="w-full flex flex-col justify-start">
          <p className="text-white text-4xl lg:text-6xl font-bold leading-tight">
            {data.title}
          </p>

          <div className="w-full flex flex-col items-start mt-8">
            {data.lists.map((list: any, index: number) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="w-full border-b border-white/20 py-6 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-white text-2xl lg:text-4xl font-medium">
                      {list.title}
                    </p>
                    {/* Updated Arrow Container */}
                    <div
                      className={`border border-white/80 rounded-full p-2 lg:p-3 transition-all duration-300 ${
                        isOpen ? "bg-white" : "bg-transparent"
                      }`}
                    >
                      {isOpen ? (
                        <RxArrowBottomRight className="text-black text-xl lg:text-3xl" />
                      ) : (
                        <MdArrowOutward className="text-white text-xl lg:text-3xl" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 text-lg mt-4 max-w-md leading-relaxed">
                          {list.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative w-full min-h-125 lg:min-h-full overflow-hidden rounded-[20px] grow">
          <Image
            src={data.image.url}
            alt="Process illustration"
            fill
            unoptimized
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
