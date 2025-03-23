import Image from "next/image";
import React from "react";

const QuoteSection = () => {
  return (
    <div className="bg-[#F7F7FA] h-[425px] w-full max-sm:px-4 flex items-center justify-center">
      <div className="w-[1100px] h-[232px] mx-auto flex justify-between">
        <Image
          src={"/quote-left.svg"}
          width={100}
          height={62}
          alt="quote"
          className="mb-auto"
        />
        <div className="w-[686px]">
          <p className="text-center leading-[32px] text-[16px] text-black/[0.78]">
            Tanuj is a talented and dedicated professional who consistently
            delivered excellent results at Team Pumpkin. He brings design
            thinking expertise, a thorough approach, and a passion for
            challenges. I highly recommend him to any organization seeking
            innovative talent. He&apos;ll be a valuable asset!
          </p>
          <h1 className="font-bold text-center mt-[16px]">Deepali Jain</h1>
          <p className="text-center text-black/[0.78]">(Product Manager)</p>
        </div>
        <Image
          src={"/quote-right.svg"}
          width={100}
          height={62}
          alt="quote"
          className="mt-auto"
        />
      </div>
    </div>
  );
};

export default QuoteSection;
