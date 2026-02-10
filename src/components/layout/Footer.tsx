"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer({ data }: any) {
  if (!data) return null;

  const fullTitle = data.title || "Designing Brands People Trust";
  const mainTitle = fullTitle.replace("People Trust", "");

  return (
    <footer className="w-full pb-10 min-h-screen flex flex-col items-center justify-between gap-10">
      {/* Main Black Footer Box */}
      <div className="w-full min-h-[90vh] bg-black rounded-[20px] lg:p-20 p-10 text-white relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 h-full">
          {/* Left Column - REFACTORED SECTION */}
          <div className="flex flex-col justify-between h-full min-h-[500px]">
            {/* Top Group: Title and Socials */}
            <div className="space-y-12">
              <h2 className="text-5xl lg:text-[84px] font-bold leading-[0.9] tracking-tight">
                {mainTitle}
                <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent block">
                  People Trust
                </span>
              </h2>

              <div className="flex items-center gap-3">
                {data.socials?.map((social: any) => (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-all hover:scale-105"
                  >
                    <Image
                      src={social.icon.url}
                      alt={social.title}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Group: Description */}
            <p className="text-white text-xl lg:text-2xl max-w-sm leading-relaxed font-medium mt-12 lg:mt-0">
              {data.description}
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between h-full space-y-16 lg:space-y-0">
            {/* Top Right: Subscription Form */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-zinc-900/60 border border-white/10 rounded-full px-8 py-5 focus:outline-none focus:ring-1 focus:ring-[#2F85EA] transition-all placeholder:text-zinc-600 text-lg"
                />
              </div>
              <button className="w-full sm:w-auto bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg">
                Subscribe
              </button>
            </div>

            {/* Bottom Right: Link Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {/* Company Column */}
              <div className="space-y-8">
                <h4 className="text-white text-xl font-bold">Company</h4>
                <ul className="space-y-5 text-zinc-400 text-lg">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div className="space-y-8">
                <h4 className="text-white text-xl font-bold">Services</h4>
                <ul className="space-y-5 text-zinc-400 text-lg">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Branding & Identity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Video Production
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Development
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links Column */}
              <div className="space-y-8">
                <h4 className="text-white text-xl font-bold">Quick Links</h4>
                <ul className="space-y-5 text-zinc-400 text-lg">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Terms & Condition
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand & Copyright Bar */}
      <div className="flex w-full flex-col md:flex-row items-center justify-between lg:px-3 gap-6">
        {data.logo?.url && (
          <div className="relative h-12 w-48">
            <Image
              src={data.logo.url}
              alt="SoftExedge"
              fill
              className="object-contain object-left"
              unoptimized
            />
          </div>
        )}
        <p className="text-zinc-500 font-medium text-lg text-center md:text-right">
          {data.copyright ||
            `Copyright © ${new Date().getFullYear()} SoftEXedge Inc. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
