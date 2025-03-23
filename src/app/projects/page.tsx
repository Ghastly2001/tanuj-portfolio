"use client";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

// Wrapper component to handle Suspense
function ProjectsPageContent() {
  const searchParams = useSearchParams();
  const [categoryProjects, setCategoryProjects] = useState<
    {
      image: string;
      badge: string;
      title: string;
      url: string;
      medal: boolean;
      desc: string;
    }[]
  >([]);
  const category = searchParams.get("category");
  useEffect(() => {
    if (category) {
      setCategoryProjects(
        projects[category as keyof typeof projects].project_list
      );
    } else {
      const allProjects = Object.values(projects).reduce(
        (acc, project) => [...acc, ...project.project_list],
        [] as {
          image: string;
          badge: string;
          title: string;
          url: string;
          medal: boolean;
          desc: string;
        }[]
      );
      setCategoryProjects(allProjects);
    }
  }, [category]);

  return (
    <div className="max-w-[1200px] mx-auto mb-[172px]">
      {category && (
        <div className="flex items-center gap-[150px] mt-[112px]">
          <div className="max-w-[650px]">
            <h1 className="text-[#4BB543] font-bold">
              {category === "ui_ux"
                ? category.toUpperCase().replace(/_/g, "-")
                : category === "fashion"
                ? "Fashion"
                : "Research Project"}
            </h1>
            <h1 className="mt-[10px] text-3xl font-bold">
              {categoryProjects.length} Projects
            </h1>
            <p className="mt-6">
              {projects[category as keyof typeof projects].heading}
            </p>
            <button className="border border-[#D5D5D5] py-2 px-5 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all mt-6">
              View All Works
            </button>
          </div>
          <div className="relative w-[400px] h-[280px]">
            <Image
              src={projects[category as keyof typeof projects].image}
              alt={category}
              fill
            />
          </div>
        </div>
      )}
      {categoryProjects.length > 0 &&
        categoryProjects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
    </div>
  );
}

// Main page component wrapped in Suspense
const ProjectsPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
      <ProjectsPageContent />
    </Suspense>
  );
};

function ProjectCard({
  image,
  badge,
  title,
  url,
  medal,
  desc,
}: {
  image?: string;
  badge?: string;
  title?: string;
  url?: string;
  medal?: boolean;
  desc?: string;
}) {
  return (
    <div className="mt-[100px]">
      <div className="w-full flex gap-[55px]">
        <div className="relative min-w-[700px] h-[531px]">
          <Image src={image || ""} fill alt="bridging-the-gap" />
        </div>
        <div className="w-full h-[531px] flex flex-col gap-4 pb-5">
          <div className="flex items-center gap-4 mt-auto">
            {medal && (
              <Image src={"/medal.svg"} width={20} height={20} alt="medal" />
            )}
            <p className="text-xs font-bold bg-[#F7F7FA] px-3 py-2 rounded-full">
              {badge}
            </p>
          </div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-[#333333] leading-[31px]">{desc}</p>
          <button
            className="flex items-center text-sm font-bold text-[#4BB543]"
            onClick={() => window.open(url, "_blank")}
          >
            View Case Study
            <ArrowRight strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
