import { projects } from "@/lib/constants";
import React from "react";
import ProjectTypeCard from "./project-type-card";
import FadeUp from "./animations/fade-up";

const RecommendedProjects = ({ category }: { category: string }) => {
  const updatedProjectsList = projects.filter(
    (project) => project.url !== category
  );
  return (
    <div className="bg-[#F7F7FA] mb-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-10 py-14 flex flex-col items-center">
        <div className="flex items-center md:gap-12 h-full flex-col sm:flex-row gap-12">
          <FadeUp>
            <h1 className="max-w-full lg:max-w-[400px] text-2xl lg:text-3xl font-bold leading-none lg:leading-[32px] text-center">
              Check out some of the{" "}
              <span className="text-[#4BB543]">projects</span> I&apos;ve worked
              on
            </h1>
          </FadeUp>
        </div>
        <div className="mt-[55px] flex lg:flex-row lg:items-center gap-10 justify-between flex-col">
          {updatedProjectsList.map((project, index) => (
            <FadeUp delay={0.1 * index} key={index}>
              <ProjectTypeCard
                key={index}
                image={project.image}
                url={project.url}
                desc={project.desc}
                title={project.title}
                recommended={true}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProjects;

//1. we'll have a title of section
//2. this component will take a categories
//3. createv a logic for not in categories because that's what we have to show
