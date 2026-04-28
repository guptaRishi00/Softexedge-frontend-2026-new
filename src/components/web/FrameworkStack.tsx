"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function FrameworkStack({ data }: any) {
    if (!data) return null;

    const { title, description, lists, cards } = data;

    return (
        <section className="w-full bg-black rounded-[20px] py-14 lg:py-20 px-6 lg:px-10 text-white overflow-hidden scale-[0.97] origin-top">
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* LEFT: 2×2 framework cards grid */}
                <div className="grid grid-cols-2 gap-4">
                    {cards?.map((card: any) => (
                        <div
                            key={card.id}
                            className="bg-[#141414] rounded-[20px] py-14 px-6 lg:py-16 lg:px-8 flex flex-col items-center justify-center gap-4 border border-white/5"
                        >
                            {card.icon?.url && (
                                <div className="relative w-10 h-10">
                                    <Image
                                        src={getImageUrl(card.icon.url)}
                                        alt={card.title || ""}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                            )}
                            <span className="text-sm font-medium text-white">
                                {card.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* RIGHT: Title, description, numbered list */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight">
                        {title}
                    </h2>

                    <p className="text-white/50 text-sm lg:text-[15px] leading-relaxed max-w-lg">
                        {description}
                    </p>

                    <div className="flex flex-col gap-5 mt-2">
                        {lists?.map((item: any, index: number) => (
                            <div key={item.id} className="flex items-center gap-4">
                                {item.icon?.url ? (
                                    <div className="relative w-8 h-8 flex-shrink-0">
                                        <Image
                                            src={getImageUrl(item.icon.url)}
                                            alt=""
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                ) : (
                                    <span className="w-8 h-8 flex-shrink-0 rounded-full bg-linear-to-r from-[#3445E7] to-[#07D6F3] flex items-center justify-center text-xs font-bold text-white">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                )}
                                <span className="text-white text-sm lg:text-base font-medium">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}