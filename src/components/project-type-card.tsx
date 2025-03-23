import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectTypeCard = ({
  image,
  url,
  desc,
  title,
}: {
  image: string;
  url: string;
  desc: string;
  title: string;
}) => {
  return (
    <div className="w-[330px] h-[374px] flex flex-col gap-[24px] ">
      <div className="flex items-center justify-center w-full border border-black/15 h-[225px] rounded-xl p-4">
        <Image
          src={`/${image}.svg`}
          height={180}
          width={255}
          alt="ui_ux"
          className="w-[255px] h-[170px]"
        />
      </div>
      <div className="w-full">
        <h1 className="font-bold">{title}</h1>
        <p className="mt-1 line-clamp-3">{desc}</p>
        <Link
          href={`/projects?category=${url}`}
          className="flex items-center gap-2 text-[#4BB543] font-semibold mt-[25px]"
        >
          View Projects
          <ArrowRight className="font-normal" strokeWidth={0.75} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectTypeCard;
