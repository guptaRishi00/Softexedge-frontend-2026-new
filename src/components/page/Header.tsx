import Image from "next/image";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";

export default function Header({ headerData }: any) {
  return (
    <div className="flex items-center justify-between p-5">
      <Link href={"/home"}>
        <Image
          width={200}
          height={200}
          src={headerData.logoBlue.url}
          alt={headerData.logoWhite.name}
          className="lg:w-30"
        />
      </Link>

      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center cursor-pointer gap-2">
          <p className="text-black text-lg">Company</p>
          <IoIosArrowDown className="text-md text-black mt-1" />
        </div>
        <div className="flex items-center cursor-pointer gap-2">
          <p className="text-black text-lg">Services</p>
          <IoIosArrowDown className="text-md text-black mt-1" />
        </div>
        <Link
          href={"/"}
          className="flex items-center cursor-pointer gap-2 text-black text-lg"
        >
          Case Study
        </Link>
      </div>

      <Link
        href={"/"}
        className="bg-linear-to-r text-md lg:px-7 lg:py-3 rounded-full hover:bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white transition-colors duration-300"
      >
        Let's Talk
      </Link>
    </div>
  );
}
