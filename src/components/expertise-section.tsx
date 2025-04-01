import Image from "next/image";
import React from "react";
import FadeUp from "./animations/fade-up";

const ExpertiseSection = () => {
  return (
    <div className="bg-[#F7F7FA] h-full lg:h-[700px] w-full max-sm:px-4 max-sm:py-20  flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-10">
        <div className="relative w-full flex h-[300px] items-start lg:items-center">
          <div className="w-full mb-auto flex flex-col gap-5">
            <FadeUp>
              {" "}
              <h1 className="font-bold text-xl lg:text-3xl w-full hidden lg:block">
                Skilled in industry-leading software,
                <br /> I have <span className="text-[#4BB543]">
                  expertise
                </span>{" "}
                in these tools.
              </h1>
            </FadeUp>
            <FadeUp>
              <h1 className="font-bold text-xl lg:text-3xl w-full lg:hidden">
                Skilled in industry-leading software, I have{" "}
                <span className="text-[#4BB543]">expertise</span> in these
                tools.
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-sm text-[#333333] w-full tracking-wider leading-[28px] ">
                From creating wireframes and prototypes to high-fidelity mockups
                and animations, I blend design tools and fashion insights to
                bring my creations to life.
              </p>
            </FadeUp>
          </div>

          <FadeUp
            delay={0.1}
            className="relative w-[500px] h-[400px] mb-24  hidden lg:block"
          >
            <Image src={"/person-thinking.svg"} fill alt="expertise" />
          </FadeUp>
          <FadeUp className=" w-[250px] h-[200px] relative  lg:hidden -top-16 ">
            <Image src={"/person-thinking.svg"} fill alt="expertise" />
          </FadeUp>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between lg:gap-10 gap-8 mt-12 lg:mt-0">
          <FadeUp>
            <div className="flex flex-row lg:flex-col gap-4">
              <Image
                src={"/figma.svg"}
                width={36}
                height={36}
                alt="figma"
                className="h-1/2 hidden lg:block"
              />
              <Image
                src={"/figma-mobile.svg"}
                width={23}
                height={35}
                alt="figma"
                className="h-1/2 lg:hidden block"
              />
              <div className="flex flex-col gap-1 lg:gap-4">
                <h1 className="font-bold text-xl">Figma</h1>
                <p className="text-black/80 leading-[28px] text-sm ">
                  3+ years of experience with Figma, I&apos;m now pretty much a
                  pro (or close enough)!
                </p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-row lg:flex-col gap-4">
              <Image
                src={"/adobe-suite.svg"}
                width={64}
                height={64}
                alt="figma"
                className="h-1/2 hidden lg:block"
              />
              <Image
                src={"/adobe-mobile.svg"}
                width={23}
                height={35}
                alt="figma"
                className="h-1/2 lg:hidden block"
              />
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-xl">Adobe Suite</h1>
                <p className="text-black/80 leading-[28px] text-sm ">
                  Using adobe suit for last 3+ years. Fav: Illustrator,
                  Photoshop, InDesign, XD.
                </p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-row lg:flex-col gap-4">
              <Image
                src={"/miro.svg"}
                width={60}
                height={60}
                alt="figma"
                className="h-1/2 hidden lg:block"
              />
              <Image
                src={"/miro-mobile.svg"}
                width={23}
                height={35}
                alt="figma"
                className="h-1/2 lg:hidden block"
              />
              <div className="flex flex-col gap-1 lg:gap-4">
                <h1 className="font-bold text-xl">Miro</h1>
                <p className="text-black/80 leading-[28px] text-sm ">
                  I am an expert in using Miro. Knowledge of JIRA as well.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
