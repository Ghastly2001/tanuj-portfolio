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
                At work, I’m Tanuj—the go-to designer who thrives in a friendly
                and collaborative environment. With a mix of creativity and
                camaraderie, I bring ideas to life while keeping the office vibe
                light and fun!
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
                I’ve always loved spending time in the kitchen or getting lost
                in a game of chess. There’s a calmness in both — one fills the
                home with warmth, the other keeps the mind sharp. Cooking,
                especially, has always been close to my heart. It’s been my
                comfort zone since childhood. I’m also super curious about
                Indian crafts there’s just something special about knowing where
                I come from. Whether it’s work or life, I like keeping things a
                little extra neat and organized. I notice the small things and
                enjoy figuring them out sometimes it makes things easier,
                sometimes a bit more complicated, but I’ve learned to enjoy
                both. And whenever I can, I love exploring new cities, soaking
                in the details and stories each place holds.
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
        <FadeUp className="w-full sm:w-[500px] h-[250px] sm:h-[350px] mt-4 sm:mt-auto rounded-xl overflow-hidden hidden lg:block">
          <Image src={"/about-hero.svg"} fill alt="about-hero" />
        </FadeUp>
      </div>
    </div>
  );
};

export default page;
