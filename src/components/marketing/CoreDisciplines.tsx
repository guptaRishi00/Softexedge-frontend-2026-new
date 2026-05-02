"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function CoreDisciplines({ data }: any) {
    if (!data) return null;

    const { title, cards } = data;

    // Split title: first word normal, second word gradient
    const words = title?.split(" ") || [];
    const firstPart = words[0];
    const highlightWord = words.slice(1).join(" ");

    return (
        <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-10 overflow-hidden rounded-[20px] scale-[0.97] origin-top mt-5">
            <div className="w-full mx-auto flex flex-col gap-12 lg:gap-16">

                {/* SECTION HEADER */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl lg:text-[84px] font-bold uppercase text-black leading-none">
                        {firstPart}{" "}
                        <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                            {highlightWord}
                        </span>
                    </h2>
                    <div className="w-16 h-[3px] bg-[#2F85EA]/40 rounded-full" />
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">

                    {/* CARD 1: Large Featured Card — 8 cols */}
                    {cards?.[0] && (
                        <div className="md:col-span-8 flex">
                            <DisciplineCard card={cards[0]} featured />
                        </div>
                    )}

                    {/* CARD 2: Side card with "View Case Study" — 4 cols */}
                    {cards?.[1] && (
                        <div className="md:col-span-4 flex">
                            <DisciplineCard card={cards[1]} showCaseStudy />
                        </div>
                    )}

                    {/* CARDS 3–5: Equal-width cards — 4 cols each */}
                    {cards?.slice(2, 5).map((card: any) => (
                        <div key={card.id} className="md:col-span-4 flex">
                            <DisciplineCard card={card} />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}


function DisciplineCard({
    card,
    featured = false,
    showCaseStudy = false,
}: {
    card: any;
    featured?: boolean;
    showCaseStudy?: boolean;
}) {
    if (!card) return null;

    return (
        <div className="relative w-full bg-[#111111] rounded-[20px] p-8 lg:p-10 text-white flex flex-col gap-5 overflow-hidden transition-transform duration-500 hover:-translate-y-1 group">

            {/* Background image for featured card */}
            {featured && card.bg && (
                <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
                    <Image
                        src={getImageUrl(card.bg.url)}
                        alt=""
                        fill
                        className="object-cover object-center opacity-25"
                        unoptimized
                    />
                    {/* Fade from left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent" />
                </div>
            )}

            <div className="relative z-10 flex flex-col gap-5 flex-1">

                {/* Icon */}
                {card.icon && (
                    <div className="relative w-8 h-8 flex-shrink-0">
                        <Image
                            src={getImageUrl(card.icon.url)}
                            alt=""
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                )}

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                    {card.title}
                </h3>

                {/* Description */}
                <p className={`text-white/50 text-sm lg:text-[15px] leading-relaxed ${featured ? "max-w-sm" : "max-w-xs"}`}>
                    {card.description}
                </p>

                {/* "View Case Study" link */}
                {showCaseStudy && (
                    <Link
                        href={card.link?.href || "/case-studies"}
                        className="mt-auto inline-flex items-center gap-2 text-[#2F85EA] text-sm font-semibold decoration-[#2F85EA]/40 hover:decoration-[#2F85EA] transition-colors"
                    >
                        View Case Study
                        <MdArrowOutward className="text-base" />
                    </Link>
                )}
            </div>
        </div>
    );
}