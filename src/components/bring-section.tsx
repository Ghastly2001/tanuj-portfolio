import Image from "next/image";
import React from "react";
import FadeUp from "./animations/fade-up";

const BringSection = () => {
  return (
    <div className="max-w-5xl mx-auto mb-[100px] px-8 sm:px-10 flex flex-col gap-5">
      <FadeUp>
        <div className="flex flex-col items-start mt-[110px]">
          <h1 className="w-full text-2xl  lg:text-3xl font-bold leading-[32px] text-start lg:text-center">
            What I can{" "}
            <span className="text-[#4BB543]">bring to the table</span> as an
            Employee
          </h1>
        </div>
      </FadeUp>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[26px] mt-[40px]">
        <FadeUp className=" border border-[#EBEBEB] rounded-xl  flex flex-col gap-[30px] p-4">
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/clock.svg"} fill alt="clock" />
          </div>
          <p className="text-sm lg:text-base text-[#333333] text-center">
            Conducting <span className="font-bold">research</span> to understand
            the needs, behaviors of users.
          </p>
        </FadeUp>
        <FadeUp
          delay={0.1}
          className=" border border-[#EBEBEB] rounded-xl  flex flex-col gap-[30px] p-4"
        >
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/flag.svg"} fill alt="clock" />
          </div>
          <p className="text-sm lg:text-base text-[#333333] text-center">
            Rough <span className="font-bold"> sketches/ideations </span> or{" "}
            <span className="font-bold">low- fidelity</span> mockups of your
            initial ideas.
          </p>
        </FadeUp>
        <FadeUp
          delay={0.2}
          className="border border-[#EBEBEB] rounded-xl flex flex-col gap-[30px] p-4"
        >
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/notes.svg"} fill alt="clock" />
          </div>
          <p className="text-sm lg:text-base text-[#333333] text-center">
            Creating detailed <span className="font-bold">documentation</span>{" "}
            and <span className="font-bold">specs</span> of designs.
          </p>
        </FadeUp>
        <FadeUp
          delay={0.3}
          className="border border-[#EBEBEB] rounded-xl flex flex-col gap-[30px] p-4"
        >
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/photos.svg"} fill alt="clock" />
          </div>
          <p className="text-sm lg:text-base text-[#333333] text-center">
            <span className="font-bold">High-fidelity</span> and visual designs,
            include layout, guide & graphic.
          </p>
        </FadeUp>
        <FadeUp
          delay={0.4}
          className=" border border-[#EBEBEB] rounded-xl  flex flex-col gap-[30px] p-4"
        >
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/flower-pot.svg"} fill alt="clock" />
          </div>
          <p className="text-sm lg:text-base text-[#333333] text-center">
            Testing designs with real users for{" "}
            <span className="font-bold">usability issues</span> or areas for
            improve
          </p>
        </FadeUp>
        <FadeUp
          delay={0.5}
          className="border border-[#EBEBEB] rounded-xl  flex flex-col gap-[30px] p-4"
        >
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/plane.svg"} fill alt="clock" />
          </div>
          <p className="text-sm lg:text-base text-[#333333] text-center">
            Creating a cohesive <span className="font-bold">design system</span>{" "}
            that includes design principles, comps.
          </p>
        </FadeUp>
      </div>
    </div>
  );
};

export default BringSection;
