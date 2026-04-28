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
    <section className="w-full overflow-hidden bg-white scale-[0.97] origin-top">
      <div className="w-full mx-auto">
        <div
          className="relative group cursor-pointer aspect-video rounded-[20px] lg:rounded-[20px] overflow-hidden bg-black"
          onClick={toggleVideo}
        >
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source src={getImageUrl(data.video.url)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
          >
            <div className="w-16 h-16 lg:w-24 lg:h-24 border-2 border-white/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
              {isPlaying ? (
                <FaPause className="text-xl lg:text-2xl" />
              ) : (
                <FaPlay className="text-xl lg:text-2xl ml-1" />
              )}
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}