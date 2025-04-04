import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeUp from "./animations/fade-up";

const AvailableSection = () => {
  return (
    <div className="max-w-[1100px] h-full lg:h-[420px] mx-auto flex flex-col items-start lg:items-center justify-center gap-10 py-16 lg:py-0">
      <div className="flex items-center flex-col lg:flex-row justify-center px-8 lg:px-0 gap-10 lg:gap-0">
        <FadeUp className="relative w-[100px] h-[70px] ">
          <Image src={"/notepad.svg"} fill alt="notepad" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="font-bold text-2xl lg:text-3xl max-w-[450px]  text-center lg:pr-14">
            From Concept to Creation Let&apos;s Make it Happen!
          </h1>
        </FadeUp>
      </div>
      <div className="w-full flex flex-col items-center justify-center  px-8 lg:px-0">
        <FadeUp delay={0.2}>
          <p className="text-[#4BB543] text-lg font-semibold text-center">
            I&apos;m available for full-time roles & freelance projects.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-[#333333] mt-[13px] max-w-[310] text-center">
            Think carefully since this opportunity will not come again.
            It&apos;s a tiny world.
          </p>
        </FadeUp>
      </div>
      <div className="lg:flex gap-7 items-center px-8 hidden">
        <FadeUp delay={0.4}>
          <Link href="mailto:tanujpandey0303@gmail.com">
            <Image src={"/mail.svg"} width={36} height={33} alt="mail" />
          </Link>
        </FadeUp>
        <FadeUp delay={0.5}>
          <Link href="https://www.linkedin.com/in/tanuj-pandey-55258223a/">
            <Image
              src={"/linkedin.svg"}
              width={36}
              height={33}
              alt="linkedin"
            />
          </Link>
        </FadeUp>
        <FadeUp delay={0.6}>
          <Link href="https://www.behance.net/tanujpandey2">
            <Image src={"/behance.svg"} width={36} height={33} alt="behance" />
          </Link>
        </FadeUp>
      </div>
    </div>
  );
};

export default AvailableSection;
