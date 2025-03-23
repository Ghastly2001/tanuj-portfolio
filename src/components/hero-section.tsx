"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeUp from "./animations/fade-up";

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-80px)] max-w-[1200px] mx-auto">
      <div className="flex items-center md:gap-12 h-[80%] px-4 sm:px-10 flex-col sm:flex-row justify-center">
        <div className="max-w-[500px] flex flex-col gap-5">
          <p className="flex font-semibold tracking-wide max-sm:text-xs max-sm:items-center">
            <Image src={"/palm.svg"} width={25} height={25} alt="palm" />
            Hi! I&apos;m{" "}
            <span className="text-[#4BB543] tracking-wide mx-1">
              Tanuj Pandey
            </span>{" "}
            & your go-to
          </p>
          <div className="text-5xl font-bold tracking-wider max-w-[400px] max-sm:text-3xl">
            Fashion &<div>UI-UX Designer</div>
          </div>
          <h1>
            for startups to large organizations, let’s transform complex design
            problems into simple solutions.
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/resume.pdf"
              download={true}
              className="border border-[#D5D5D5] py-5 px-10 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all"
            >
              Resume
            </Link>
            <Link
              className="border border-[#D5D5D5] py-5 px-10 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all whitespace-nowrap"
              href={"mailto:tanujpandey0303@gmail.com"}
            >
              E-Mail
            </Link>
          </div>
          <p className="text-[#333333] text-xs">
            As a student, I&apos;ve developed strong independent and
            team-working skills, and now I&apos;m ready to contribute my
            expertise to a company.
          </p>
        </div>
        <div className="relative w-[70%] h-[70%] pointer-events-none -z-10 hidden sm:block">
          <Image
            src={"/hero-section-image.svg"}
            fill
            alt="hero-section-image"
          />
        </div>
      </div>
      <div className="w-full h-[calc(100vh-80%-80px)]">
        <p className="text-sm text-[#4BB543] text-center">
          A FEW OF THE PLACES I WORKED
        </p>
        <div className="relative flex items-center justify-center w-[80%] h-[70%] mx-auto -z-10">
          <Image
            src={"/company-logos.svg"}
            alt="company-logos"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
