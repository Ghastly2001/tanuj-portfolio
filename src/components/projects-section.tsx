"use client";
import React from "react";
import ProjectTypeCard from "./project-type-card";
import Link from "next/link";
import FadeUp from "./animations/fade-up";

const ProjectsSection = () => {
  const projects = [
    {
      title: "UI-UX",
      image: "ui_ux",
      url: "ui_ux",
      desc: "Worked on developing intuitive digital solutions through research, wireframing, and prototyping to enhance user experiences.",
    },
    {
      title: "Fashion",
      image: "fashion",
      url: "fashion",
      desc: "Focused on creating innovative designs that merge aesthetics with functionality, reflecting contemporary trends.",
    },
    {
      title: "Documents",
      image: "research-project",
      url: "research_project",
      desc: "Documented traditional crafts and practices, highlighting their cultural value and craftsmanship and research paper.",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8 sm:px-10 ">
      <div className=" md:gap-12 h-[80%] flex-col sm:flex-row mt-[85px] lg:mt-[110px]">
        <FadeUp>
          <h1 className="max-w-full lg:max-w-[400px] text-2xl lg:text-3xl font-bold lg:leading-[32px] leading-[32px]">
            Check out some of the{" "}
            <span className="text-[#4BB543]">projects</span> I&apos;ve worked on
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="max-w-full lg:max-w-[60%] leading-[32px] text-[16px] mt-[24px] lg:mt-[39px]">
            Creativity meets functionality across fashion and UX design. Here,
            you&apos;ll find a curated selection of my work that reflects my
            passion for blending artistic vision with practical solutions.
            Explore my work to see how I integrate style with purpose, creating
            designs that are both visually captivating and user-centric.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <Link href={"https://www.behance.net/tanujpandey2"}>
            <button className="border border-[#D5D5D5] py-3 px-5 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all mt-[37px] text-base lg:text-lg">
              View All Design Works
            </button>
          </Link>
        </FadeUp>
      </div>
      <div className="mt-[55px] flex lg:flex-row lg:items-center gap-10 lg:gap-7 justify-between flex-col">
        {projects.map((project, index) => (
          <FadeUp delay={index * 0.1} key={index}>
            <ProjectTypeCard
              key={index}
              image={project.image}
              url={project.url}
              desc={project.desc}
              title={project.title}
            />
          </FadeUp>
        ))}
      </div>
      <FadeUp>
        <div className="relative mt-[65px] w-full rounded-[10px]  overflow-hidden bg-[#4BB543] mb-[80px]">
          <div className="w-[calc(100%-5px)] h-full bg-[#f1f9f0] text-sm  py-3 px-10 text-[#4BB543] rounded-l-[10px] ml-auto leading-[24px]">
            These are the best products I&apos;ve worked. Also click on the{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() =>
                window.open("https://www.behance.net/tanujpandey2")
              }
            >
              View All Designs Works
            </span>{" "}
            button for behance portfolio.
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

export default ProjectsSection;
