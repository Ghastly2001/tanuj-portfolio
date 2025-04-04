"use client";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "./animations/fade-up";

const HeroSection = () => {
  return (
    <div className="h-screen lg:h-[calc(100vh-80px)] max-w-5xl mx-auto my-16 lg:mb-0">
      <div className="flex items-center  md:gap-12 h-[80%] px-8 sm:px-10 flex-col-reverse sm:flex-row justify-center">
        <div className="w-full lg:max-w-[500px] flex flex-col gap-5 lg:gap-3.5">
          <FadeUp>
            <p className="flex font-semibold tracking-tight max-sm:text-xs max-sm:items-center pb-3 lg:pb-0">
              <Image src={"/palm.svg"} width={25} height={25} alt="palm" />
              Hi! I&apos;m{" "}
              <span className="text-[#4BB543] tracking-tight mx-1">
                Tanuj Pandey
              </span>{" "}
              & your go-to
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="text-5xl font-bold tracking-tight max-w-[400px] max-sm:text-3xl leading-[60px]">
              Fashion &<div>UI-UX Designer</div>
            </div>
            <p className="text-sm font-medium">
              for startups to large organizations, let’s transform complex
              design problems into simple solutions.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-4 py-1.5">
              <Link
                href="/resume.pdf"
                download={true}
                className="border border-[#D5D5D5] lg:py-3.5 py-3 px-10 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all w-full lg:w-auto text-center"
                target="_blank"
              >
                Resume
              </Link>
              <Link
                className="border border-[#D5D5D5] lg:py-3.5 py-3 px-10 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all whitespace-nowrap w-full lg:w-auto text-center"
                href={"mailto:tanujpandey0303@gmail.com"}
                target="_blank"
              >
                E-Mail
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-[#333333] text-xs">
              As a student, I&apos;ve developed strong independent and
              team-working skills, and now I&apos;m ready to contribute my
              expertise to a company.
            </p>
          </FadeUp>
        </div>

        <FadeUp
          delay={0.1}
          className="relative w-[75%] h-[75%] lg:w-[60%] lg:h-[60%] pointer-events-none -mb-16 lg:mb-0"
        >
          <Image
            src={"/hero-section-image.svg"}
            fill
            alt="hero-section-image"
          />
        </FadeUp>
      </div>
      <div className="w-full h-[calc(100vh-80%-80px)] my-16 lg:my-0">
        <FadeUp delay={0.3}>
          <p className="text-sm text-[#4BB543] text-center font-medium">
            A FEW OF THE PLACES I WORKED
          </p>
        </FadeUp>
        <FadeUp
          className="relative flex items-center justify-center w-[80%] h-[70%] mx-auto -z-10"
          delay={0.35}
        >
          <Image
            src={"/company-logos.svg"}
            alt="company-logos"
            fill
            className="object-contain"
          />
        </FadeUp>
      </div>
    </div>
  );
};

export default HeroSection;
