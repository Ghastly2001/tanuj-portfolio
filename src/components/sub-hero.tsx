"use client";
import Image from "next/image";
import React from "react";
import FadeUp from "./animations/fade-up";

const SubHero = () => {
  return (
    <div className="bg-[#F7F7FA] h-full lg:h-[600px] w-fullmax-sm:px-4 py-20 flex items-center justify-center">
      <div className="flex flex-col items-start lg:items-center justify-between h-full gap-7  px-8  lg:px-0">
        <div className="flex flex-col items-start lg:items-center justify-center h-full gap-7">
          <FadeUp className="flex flex-row lg:flex-col items-center justify-center h-full gap-2 lg:gap-7 -ml-2 lg:ml-0">
            <Image
              src={"/bulb.svg"}
              className="w-10 h-10 md:w-16 md:h-16"
              alt="contact"
              width={56}
              height={56}
            />
            <h1 className="text-xl sm:text-3xl font-bold text-start lg:text-center">
              Exploring, Experimenting, Evolving
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-[730px] text-start lg:text-center text-[#333333]  lg:text-base lg:leading-[32px] max-sm:leading-[32px] max-sm:text-base">
              Seasoned with 3.5 years of my institute exposure as a{" "}
              <span className="font-bold">fashion</span> and a
              <span className="font-bold"> UI-UX designer.</span> I&apos;ve
              worked with various brands encompassing in Fashion, Healthcare,
              Insurtech, Manufacturing, E-commerce and more. Be it{" "}
              <span className="font-bold">website, apps</span> or
              <span className="font-bold"> garment</span>, my learn-it-all
              attitude and creative mindset drives me to create prototypes that
              resonate with users and drive success.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-start lg:text-center max-sm:text-base">
              Recently, crafted my experiences at{" "}
              <span
                className="text-[#4BB543] font-medium cursor-pointer"
                onClick={() => window.open("https://ondc.org/")}
              >
                ONDC.
              </span>
            </p>
          </FadeUp>
        </div>
        <FadeUp
          className="lg:flex flex-col items-center justify-center py-3"
          delay={0.2}
        >
          <button
            className=" ring-1 ring-[#000000]/20 py-3 px-6 rounded-lg font-bold hover:bg-[#0A0A0A] hover:text-white transition-all"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/tanuj-pandey-55258223a",
                "_blank"
              )
            }
          >
            Check My Linkedin
          </button>
        </FadeUp>
      </div>
    </div>
  );
};

export default SubHero;
