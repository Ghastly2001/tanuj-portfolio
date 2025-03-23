"use client";
import React from "react";

const DownloadResume = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };
  return (
    <div
      className="fixed w-[52px] h-[165px] bg-[#4BB543] rounded-l-xl right-0 top-1/3"
      onClick={handleDownloadResume}
    >
      <p className="absolute -rotate-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  font-bold text-xl flex items-center justify-center cursor-pointer">
        Resume
      </p>
    </div>
  );
};

export default DownloadResume;
