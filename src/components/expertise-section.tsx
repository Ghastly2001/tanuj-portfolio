import Image from "next/image";
import React from "react";

const ExpertiseSection = () => {
  return (
    <div className="bg-[#F7F7FA] h-[700px] w-full max-sm:px-4 flex flex-col items-center justify-center">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative w-full flex h-[300px] items-center">
          <div className="w-full mb-auto">
            <h1 className="font-bold text-4xl max-w-[600px]">
              Let&apos;s start new journey with me, I&apos;ve{" "}
              <span className="text-[#4BB543]">expertise</span> in these
              software&apos;s
            </h1>
            <p className="text-sm mt-[27px] text-[#333333] w-full tracking-wider leading-[36px]">
              From creating wireframes and prototypes to high-fidelity mockups
              and animations, I blend design tools and fashion insights to bring
              my creations to life.
            </p>
          </div>
          <div className="relative w-[500px] h-[400px] mb-24">
            <Image src={"/person-thinking.svg"} fill alt="expertise" />
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <Image
              src={"/figma.svg"}
              width={45}
              height={45}
              alt="figma"
              className="h-1/2"
            />
            <h1 className="font-bold text-xl">Figma</h1>
            <p className="text-black/80">
              3+ years of experience with Figma, I&apos;m now pretty much a pro
              (or close enough)!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={"/adobe-suite.svg"}
              width={60}
              height={60}
              alt="figma"
              className="h-1/2"
            />
            <h1 className="font-bold text-xl">Adobe Suite</h1>
            <p className="text-black/80">
              Using adobe suit for last 3+ years. Fav: Illustrator, Photoshop,
              InDesign, XD.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={"/procreate.svg"}
              width={80}
              height={80}
              alt="figma"
              className="h-1/2"
            />
            <h1 className="font-bold text-xl">Procreate</h1>
            <p className="text-black/80">
              I am an expert in using Procreate. Knowledge of CLO-3D as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
