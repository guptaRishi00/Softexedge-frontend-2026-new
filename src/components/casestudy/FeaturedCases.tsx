"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function FeaturedCases({ data }: any) {
    const [activeFilter, setActiveFilter] = useState("All");

    if (!data) return null;

    const { title, cards } = data;

    const filters = ["All", "Fintech", "SaaS", "E-commerce", "Proptech", "Web3"];

    const filteredCards = cards?.filter(
        (card: any) =>
            activeFilter === "All" ||
            card.category?.toLowerCase() === activeFilter.toLowerCase()
    );

    return (
        <section className="w-full py-16 lg:py-24 px-6 lg:px-16 bg-white rounded-[20px] scale-[0.97] origin-top mt-5">
            <div className="w-full mx-auto flex flex-col gap-12 lg:gap-16">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl lg:text-[72px] font-black uppercase tracking-tight text-black">
                            {title}
                        </h2>
                        <div className="w-12 h-[2px] bg-[#2F85EA] mt-3" />
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`transition ${activeFilter === filter
                                    ? "text-black border-b-2 border-[#2F85EA] pb-1"
                                    : "text-gray-300 hover:text-black"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    {filteredCards?.map((card: any) => (
                        <div
                            key={card.id}
                            className="w-full bg-black rounded-[20px] p-6 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
                        >
                            <div className="w-full lg:w-[45%] relative aspect-[4/3] rounded-[20px] overflow-hidden">
                                <Image
                                    src={getImageUrl(card.image.url)}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            <div className="w-full lg:w-[55%] text-white flex flex-col gap-6">
                                <h3 className="text-3xl lg:text-5xl font-bold">
                                    {card.title}
                                </h3>

                                <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-xl">
                                    {card.description}
                                </p>

                                <div className="flex gap-10 mt-2">
                                    {card.funding && (
                                        <div>
                                            <p className="text-[#2F85EA] font-bold text-lg">
                                                {card.funding.money}
                                            </p>
                                            <p className="text-white/40 text-sm">
                                                {card.funding.text}
                                            </p>
                                        </div>
                                    )}

                                    {card.downloads && (
                                        <div>
                                            <p className="text-[#2F85EA] font-bold text-lg">
                                                {card.downloads.count}
                                            </p>
                                            <p className="text-white/40 text-sm">
                                                {card.downloads.text}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <button className="mt-4 w-fit px-6 py-3 rounded-full bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white font-semibold">
                                    View Case Study
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}