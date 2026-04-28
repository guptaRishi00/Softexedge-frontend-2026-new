"use client";

export default function OurDevelopment({ data }: any) {
    if (!data) return null;

    const { title, description, cards } = data;

    return (
        <section className="w-full bg-black rounded-[20px] py-14 lg:py-20 px-6 lg:px-10 text-white overflow-hidden scale-[0.97] origin-top">
            <div className="w-full mx-auto flex flex-col gap-10 lg:gap-14">

                <div className="space-y-3">
                    <h2 className="text-3xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight">
                        {title}
                    </h2>
                    <p className="text-white/50 text-sm lg:text-base">
                        {description}
                    </p>
                </div>

                {/* Process steps with connecting line */}
                <div className="w-full relative">
                    {/* Horizontal connecting line */}
                    <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-[2px] bg-white/20 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
                        {cards?.map((card: any) => (
                            <div
                                key={card.id}
                                className="flex flex-col items-center gap-4 text-center"
                            >
                                {/* Numbered circle */}
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <span className="text-black text-sm font-bold">
                                        {card.count}
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-white">
                                    {card.title}
                                </h3>

                                <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">
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