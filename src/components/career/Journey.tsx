"use client";

import Image from "next/image";

export default function Journey() {
  // Static Data for the Journey Steps
  const journeySteps = [
    {
      title: "Discovery Call",
      description:
        "A deep dive into your vision, goals, and the challenges you're looking to solve.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
    },
    {
      title: "Strategic Design",
      description:
        "Mapping out the architecture and user experience with precision and purpose.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Development",
      description:
        "Turning designs into high-performance, scalable code built for the long term.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Global Launch",
      description:
        "Deploying your solution to the world and ensuring it stays at the cutting edge.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="p-3">
      {/* Parent Container: White background, scale-[0.97], rounded-20px */}
      <div className="w-full bg-white py-16 lg:py-10">
        <div className="w-full mx-auto flex flex-col gap-16">
          {/* Header: Now Left-aligned (items-start text-left) */}
          <div className="flex flex-col items-start text-left gap-6 max-w-6xl px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-black">
              The Journey <span className="text-[#2F85EA]">To Joining</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              We've refined our process to identify brilliance and foster
              growth. Step into a workflow designed for clarity and high-impact
              outcomes.
            </p>
          </div>

          {/* Static Grid: 4 Tall Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-10">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className="relative h-[550px] lg:h-[650px] rounded-[20px] overflow-hidden group border border-gray-100 shadow-lg"
              >
                {/* Background Image Overlay */}
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  unoptimized
                />

                {/* Visual Depth: Gradient Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                  {/* Step Number Badge: Now Left-aligned (self-start) */}
                  <div className="self-start">
                    <span className="text-5xl font-black text-white/10 font-mono tracking-tighter transition-colors group-hover:text-[#2F85EA]/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text Details: Naturally Left-aligned */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight">
                      {step.title}
                    </h3>
                    {/* Brand Accent Line */}
                    <div className="h-1 w-10 bg-[#2F85EA] rounded-full group-hover:w-full transition-all duration-500" />
                    <p className="text-white/70 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
