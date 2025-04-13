import Image from "next/image";
import React from "react";
import FadeUp from "./animations/fade-up";

const MoreAboutSection = () => {
  return (
    <div className="max-w-5xl h-full lg:h-[630px] mx-auto my-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-full px-8 sm:px-10 gap-16 ">
        <div className="w-full">
          <FadeUp>
            <p className="text-[#4BB543] text-xs font-medium ">MORE ABOUT ME</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-3xl font-bold mt-[15px]">
              <span className="text-[#4BB543]"> Digital designer </span> and a
              little <br /> bit of everything
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="leading-[28px] text-sm  text-[#333333] mt-[34px]">
              I&apos;m Tanuj Pandey, a designer working across Fashion and UX. I
              enjoy learning through doing and being part of work that pushes me
              to think differently and grow with every step.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="leading-[28px]  text-sm text-[#333333] mt-[28px]">
              Design, for me, is about solving real problems and creating
              experiences that are clear, useful, and honest — whether it&apos;s
              a garment or a digital product. I care about how things look,
              feel, and function, and I pay close attention to the small details
              that bring it all together.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="leading-[28px] text-sm  text-[#333333] mt-[28px]">
              I like working in fast-paced environments where I can stay
              curious, take initiative, and keep learning along the way.
            </p>
          </FadeUp>
        </div>
        <FadeUp
          delay={0.3}
          className="relative w-[204px] h-[142px] lg:w-1/2 lg:h-1/2 "
        >
          <Image src={"tea-window.svg"} fill alt="tea" />
        </FadeUp>
      </div>
    </div>
  );
};

export default MoreAboutSection;
