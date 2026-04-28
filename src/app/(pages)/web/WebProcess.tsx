"use client";

export default function WebProcess({ data }: any) {
    if (!data) return null;

    const { title, cards } = data;

    return (
        <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-10">
            <div className="w-full mx-auto flex flex-col gap-14 lg:gap-20 items-center">

                <h2 className="text-4xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-black text-center">
                    {title}
                </h2>

                {/* Process steps with connecting line */}
                <div className="w-full relative">
                    {/* Horizontal connecting line */}
                    <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
                        {cards?.map((card: any) => (
                            <div
                                key={card.id}
                                className="flex flex-col items-center gap-5 text-center"
                            >
                                {/* Numbered circle */}
                                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">
                                        {card.count}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-black">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}