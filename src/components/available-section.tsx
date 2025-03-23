import Image from "next/image";
import React from "react";

const AvailableSection = () => {
  return (
    <div className="max-w-[1100px] h-[420px] mx-auto flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="relative w-[100px] h-[70px]">
          <Image src={"/notepad.svg"} fill alt="notepad" />
        </div>
        <h1 className="font-bold text-3xl max-w-[450px] text-center pr-14">
          From Concept to Creation Let&apos;s Make it Happen!
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-[52px]">
        <p className="text-[#4BB543] text-lg font-semibold">
          I&apos;m available for full-time roles & freelance projects.
        </p>
        <p className="text-[#333333] mt-[13px] max-w-[310] text-center">
          Think carefully since this opportunity will not come again. It&apos;s
          a tiny world.
        </p>
      </div>
    </div>
  );
};

export default AvailableSection;
