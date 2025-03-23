import Image from "next/image";
import React from "react";

const BringSection = () => {
  return (
    <div className="max-w-5xl mx-auto mb-[100px] px-4 sm:px-10 flex flex-col gap-5">
      <div className="flex flex-col items-start mt-[110px]">
        <h1 className="w-full text-3xl font-bold leading-[32px] text-center">
          What I can <span className="text-[#4BB543]">bring to the table</span>{" "}
          as an Employee
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[26px] mt-[40px]">
        <div className=" border border-[#EBEBEB] rounded-xl  flex flex-col gap-[30px] p-4">
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/clock.svg"} fill alt="clock" />
          </div>
          <p className="text-base text-[#333333] text-center">
            Conducting <span className="font-bold">research</span> to understand
            the needs, behaviors of users.
          </p>
        </div>
        <div className=" border border-[#EBEBEB] rounded-xl  flex flex-col gap-[30px] p-4">
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/flag.svg"} fill alt="clock" />
          </div>
          <p className="text-base text-[#333333] text-center">
            Rough <span className="font-bold"> sketches/ideations </span> or{" "}
            <span className="font-bold">low- fidelity</span> mockups of your
            initial ideas.
          </p>
        </div>
        <div className="border border-[#EBEBEB] rounded-xl flex flex-col gap-[30px] p-4">
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/notes.svg"} fill alt="clock" />
          </div>
          <p className="text-base text-[#333333] text-center">
            Creating detailed <span className="font-bold">documentation</span>{" "}
            and <span className="font-bold">specs</span> of designs.
          </p>
        </div>
        <div className="border border-[#EBEBEB] rounded-xl flex flex-col gap-[30px] p-4">
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/photos.svg"} fill alt="clock" />
          </div>
          <p className="text-base text-[#333333] text-center">
            <span className="font-bold">High-fidelity</span> and visual designs,
            include layout, guide & graphic.
          </p>
        </div>
        <div className=" border border-[#EBEBEB] rounded-xl  flex flex-col gap-[30px] p-4">
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/flower-pot.svg"} fill alt="clock" />
          </div>
          <p className="text-base text-[#333333] text-center">
            Testing designs with real users for{" "}
            <span className="font-bold">usability issues</span> or areas for
            improve
          </p>
        </div>
        <div className="border border-[#EBEBEB] rounded-xl  flex flex-col gap-[30px] p-4">
          <div className="relative flex items-center justify-center h-[150px] w-full -z-10">
            <Image src={"/plane.svg"} fill alt="clock" />
          </div>
          <p className="text-base text-[#333333] text-center">
            Creating a cohesive <span className="font-bold">design system</span>{" "}
            that includes design principles, comps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BringSection;
