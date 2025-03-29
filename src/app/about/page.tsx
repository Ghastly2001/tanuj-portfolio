import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-[82vh] max-w-5xl mx-auto flex flex-col items-start justify-center px-4 sm:px-10">
      <div className="flex items-start gap-6">
        <div className="relative w-[66px] h-[80px]">
          <Image src={"/about-man.svg"} fill alt="about" />
        </div>
        <h1 className="text-3xl font-bold text-[#333333]">
          HELLO, <br />
          NICE TO MEET YOU!
        </h1>
      </div>
      <div className="w-full flex gap-[109px]">
        <div className="max-w-[55%]">
          <div className="mt-10">
            <h1 className="text-base text-[#4BB543] font-medium">
              TANUJ IN OFFICE
            </h1>
            <p className="text-[#333333] leading-[28px] mt-[10px] text-sm">
              At work, I&apos;m Tanuj-the go-to designer who thrives in a
              friendly and collaborative environment. With a mix of creativity
              and camaraderie, I bring ideas to life while keeping the office
              vibe light and fun!
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-base text-[#4BB543] font-medium">
              TANUJ IN PERSON
            </h1>
            <p className="text-[#333333] leading-[28px] mt-[10px] text-sm">
              I&apos;ve spent the last three years learning design and gained a
              year of hands-on experience through an internship. My work has
              been appreciated on various design platforms, which feels amazing!
              When I&apos;m not designing, you&apos;ll find me exploring new
              cities with a camera, capturing moments and memories. <br />I
              believe in starting every day with excitement and the drive to
              make a difference!
            </p>
          </div>
        </div>
        <div className="relative w-[500px] h-[350px] mt-auto">
          <Image src={"/about-hero.svg"} fill alt="about-hero" />
        </div>
      </div>
    </div>
  );
};

export default page;
