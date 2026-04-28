"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function WebSolutions({ data }: any) {
    if (!data) return null;

    const { title, cards } = data;

    const words = title?.split(" ") || [];
    const mainPart = words.slice(0, -1).join(" ");
    const highlightWord = words[words.length - 1];

    return (
        <section className="w-full bg-black rounded-[20px] py-14 lg:py-20 px-6 lg:px-10 text-white overflow-hidden scale-[0.97] origin-top">
            <div className="w-full mx-auto flex flex-col gap-10 lg:gap-14">

                <h2 className="text-4xl lg:text-[72px] font-extrabold uppercase leading-[1.05] tracking-tighter">
                    {mainPart}{" "}
                    <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                        {highlightWord}
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards?.map((card: any) => (
                        <div
                            key={card.id}
                            className="bg-[#141414] rounded-[20px] p-8 lg:p-10 flex flex-col gap-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                        >
                            {card.icon?.url && (
                                <div className="relative w-8 h-8">
                                    <Image
                                        src={getImageUrl(card.icon.url)}
                                        alt={card.title || ""}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                            )}

                            <h3 className="text-base lg:text-lg font-bold uppercase tracking-tight">
                                {card.title}
                            </h3>

                            <p className="text-white/40 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}