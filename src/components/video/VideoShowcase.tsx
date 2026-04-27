"use client";

import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { getImageUrl } from "@/utils/get-image-url";

export default function VideoShowcase({ data }: any) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!data || !data.video) return null;

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full py-12 lg:py-20 px-6 lg:px-10 overflow-hidden bg-white">
      <div className="w-full mx-auto">
        <div
          className="relative group cursor-pointer aspect-video rounded-[32px] lg:rounded-[48px] overflow-hidden bg-black shadow-2xl"
          onClick={toggleVideo}
        >
          {/* VIDEO ELEMENT */}
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          >
            <source src={getImageUrl(data.video.url)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* OVERLAY & PLAY BUTTON */}
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
          >
            <div className="w-20 h-20 lg:w-28 lg:h-28 border-2 border-white/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
              {isPlaying ? (
                <FaPause className="text-2xl lg:text-3xl" />
              ) : (
                <FaPlay className="text-2xl lg:text-3xl ml-1 lg:ml-2" />
              )}
            </div>
          </div>

          {/* BOTTOM GRADIENT SHADE */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
