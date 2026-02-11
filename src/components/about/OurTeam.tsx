"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurTeam({ data }: any) {
  const [activeTab, setActiveTab] = useState("all");

  if (!data || !data.members) return null;

  // Generate unique team tabs from data
  const tabs = useMemo(() => {
    const categories = data.members.map((m: any) => m.team);
    return ["all", ...Array.from(new Set(categories))];
  }, [data.members]);

  // Filter members by team
  const filteredMembers = useMemo(() => {
    if (activeTab === "all") return data.members;
    return data.members.filter((m: any) => m.team === activeTab);
  }, [activeTab, data.members]);

  return (
    <section className="w-full mt-24 bg-white">
      <div className="px-10 mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-12">
          {data.title}
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 border-b border-gray-200 mb-12">
          {tabs.map((tab: any) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-lg font-medium transition-all capitalize relative ${
                activeTab === tab ? "text-black" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member: any) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden mb-6">
                  <Image
                    src={member.image.url}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Subtle Text Overlay as seen in image */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-sm opacity-80">{member.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
