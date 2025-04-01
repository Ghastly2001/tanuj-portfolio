import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectTypeCard = ({
  image,
  url,
  desc,
  title,
  recommended,
}: {
  image: string;
  url: string;
  desc: string;
  title: string;
  recommended?: boolean;
}) => {
  return (
    <Link href={`/projects?category=${url}`}>
      <div
        className={`${
          recommended ? "lg:w-[330px] lg:h-[374px]" : "lg:h-full lg:w-full"
        }  h-full w-full flex flex-col gap-[24px] cursor-pointer transition-all group`}
      >
        <div className="flex items-center justify-center w-full border border-black/15 h-[225px] rounded-xl p-4 group-hover:shadow-lg transition-all duration-300">
          <Image
            src={`/${image}.svg`}
            height={180}
            width={255}
            alt="ui_ux"
            className="w-[255px] h-[170px] group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div
          className={`w-full ${
            recommended && "flex flex-col gap-1 items-center"
          }`}
        >
          <h1 className={`font-bold ${recommended && "text-center"}`}>
            {title}
          </h1>
          <p className={`mt-1 line-clamp-3 ${recommended && "text-center"}`}>
            {desc}
          </p>

          <div
            className={`flex items-center gap-2 text-[#4BB543] font-bold mt-[16px] ${
              recommended && "justify-center"
            }`}
          >
            View Projects
            <ArrowRight
              className="font-bold group-hover:translate-x-1 transition-all duration-300"
              strokeWidth={1.2}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectTypeCard;
