import Image from "next/image";
import React from "react";
import FadeUp from "./animations/fade-up";

const SubHero = () => {
  return (
    <div className="bg-[#F7F7FA] h-[700px] w-full max-sm:px-4">
      <div className="flex flex-col items-center justify-center h-full gap-7">
        <Image src={"/bulb.svg"} width={40} height={40} alt="contact" />
        <h1 className="text-xl sm:text-3xl font-bold text-center">
          Let&apos;s build something together.
        </h1>
        <p className="max-w-[730px] text-center text-[#333333] max-sm:text-xs">
          Seasoned with 3.5 years of my institute exposure as a{" "}
          <span className="font-bold">fashion</span> and a
          <span className="font-bold"> UI-UX designer.</span> I&apos;ve worked
          with various brands encompassing in Fashion, Healthcare, Insurtech,
          Manufacturing, E-commerce and more. Be it{" "}
          <span className="font-bold">website, apps</span> or
          <span className="font-bold"> garment</span>, my learn-it-all attitude
          and creative mindset drives me to create prototypes that resonate with
          users and drive success.
        </p>
        <p className="text-center max-sm:text-xs">
          Recently, crafted my experiences at{" "}
          <span className="text-[#4BB543]">Team Pumpkin.</span>
        </p>
        <button className="border border-[#D5D5D5] py-2 px-5 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all">
          Check My Linkedin
        </button>
      </div>
    </div>
  );
};

export default SubHero;
