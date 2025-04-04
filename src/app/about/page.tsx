import FadeUp from "@/components/animations/fade-up";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen lg:min-h-[80vh] max-w-5xl mx-auto flex flex-col justify-center px-4 sm:px-10">
      {/* Desktop Header */}
      <div className="items-start gap-6 hidden lg:flex">
        <FadeUp className="relative w-[66px] h-[80px]">
          <Image src={"/about-man.svg"} fill alt="about" />
        </FadeUp>
        <FadeUp>
          <h1 className="text-3xl font-bold text-[#333333]">
            HELLO, <br />
            NICE TO MEET YOU!
          </h1>
        </FadeUp>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col-reverse sm:flex-row gap-6 sm:gap-[109px] items-start lg:items-center">
        {/* Left Text Section */}
        <div className="w-full sm:max-w-[55%] font-gilroy space-y-8 sm:space-y-10">
          {/* Work Section */}
          <div>
            <FadeUp delay={0.1}>
              <h1 className="text-base text-[#4BB543] font-medium">
                TANUJ IN OFFICE
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#333333] leading-[28px] mt-[6px] text-sm">
                At work, I&apos;m Tanuj—the go-to designer who thrives in a
                friendly and collaborative environment. With a mix of creativity
                and camaraderie, I bring ideas to life while keeping the office
                vibe light and fun!
              </p>
            </FadeUp>
          </div>

          {/* Personal Section */}
          <div>
            <FadeUp delay={0.3}>
              <h1 className="text-base text-[#4BB543] font-medium">
                TANUJ IN PERSON
              </h1>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="text-[#333333] leading-[28px] mt-[6px] text-sm">
                I&apos;ve spent the last three years learning design and gained
                a year of hands-on experience through an internship. My work has
                been appreciated on various design platforms, which feels
                amazing! When I&apos;m not designing, you&apos;ll find me
                exploring new cities with a camera, capturing moments and
                memories. <br />I believe in starting every day with excitement
                and the drive to make a difference!
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex items-start gap-6 lg:hidden">
          <FadeUp className="relative w-[66px] h-[80px]">
            <Image src={"/about-man.svg"} fill alt="about" />
          </FadeUp>
          <FadeUp>
            <h1 className="text-3xl font-bold text-[#333333]">
              HELLO, <br />
              NICE TO MEET YOU!
            </h1>
          </FadeUp>
        </div>

        {/* Right Image Section */}
        <FadeUp className="w-full sm:w-[500px] h-[250px] sm:h-[350px] mt-4 sm:mt-auto rounded-xl overflow-hidden">
          <Image src={"/about-hero.svg"} fill alt="about-hero" />
        </FadeUp>
      </div>
    </div>
  );
};

export default page;
