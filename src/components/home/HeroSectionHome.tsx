"use client";

import { useState } from "react";
import Header from "../layout/Header";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionHome({ headerData, data }: any) {
  const [dropdown, setDropdown] = useState(false);

  const bacgroundImage = {
    backgroundImage: `url(${data?.image?.url})`,
  };

  const text = data?.title || "";
  const words = text.split(" ");

  const part1 = words.slice(0, 4).join(" ");
  const part2 = words.slice(4, 6).join(" ");
  const part3 = words.slice(6, 7).join(" ");
  const part4 = words.slice(7, 10).join(" ");

  return (
    <div
      className="w-full lg:min-h-[96.5vh] h-150 bg-cover bg-center top-0 left-0 rounded-[20px] relative overflow-hidden"
      style={bacgroundImage}
    >
      <div
        className={`fixed inset-0 z-40 w-full h-screen backdrop-blur-lg transition-all duration-300 ease-in-out ${
          dropdown
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      ></div>

      <div className="absolute top-0 left-0 w-full z-50 px-5 py-6 lg:py-7 lg:px-10">
        <Header headerData={headerData} setDropdown={setDropdown} />
      </div>

      <div className="w-full h-full bg-gray-800/30 backdrop-blur-md flex flex-col justify-between px-5 py-6 lg:p-10">
        <div className="h-24 lg:h-10"></div>

        <div className="flex flex-col items-center justify-center gap-10 text-center lg:gap-5">
          <h1 className="text-2xl lg:text-6xl font-bold flex flex-col items-center text-white">
            <span>{part1}</span>
            <span className="flex items-center lg:gap-2">
              <span>{part2}</span>
              {data?.titleImage?.url && (
                <Image
                  src={data.titleImage.url}
                  width={36}
                  height={36}
                  alt="title image"
                  className="lg:w-20 lg:h-20"
                />
              )}
              <span>{part3}</span>
            </span>
            <span>{part4}</span>
          </h1>

          <div className="lg:flex lg:gap-6 flex-col lg:flex-row flex items-center gap-3 justify-center lg:mt-10">
            {data?.letsTalk && (
              <Link
                href={`/${data.letsTalk.href}`}
                className="bg-transparent border border-white text-white text-md lg:px-7 lg:py-3 hover:border-transparent rounded-full hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:text-white transition-all duration-300"
              >
                {data.letsTalk.text}
              </Link>
            )}
            {data?.viewServices && (
              <Link
                href={`/${data.viewServices.href}`}
                className="bg-transparent border border-white text-white text-md lg:px-7 lg:py-3 hover:border-transparent rounded-full hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:text-white transition-all duration-300"
              >
                {data.viewServices.text}
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center lg:justify-between w-full ">
          <p className="text-white text-center lg:text-start lg:text-base text-xs lg:max-w-md">
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
