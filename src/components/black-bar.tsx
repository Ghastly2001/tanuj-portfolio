import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlackBar = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="w-full h-full lg:h-[80px] bg-black px-4 py-8">
      <div className="max-w-7xl flex-col lg:flex-row flex items-center justify-between mx-auto h-full gap-5">
        <div className="flex gap-7 items-center px-8 invert-0 lg:hidden">
          <Link href="mailto:tanujpandey0303@gmail.com" target="_blank">
            <Image src={"/mail-light.svg"} width={36} height={33} alt="mail" />
          </Link>
          <Link href="https://www.linkedin.com/in/tanuj-pandey-55258223a/" target="_blank">
            <Image
              src={"/linkedin-light.svg"}
              width={36}
              height={33}
              alt="linkedin"
            />
          </Link>
          <Link href="https://www.behance.net/tanujpandey2" target="_blank">
            <Image
              src={"/behance-light.svg"}
              width={36}
              height={33}
              alt="behance"
            />
          </Link>
        </div>
        <div className=" flex items-center gap-4 lg:flex-row flex-col font-medium mt-3">
          <p className="text-white text-sm lg:hidden">
            Crafted with love 🤍 and lots of chai & coffee ☕
          </p>
          <p className="mx-auto text-white text-sm">
            © {currentYear} Tanuj Designs.
          </p>
        </div>
        <p className="text-white text-sm hidden lg:block">
          Crafted with love 🤍 and lots of chai & coffee ☕
        </p>
      </div>
    </div>
  );
};

export default BlackBar;
