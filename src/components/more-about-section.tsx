import Image from "next/image";
import React from "react";

const MoreAboutSection = () => {
  return (
    <div className="max-w-5xl h-[630px] mx-auto">
      <div className="flex items-center justify-between h-full px-4 sm:px-10 gap-4">
        <div className="w-full">
          <p className="text-[#4BB543] text-xs ">MORE ABOUT ME</p>
          <h1 className="text-3xl font-bold mt-[15px]">
            <span className="text-[#4BB543]"> Digital designer </span> and a
            little <br /> bit of everything
          </h1>
          <p className="leading-[28px] text-sm  text-[#333333] mt-[34px]">
            I&apos;m Tanuj Pandey, an agile and collaborative designer who
            isn&apos;t afraid to take risks. I thrive in dynamic environments
            that require me to step out of my comfort zone and challenge me to
            grow. As a self-taught Fashion and UX designer, I take ownership of
            my work and don&apos;t let roles define what is expected of me.
          </p>
          <p className="leading-[28px]  text-sm text-[#333333] mt-[28px]">
            When I&apos;m not immersed in work, you can find me exploring new
            cities with a camera in my hand. &apos;s about balance, and I&apos;m
            all about embracing every aspect of it.
          </p>
          <p className="leading-[28px] text-sm  text-[#333333] mt-[28px]">
            I believe in waking up each day eager to make a difference!
          </p>
        </div>
        <div className="relative w-1/2 h-1/2 hidden lg:block">
          <Image src={"tea-window.svg"} fill alt="tea" />
        </div>
      </div>
    </div>
  );
};

export default MoreAboutSection;
