"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function TechStack({ data }: any) {
    if (!data) return null;

    const { title, cards } = data;

    const words = title?.split(" ") || [];
    const firstWord = words[0];
    const rest = words.slice(1).join(" ");

    return (
        <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-10 rounded-[20px] scale-[0.97] origin-top mt-5">
            <div className="w-full mx-auto flex flex-col gap-14 lg:gap-20">

                <div className="flex flex-col gap-5">
                    <h2 className="text-5xl lg:text-[72px] leading-[1.1] tracking-tight">
                        <span className="font-normal text-[#04034C]">{firstWord} </span>
                        <span className="font-extrabold bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                            {rest}
                        </span>
                    </h2>
                    <div className="w-14 h-[3px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
                    {cards?.map((card: any) => (
                        <div
                            key={card.id}
                            className="flex flex-col items-center gap-3 group cursor-default"
                        >
                            {card.icon?.url && (
                                <div className="relative w-8 h-8 mb-1">
                                    <Image
                                        src={getImageUrl(card.icon.url)}
                                        alt={card.name || ""}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                            )}
                            <span className="text-sm font-normal text-[#04034C] text-center">
                                {card.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}