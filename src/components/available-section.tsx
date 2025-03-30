import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeUp from "./animations/fade-up";

const AvailableSection = () => {
  return (
    <div className="max-w-[1100px] h-[420px] mx-auto flex flex-col items-start lg:items-center justify-center gap-10">
      <div className="flex items-center justify-center px-4 lg:px-0">
        <FadeUp className="relative w-[100px] h-[70px] hidden lg:block">
          <Image src={"/notepad.svg"} fill alt="notepad" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="font-bold text-2xl lg:text-3xl max-w-[450px] text-start lg:text-center pr-14">
            From Concept to Creation Let&apos;s Make it Happen!
          </h1>
        </FadeUp>
      </div>
      <div className="w-full flex flex-col items-start lg:items-center justify-center  px-4 lg:px-0">
        <FadeUp delay={0.2}>
          <p className="text-[#4BB543] text-lg font-semibold">
            I&apos;m available for full-time roles & freelance projects.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-[#333333] mt-[13px] max-w-[310] text-start lg:text-center">
            Think carefully since this opportunity will not come again.
            It&apos;s a tiny world.
          </p>
        </FadeUp>
      </div>
      <div className="flex gap-7 items-center px-4 ">
        <FadeUp delay={0.4}>
          <Link href="mailto:tanujpandey0303@gmail.com">
            <Image src={"/mail.svg"} width={36} height={33} alt="mail" />
          </Link>
        </FadeUp>
        <FadeUp delay={0.5}>
          <Link href="https://www.linkedin.com/in/tanuj-pandey-0303/">
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
