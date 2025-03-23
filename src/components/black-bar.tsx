import Image from "next/image";
import React from "react";

const BlackBar = () => {
  return (
    <div className="w-full h-[50px] bg-black  px-4">
      <div className="max-w-[1200px] flex items-center justify-between mx-auto h-full">
        <div className=" flex items-center gap-4">
          <Image src={"/mail.svg"} width={30} height={30} alt="mail" />
          <Image src={"/linkedin.svg"} width={30} height={30} alt="mail" />
          <Image src={"/behance.svg"} width={30} height={30} alt="mail" />
        </div>
        <p className="text-white">
          Crafted with love 🤍 and lots of chai & coffee ☕
        </p>
      </div>
    </div>
  );
};

export default BlackBar;
