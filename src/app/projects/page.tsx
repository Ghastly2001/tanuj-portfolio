"use client";
import FadeUp from "@/components/animations/fade-up";
import { Pointer } from "@/components/magicui/pointer";
import RecommendedProjects from "@/components/recommended-projects";
import { projects } from "@/data/projects";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

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

  const pillText =
    category === "ui_ux"
      ? "Case Study"
      : category === "fashion"
      ? "View Project"
      : category === "research_project"
      ? "View Document"
      : "";

  return (
    <div className="max-w-5xl mx-auto mb-[172px] px-4 sm:px-10">
      {category && (
        <div className="flex items-center flex-col-reverse lg:flex-row gap-6 lg:gap-[150px] mt-[112px]">
          <div className="max-w-[650px]">
            <FadeUp>
              <h1 className="text-[#4BB543] font-bold">
                {category === "ui_ux"
                  ? category.toUpperCase().replace(/_/g, "-")
                  : category === "fashion"
                  ? "Fashion"
                  : "Documentations"}
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-[10px] text-3xl font-bold">
                0{categoryProjects.length} Projects
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6">
                {projects[category as keyof typeof projects].heading}
              </p>
            </FadeUp>
            <Link href={"https://www.behance.net/tanujpandey2"}>
              <FadeUp delay={0.3}>
                <button className="border border-[#D5D5D5] py-2 px-5 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all mt-6">
                  View All Works
                </button>
              </FadeUp>
            </Link>
          </div>
          <FadeUp
            delay={0.3}
            className="relative w-[238px] h-[156px] lg:w-[400px] lg:h-[280px]"
          >
            <Image
              src={projects[category as keyof typeof projects].image}
              alt={category}
              fill
            />
          </FadeUp>
        </div>
      )}
      {categoryProjects.length > 0 &&
        categoryProjects.map((project, index) => (
          <ProjectCard
            {...project}
            key={project.title}
            i={index}
            pillText={pillText}
          />
        ))}
    </div>
  );
}

function RecommendedProjectsWrapper() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return <RecommendedProjects category={category!} />;
}

// Main page component wrapped in Suspense
const ProjectsPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
      <ProjectsPageContent />
      <RecommendedProjectsWrapper />
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
  i,
  pillText,
}: {
  image?: string;
  badge?: string;
  title?: string;
  url?: string;
  medal?: boolean;
  desc?: string;
  i: number;
  pillText: string;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <div className="mt-[100px] sticky top-24" ref={container}>
      <Card
        badge={badge}
        desc={desc}
        image={image}
        medal={medal}
        title={title}
        url={url}
        scale={scale}
        i={i}
        pillText={pillText}
      />
    </div>
  );
}

export default ProjectsPage;

const Card = ({
  image,
  badge,
  title,
  url,
  medal,
  desc,
  scale,
  i,
  pillText,
}: {
  image?: string;
  badge?: string;
  title?: string;
  url?: string;
  medal?: boolean;
  desc?: string;
  scale?: MotionValue<number>;
  i: number;
  pillText: string;
}) => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-8">
        <motion.div
          className={`relative min-w-full h-[300px] lg:min-w-[530px] lg:h-[450px] overflow-hidden rounded-xl`}
          onClick={() => (window.location.href = url!)}
        >
          <motion.div
            className="relative w-full h-full rounded-xl"
            style={{ scale, y: i * 30 }}
          >
            <Image
              src={image || ""}
              fill
              alt="bridging-the-gap"
              className="object-cover rounded-xl"
            />
          </motion.div>
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
              }}
              className="cursor-not-allowed"
            >
              <span className="bg-white/70 text-base font-semibold me-2 px-5 py-3 rounded-full">
                {pillText}
              </span>
            </motion.div>
          </Pointer>
        </motion.div>
        <div className="w-full h-full flex flex-col justify-end gap-4 bg-[#ffffff]">
          <div className="flex items-center gap-4 mt-auto">
            {medal && (
              <Image src={"/medal-3.svg"} width={20} height={20} alt="medal" />
            )}
            <p className="text-xs font-bold bg-[#F7F7FA] px-3 py-2 rounded-full">
              {badge}
            </p>
          </div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-[#333333] leading-[25px]">{desc}</p>
          <button
            className="flex items-center text-sm font-bold text-[#4BB543]"
            onClick={() => window.open(url, "_blank")}
          >
            View Case Study
            <ArrowRight strokeWidth={2} />
          </button>
        </div>
      </div>
    </Suspense>
  );
};
