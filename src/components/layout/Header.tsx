import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Header({ headerData }: any) {
  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href={"/home"}>
        <Image
          width={200}
          height={200}
          src={headerData.logoWhite.url}
          alt={headerData.logoWhite.name}
          className="lg:w-30"
        />
      </Link>

      {/* Nav */}
      <div className="flex items-center justify-center gap-10">
        {/* Company Dropdown */}
        <div className="relative group">
          <div className="flex items-center cursor-pointer gap-2">
            <p className="text-white text-lg">Company</p>
            <IoIosArrowDown className="text-md text-white mt-1" />
          </div>

          <div className="absolute top-10 left-0 bg-white rounded-xl shadow-lg py-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
              Contact
            </Link>
            <Link href="/careers" className="block px-4 py-2 hover:bg-gray-100">
              Careers
            </Link>
            <Link href="/case" className="block px-4 py-2 hover:bg-gray-100">
              Case
            </Link>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="relative group">
          <div className="flex items-center cursor-pointer gap-2">
            <p className="text-white text-lg">Services</p>
            <IoIosArrowDown className="text-md text-white mt-1" />
          </div>

          <div className="absolute top-10 left-0 bg-white rounded-xl shadow-lg py-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <Link
              href="/app-development"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              App Development
            </Link>
            <Link
              href="/branding"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Branding
            </Link>
            <Link
              href="/marketing"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Marketing
            </Link>
            <Link
              href="/software"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Software
            </Link>
            <Link href="/uiux" className="block px-4 py-2 hover:bg-gray-100">
              UI/UX
            </Link>
            <Link href="/video" className="block px-4 py-2 hover:bg-gray-100">
              Video
            </Link>
            <Link href="/web" className="block px-4 py-2 hover:bg-gray-100">
              Web
            </Link>
          </div>
        </div>

        {/* Case Study */}
        <Link
          href={"/"}
          className="flex items-center cursor-pointer gap-2 text-white text-lg"
        >
          Case Study
        </Link>
      </div>

      {/* CTA */}
      <Link
        href={"/contact"}
        className="bg-white text-md lg:px-7 lg:py-3 font-medium rounded-full hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:text-white transition-colors duration-300"
      >
        Let's Talk
      </Link>
    </div>
  );
}
