"use client";

import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/utils/get-image-url";

export default function MarketingHero({ data }: any) {
    if (!data) return null;

    const { title, description, images, ctas } = data;

    const words = title?.split(" ") || [];
    const mainTitle = words.slice(0, -1).join(" ");
    const highlightWord = words[words.length - 1];

    const displayImages = images?.map((img: any) => img.image) || [];
    const [img1, img2, img3, img4] = displayImages;

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
                    MARKETING
                </span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Content */}
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


                <div
                    className="w-full max-w-xl ml-auto gap-3"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gridTemplateRows: '160px 160px 150px',
                    }}
                >
                    {/* img1 — B&W, top-left, spans rows 1–2, cols 1–3 */}
                    <div
                        className="relative rounded-[20px] overflow-hidden"
                        style={{ gridColumn: '1 / 4', gridRow: '1 / 3' }}
                    >
                        {img1 && (
                            <Image
                                src={getImageUrl(img1.url)}
                                alt=""
                                fill
                                className="object-cover grayscale"
                                unoptimized
                            />
                        )}
                    </div>

                    {/* img2 — desk/monitor, top-right, row 1, cols 4–5 */}
                    <div
                        className="relative rounded-[20px] overflow-hidden"
                        style={{ gridColumn: '4 / 6', gridRow: '1 / 2' }}
                    >
                        {img2 && (
                            <Image
                                src={getImageUrl(img2.url)}
                                alt=""
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        )}
                    </div>

                    {/* img3 — social media icons, mid-right, row 2, cols 4–5 */}
                    <div
                        className="relative rounded-[20px] overflow-hidden"
                        style={{ gridColumn: '4 / 6', gridRow: '2 / 3' }}
                    >
                        {img3 && (
                            <Image
                                src={getImageUrl(img3.url)}
                                alt=""
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        )}
                    </div>

                    {/* Stat card — bottom-left, row 3, cols 1–2 */}
                    <div
                        className="rounded-[20px] flex flex-col justify-center items-center bg-linear-to-br from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white shadow-xl"
                        style={{ gridColumn: '1 / 3', gridRow: '3 / 4' }}
                    >
                        <span className="text-4xl font-bold">10+</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] mt-1 opacity-90">
                            Client Countries
                        </span>
                    </div>

                    {/* img4 — overhead workspace, bottom-right, row 3, cols 3–5 */}
                    <div
                        className="relative rounded-[20px] overflow-hidden"
                        style={{ gridColumn: '3 / 6', gridRow: '3 / 4' }}
                    >
                        {img4 && (
                            <Image
                                src={getImageUrl(img4.url)}
                                alt=""
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