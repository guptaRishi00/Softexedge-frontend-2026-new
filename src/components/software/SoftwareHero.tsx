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
        <section className="relative w-full bg-white px-6 lg:px-10 py-16 lg:py-24 overflow-hidden">

            {/* Background watermark text */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                aria-hidden="true"
            >
                <span
                    className="text-[12vw] font-extrabold tracking-wider uppercase whitespace-nowrap"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(0, 0, 0, 0.04)',
                        letterSpacing: '0.05em',
                    }}
                >
                    DEVELOPMENT
                </span>
            </div>

            {/* Background decorative cog — positioned bottom-center, behind images */}
            <div
                className="absolute pointer-events-none z-[1]"
                style={{
                    bottom: '-5%',
                    left: '42%',
                    width: '500px',
                    height: '420px',
                }}
            >
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
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl max-w-md md:text-6xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-[#04034C]">
                        {mainTitle}
                        <br />
                        <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                            {highlightWord}
                        </span>
                    </h1>

                    <p className="text-gray-500 text-base lg:text-lg max-w-md leading-relaxed">
                        {description}
                    </p>

                    <div className="flex items-center gap-4 mt-2">
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

                {/* RIGHT SIDE: Staggered image grid with 3 images
                    Layout:
                    ┌──────────────┬──────────────┐
                    │              │   imageTwo    │  row 1
                    │  imageOne    │  (coding)     │
                    │  (tall,      ├──────────────┤
                    │   man at     │  imageThree  │  row 2
                    │   desk)      │  (</> icon)  │
                    └──────────────┴──────────────┘
                    imageOne is taller and starts slightly lower (staggered)
                */}
                <div
                    className="w-full max-w-xl ml-auto relative z-[2]"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '180px 180px',
                        gap: '12px',
                    }}
                >
                    {/* imageOne — tall left image spanning 2 rows, pushed down for stagger effect */}
                    <div
                        className="relative rounded-[20px] overflow-hidden"
                        style={{
                            gridColumn: '1 / 2',
                            gridRow: '1 / 3',
                            marginTop: '40px',
                            marginBottom: '-40px',
                        }}
                    >
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
                    <div
                        className="relative rounded-[20px] overflow-hidden"
                        style={{
                            gridColumn: '2 / 3',
                            gridRow: '1 / 2',
                        }}
                    >
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
                    <div
                        className="relative rounded-[20px] overflow-hidden"
                        style={{
                            gridColumn: '2 / 3',
                            gridRow: '2 / 3',
                        }}
                    >
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