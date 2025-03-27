import Image from "next/image";
import Link from "next/link";
import React from "react";

const AvailableSection = () => {
  return (
    <div className="max-w-[1100px] h-[420px] mx-auto flex flex-col items-start lg:items-center justify-center gap-10">
      <div className="flex items-center justify-center px-4 lg:px-0">
        <div className="relative w-[100px] h-[70px] hidden lg:block">
          <Image src={"/notepad.svg"} fill alt="notepad" />
        </div>
        <h1 className="font-bold text-2xl lg:text-3xl max-w-[450px] text-start lg:text-center pr-14">
          From Concept to Creation Let&apos;s Make it Happen!
        </h1>
      </div>
      <div className="w-full flex flex-col items-start lg:items-center justify-center  px-4 lg:px-0">
        <p className="text-[#4BB543] text-lg font-semibold">
          I&apos;m available for full-time roles & freelance projects.
        </p>
        <p className="text-[#333333] mt-[13px] max-w-[310] text-start lg:text-center">
          Think carefully since this opportunity will not come again. It&apos;s
          a tiny world.
        </p>
      </div>
      <div className="flex gap-7 items-center px-4 ">
        <Link href="mailto:tanujpandey0303@gmail.com">
          <Image src={"/mail.svg"} width={36} height={33} alt="mail" />
        </Link>
        <Link href="https://www.linkedin.com/in/tanuj-pandey-0303/">
          <Image src={"/linkedin.svg"} width={36} height={33} alt="linkedin" />
        </Link>
        <Link href="https://www.behance.net/tanujpandey2">
          <Image src={"/behance.svg"} width={36} height={33} alt="behance" />
        </Link>
      </div>
    </div>
  );
};

export default AvailableSection;
