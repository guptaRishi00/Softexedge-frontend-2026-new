"use client";

import Image from "next/image";

export default function WhyWork({data}:any) {
  const features = [
    {
      title: "Radical Autonomy",
      description:
        "We trust our talent. You own your projects, your schedule, and your outcomes.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      title: "Brilliance Recognized",
      description:
        "Impact over hierarchy. Great ideas win, regardless of who they come from.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    },
    {
      title: "Status Quo Challenged",
      description:
        "We don't settle for 'standard'. We build for the future of the industry.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
    },
    {
      title: "Career Evolution",
      description:
        "We invest in people, not just roles. Grow your skills alongside global leaders.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="p-3">
      {/* Parent component: Now using bg-white and black text[cite: 1] */}
      <div className="w-full bg-white overflow-hidden origin-top py-16 lg:py-10">
        {/* Center-aligned Header Section */}
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto mb-16 lg:mb-20 px-6">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-black tracking-tighter uppercase leading-tight">
            Why Work{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
            We don't just fill positions; we foster careers. Our environment is
            built on the philosophy of radical autonomy, where brilliance is
            recognised and the status quo is constantly challenged.
          </p>
        </div>

        {/* 2x2 Grid (Apple-Inspired White Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative h-[500px] md:h-[600px] bg-[#F5F5F7] overflow-hidden group flex flex-col items-center pt-12 text-center px-10 rounded-[12px]"
            >
              {/* Content at Top - High Contrast Black Text */}
              <div className="relative z-20 flex flex-col items-center gap-3 max-w-sm">
                <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-snug">
                  {feature.description}
                </p>
              </div>

              {/* Product/Environment Image - Integrated into light background */}
              <div className="absolute inset-0 z-0 flex items-end justify-center">
                <div className="relative w-full h-[60%] mt-auto translate-y-8 group-hover:translate-y-4 transition-transform duration-700">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 mask-image-gradient"
                    unoptimized
                  />
                  {/* Subtle Fade-to-White at the top of the image to blend with card bg */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#F5F5F7]" />
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-auto h-16 w-full flex items-center justify-center pb-8 relative z-20">
                <div className="px-6 py-2 rounded-full bg-[#2F85EA] text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
