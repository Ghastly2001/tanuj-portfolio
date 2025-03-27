import Image from "next/image";
import React from "react";

const HelpSection = () => {
  const data = [
    {
      title: "ONDC X NIFT",
      desc: "Awarded 3rd place nationally in the super-hackathon held by ONDC for the presentation of research findings and a user-centric design solution.",
      position: 3,
    },
    {
      title: "Proto-UI 2024 by IIT Patna",
      desc: "Nationally awarded 1st place in the Proto-UI hackathon organized by IIT Patna, for presenting a cutting-edge and innovative user interface design.",
      position: 1,
    },
    {
      title: "India Skill Competition 2024",
      desc: "Shortlisted for the India Skill Competition 2024 second round in AR/VR category.",
      position: 2,
    },
    {
      title: "Synergy 2024 by IIIT Bangalore",
      desc: "Nationally honored with 1st place in the Synergy UI-UX hackathon organized by IIIT Bangalore for excellence in user experience design.",
      position: 1,
    },
  ];
  return (
    <div className="bg-[#F7F7FA] h-[760px] lg:h-[600px] w-full px-0  ">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-center flex-col px-4 sm:px-10">
        <h1 className="font-bold text-3xl w-full text-start lg:text-center">
          Passion Meets{" "}
          <span className="font-bold text-[#4BB543]">Recognition</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[67px] gap-9">
          {data.map((item, index) => (
            <GridCard
              desc={item.desc}
              title={item.title}
              key={index}
              position={item.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;

function GridCard({
  title,
  desc,
  position,
}: {
  title: string;
  desc: string;
  position: number;
}) {
  return (
    <div className="flex items-start gap-4 max-w-[90%]">
      <Image
        src={`/medal-${position}.svg`}
        width={18}
        height={18}
        alt="medal"
        className="mt-1"
      />
      <div className="flex flex-col justify-start">
        <h1 className="text-[16px] font-bold">{title}</h1>
        <p className="text-[16px] text-[#333333]">{desc}</p>
      </div>
    </div>
  );
}
