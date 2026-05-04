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
    <section className="bg-white lg:py-15 lg:px-15 rounded-[20px]">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
              {data.title}
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto relative">
            <div className="relative flex-1 md:w-64">
              <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-5 py-3 bg-[#F8FAFF] border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-base"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-[#EEF2F6] text-black font-semibold rounded-full hover:bg-gray-200 transition-all text-sm"
              >
                <FiFilter /> {selectedDept === "All" ? "Filter" : selectedDept}
                <FiChevronDown className={isFilterOpen ? "rotate-180" : ""} />
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl z-50 overflow-hidden"
                  >
                    {departments.map((dept: any) => (
                      <button
                        key={dept}
                        onClick={() => {
                          setSelectedDept(dept);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-sm font-medium hover:bg-blue-50 ${
                          selectedDept === dept
                            ? "text-blue-600 bg-blue-50/50"
                            : "text-gray-700"
                        }`}
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

        {/* Jobs */}
        <div className="space-y-4">
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
      className={`relative bg-white border-2 rounded-[28px] overflow-hidden transition-all duration-300 ${
        isOpen ? "border-blue-200" : "border-gray-100"
      }`}
    >
      <div
        className="p-6 lg:p-8 cursor-pointer flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
        onClick={onToggle}
      >
        <div className="flex-1 space-y-2">
          <h3 className="text-xl lg:text-2xl font-bold text-black">
            {job.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-gray-500 font-medium text-sm">
            <span className="flex items-center gap-1.5">
              <HiOutlineLocationMarker /> {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <HiOutlineClock /> {job.type}
            </span>
            <span className="flex items-center gap-1.5">
              <HiOutlineBriefcase /> {job.department}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#F8FAFF] transition-transform duration-300 ${
              isOpen ? "rotate-180 bg-blue-50" : ""
            }`}
          >
            <FiChevronDown
              className={isOpen ? "text-blue-600" : "text-[#04034C]"}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 lg:px-8 pb-8 pt-4">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <p className="text-gray-500 text-base lg:max-w-2xl leading-relaxed flex-1">
                  {job.description}
                </p>

                <div className="w-full lg:w-auto shrink-0">
                  <Link
                    href={job.cta?.href || "#"}
                    target="_blank"
                    className="inline-block px-5 py-2.5 rounded-full bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white text-sm font-medium hover:opacity-90 transition"
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
