import Image from "next/image";
import React from "react";

const HelpSection = () => {
  const data = [
    {
      title: "Improving Engagement Across Platforms?",
      desc: "I craft user-centric designs and cohesive fashion concepts that enhance your brand identity and captivate your audience.",
    },
    {
      title: "Need a Website, App, or Lookbook Revamp?",
      desc: "I transform digital platforms with intuitive designs and fashion assets that boost user satisfaction and visual appeal.",
    },
    {
      title: "Improving Engagement Across Platforms?",
      desc: "Whether it's optimizing user journeys for a digital app or curating impactful styling for campaigns, I design to connect with your audience deeply.",
    },
    {
      title: "Seeking Strategy in UX or Fashion?",
      desc: "From defining user personas and competitive analysis to creating innovative fashion concepts, I align strategy with creativity to deliver results.",
    },
  ];
  return (
    <div className="bg-[#F7F7FA] h-[600px] w-full max-sm:px-4">
      <div className="max-w-[1100px] mx-auto h-full flex items-center justify-center flex-col">
        <h1 className="font-bold text-3xl w-full text-center">
          Ways I can help?
        </h1>
        <div className="grid grid-cols-2 mt-[67px] gap-9">
          {data.map((item, index) => (
            <GridCard desc={item.desc} title={item.title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;

function GridCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 max-w-[90%]">
      <Image
        src={"/check.svg"}
        width={18}
        height={18}
        alt="check"
        className="mt-1"
      />
      <div className="flex flex-col justify-start">
        <h1 className="text-[16px] font-bold">{title}</h1>
        <p className="text-[16px] text-[#333333]">{desc}</p>
      </div>
    </div>
  );
}
