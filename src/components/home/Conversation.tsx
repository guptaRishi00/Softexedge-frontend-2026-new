"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Conversation({ data }: any) {
  if (!data) return null;

  const { title, card } = data;

  return (
    <section className="w-full bg-black lg:py-15 lg:px-15 text-white rounded-[20px]">
      {/* Section Title */}
      <h2 className="text-center text-5xl lg:text-6xl font-bold mb-20">
        {title}
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-stretch mx-auto">
        {/* Left Side: Info Card */}
        <div className="relative rounded-[20px] overflow-hidden border border-white/10 min-h-[600px] flex flex-col">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={card.image.url}
              alt={card.title}
              fill
              className="object-cover opacity-50"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/90" />
          </div>

          {/* Card Content */}
          <div className="relative z-10 p-10 lg:p-14 flex flex-col h-full justify-between">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold">{card.title}</h3>
              <p className="text-white/70 text-lg max-w-sm leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Contact Details using your custom SVGs */}
            <div className="space-y-10">
              <ContactInfo
                icon={
                  <Image src="/phone.svg" alt="Phone" width={28} height={28} />
                }
                label="Call us on"
                value={card.call}
              />
              <ContactInfo
                icon={
                  <Image src="/message.svg" alt="Mail" width={28} height={28} />
                }
                label="Mail us on"
                value={card.mail}
              />
              <ContactInfo
                icon={
                  <Image
                    src="/location.svg"
                    alt="Address"
                    width={28}
                    height={28}
                  />
                }
                label="Office Address"
                value={card.address}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col justify-center">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label className="block text-lg">Full Name*</label>
              <input
                type="text"
                className="w-full bg-zinc-900/80 border border-white/5 rounded-full p-5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-lg">Work Email*</label>
              <input
                type="email"
                className="w-full bg-zinc-900/80 border border-white/5 rounded-full p-5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-lg">How can we help you?</label>
              <div className="relative">
                <select className="w-full bg-zinc-900/80 border border-white/5 rounded-full p-5 appearance-none focus:outline-none cursor-pointer">
                  <option value="">Select an option</option>
                  <option value="branding">Branding</option>
                  <option value="uiux">UI/UX Design</option>
                </select>
                <IoIosArrowDown className="absolute right-5 top-1/2 -translate-y-1/2 text-xl pointer-events-none" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-lg">
                How did you heard about us?
              </label>
              <div className="relative">
                <select className="w-full bg-zinc-900/80 border border-white/5 rounded-full p-5 appearance-none focus:outline-none cursor-pointer">
                  <option value="">Select an option</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                </select>
                <IoIosArrowDown className="absolute right-5 top-1/2 -translate-y-1/2 text-xl pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-full text-xl hover:text-white cursor-pointer bg-white text-black hover:bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] hover:scale-[1.02] transition-transform active:scale-95"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-6 group">
      {/* Icon Container */}
      <div className="bg-white p-3 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 min-w-[64px] min-h-[64px]">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold">{label}</span>
        <span className="text-white/60 text-lg">{value}</span>
      </div>
    </div>
  );
}
