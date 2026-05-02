"use client";

import React, { useState, useMemo } from "react";
import { IoSearch } from "react-icons/io5";
import { FiFilter, FiChevronDown } from "react-icons/fi";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function FindCareer({ data }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sortedAllJobs = useMemo(() => {
    return [...(data.jobs || [])].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [data.jobs]);

  const [openJobId, setOpenJobId] = useState<string | null>(() => {
    const firstFeatured = sortedAllJobs.find((j: any) => j.featured);
    return firstFeatured ? firstFeatured.id : sortedAllJobs[0]?.id || null;
  });

  const departments = useMemo(() => {
    const depts = data.jobs?.map((j: any) => j.department) || [];
    return ["All", ...Array.from(new Set(depts))];
  }, [data.jobs]);

  const filteredJobs = useMemo(() => {
    let jobs = [...sortedAllJobs];

    if (searchTerm) {
      jobs = jobs.filter((j) =>
        j.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedDept !== "All") {
      jobs = jobs.filter((j) => j.department === selectedDept);
    }

    return jobs;
  }, [sortedAllJobs, searchTerm, selectedDept]);

  const toggleJob = (id: string) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  if (!data) return null;

  return (
    <section className="bg-white py-16 lg:py-20 px-6 lg:px-12 rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="w-full mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl lg:text-6xl font-bold text-black tracking-tight">
              {data.title}
            </h2>
            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto relative">
            <div className="relative flex-1 md:w-72">
              <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-[#F8FAFF] border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-lg"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-8 py-4 bg-[#EEF2F6] text-black font-bold rounded-full hover:bg-gray-200 transition-all"
              >
                <FiFilter /> {selectedDept === "All" ? "Filter" : selectedDept}
                <FiChevronDown className={isFilterOpen ? "rotate-180" : ""} />
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl z-50 overflow-hidden"
                  >
                    {departments.map((dept: any) => (
                      <button
                        key={dept}
                        onClick={() => {
                          setSelectedDept(dept);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-6 py-4 text-sm font-semibold hover:bg-blue-50 ${selectedDept === dept ? "text-blue-600 bg-blue-50/50" : "text-gray-700"}`}
                      >
                        {dept}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job: any) => (
            <JobCard
              key={job.id}
              job={job}
              isOpen={openJobId === job.id}
              onToggle={() => toggleJob(job.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({
  job,
  isOpen,
  onToggle,
}: {
  job: any;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`relative bg-white border rounded-[32px] overflow-hidden transition-all duration-300 
  ${isOpen ? "border-blue-200" : "border-gray-100"} 
  scale-[0.97] origin-top`}
    >
      {job.featured && (
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3445E7]" />
      )}

      <div
        className="p-8 lg:p-10 cursor-pointer flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
        onClick={onToggle}
      >
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            {job.featured && (
              <span className="px-3 py-1 bg-blue-50 text-[#3445E7] text-[10px] font-extrabold rounded uppercase tracking-widest">
                Featured
              </span>
            )}
            <h3 className="text-2xl lg:text-3xl font-bold text-black">
              {job.title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 font-semibold text-sm">
            <span className="flex items-center gap-2">
              <HiOutlineLocationMarker /> {job.location}
            </span>
            <span className="flex items-center gap-2">
              <HiOutlineClock /> {job.type}
            </span>
            <span className="flex items-center gap-2">
              <HiOutlineBriefcase /> {job.department}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`text-sm font-bold uppercase ${isOpen ? "text-blue-600" : "text-gray-400"}`}
          ></span>
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#F8FAFF] transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-50" : ""}`}
          >
            <FiChevronDown
              className={isOpen ? "text-blue-600" : "text-[#04034C]"}
            />
          </div>
        </div>
      </div>

      {/* Expandable Content Area */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 lg:px-10 pb-10 pt-6 border-t border-gray-50">
              {/* Changed from max-w-4xl space-y-8 to a flex container */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <p className="text-gray-500 text-lg lg:max-w-3xl leading-relaxed flex-1">
                  {job.description}
                </p>

                <div className="w-full lg:w-auto shrink-0">
                  <Link
                    href={job.cta?.href || "#"}
                    target="_blank"
                    className="inline-block w-fit px-6 py-3 rounded-full bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white font-medium hover:opacity-90 transition"
                  >
                    {job.cta?.text || "Apply Now"}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
