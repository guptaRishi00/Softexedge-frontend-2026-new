"use client";

import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/utils/get-image-url";

export default function SoftwareHero({ data }: any) {
    if (!data) return null;

    const { title, description, images, ctas } = data;

    // Split title to apply the brand gradient to the final word "Software"
    const words = title?.split(" ") || [];
    const mainTitle = words.slice(0, -1).join(" ");
    const highlightWord = words[words.length - 1];

    // Map images from Strapi data structure
    const displayImages = images?.map((img: any) => img.image) || [];
    const [imageOne, imageTwo, imageThree] = displayImages;

    return (
        <section className="relative w-full lg:min-h-screen bg-white px-6 lg:px-10 py-16 lg:py-24 overflow-hidden rounded-[20px] scale-[0.97] origin-top mt-5">

            {/* Background decorative cog — positioned bottom-center, behind images */}
            <div className="absolute pointer-events-none z-[1] bottom-[-5%] left-[50%] -translate-x-1/2 lg:translate-x-0 lg:left-[47%] w-[350px] h-[380px] sm:w-[450px] sm:h-[500px] lg:w-[500px] lg:h-[550px] opacity-40 lg:opacity-100">
                <Image
                    src="/cog.svg"
                    alt=""
                    fill
                    className="object-contain"
                    unoptimized
                />
            </div>

            <div className="relative z-10 w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start pt-8 lg:pt-0">
                    <h1 className="text-4xl max-w-md md:text-5xl lg:text-[70px] font-extrabold leading-[1.15] lg:leading-[1.05] tracking-tight text-[#04034C]">
                        {mainTitle}
                        <br className="hidden sm:block" />
                        <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent sm:ml-0 ml-2">
                            {highlightWord}
                        </span>
                    </h1>

                    <p className="text-gray-500 text-base lg:text-lg max-w-md leading-relaxed mx-auto lg:mx-0">
                        {description}
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
                        {ctas?.map((cta: any, i: number) => (
                            <Link
                                key={cta.id}
                                href={`/${cta.href}`}
                                className={`px-8 py-3 rounded-full font-semibold text-sm transition-all ${i === 0
                                    ? "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white shadow-md hover:shadow-lg hover:scale-[1.02]"
                                    : "border border-gray-300 text-black hover:bg-black hover:text-white"
                                    }`}
                            >
                                {cta.text}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT - IMAGES */}
                <div className="w-full max-w-xl mx-auto lg:ml-auto relative z-[2] grid grid-cols-2 grid-rows-[160px_160px] sm:grid-rows-[220px_220px] lg:grid-rows-[180px_180px] gap-3 pb-8 lg:pb-0">

                    {/* imageOne — tall left image spanning 2 rows, pushed down for stagger effect */}
                    <div className="relative rounded-[20px] overflow-hidden col-start-1 row-span-2 mb-[-20px] sm:mb-[-30px] lg:mb-[-40px]">
                        {imageOne && (
                            <Image
                                src={getImageUrl(imageOne.url)}
                                alt={imageOne.name || ""}
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        )}
                    </div>

                    {/* imageTwo — top-right image */}
                    <div className="relative rounded-[20px] overflow-hidden col-start-2 row-start-1 mt-[-15px] sm:mt-[-20px] lg:mt-[-30px] lg:h-[330px]">
                        {imageTwo && (
                            <Image
                                src={getImageUrl(imageTwo.url)}
                                alt={imageTwo.name || ""}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        )}
                    </div>

                    {/* imageThree — bottom-right image */}
                    <div className="relative rounded-[20px] overflow-hidden col-start-2 row-start-2 translate-y-8 sm:translate-y-12 lg:translate-y-20 mt-[20px] sm:mt-[30px] lg:mt-[40px]">
                        {imageThree && (
                            <Image
                                src={getImageUrl(imageThree.url)}
                                alt={imageThree.name || ""}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}