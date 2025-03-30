"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "./animations/fade-up";

const testimonials = [
  {
    id: 1,
    text: "Tanuj is a talented and dedicated professional who consistently delivered excellent results at Team Pumpkin. He brings design thinking expertise, a thorough approach, and a passion for challenges. I highly recommend him to any organization seeking innovative talent. He'll be a valuable asset!",
    author: "Deepali Jain",
    role: "Product Manager",
    company: "Team Pumpkin",
  },
  {
    id: 2,
    text: "Tanuj interned with us at Team Pumpkin and made a significant impact on our UI/UX design projects. His ability to quickly assimilate into the team and contribute to complex design challenges was remarkable. Tanuj showed exceptional skills and delivered high-quality work. His creative solutions and user-focused approach were crucial in achieving our design objectives. He also demonstrated strong collaboration skills, working effectively with cross-functional teams to ensure the best outcomes.",
    author: "Arshad Shaikh",
    role: "Senior Manager",
    company: "Team Pumpkin",
  },
  {
    id: 3,
    text: "Tanuj Pandey is an excellent team leader and UI-UX designer. He constantly exhibits his high level of skill, which encourages teamwork. He is a master at staying up-to-date with the newest trends and has extraordinary design expertise. Tanuj's ability to spot UI elements in his designs gives them a distinctive and appealing touch, which makes him a valuable asset to any creative project.",
    author: "Aviz Healthcare",
    role: "Company",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#F7F7FA] lg:h-[425px] w-full max-sm:px-4 flex items-center justify-center relative overflow-hidden py-60">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === "right" ? -50 : 50 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full px-4"
        >
          <div className="w-5xl h-[232px] mx-auto flex justify-center sm:px-10 px-4 mb-16 ">
            <FadeUp>
              <Image
                src={"/quote-left.svg"}
                width={100}
                height={62}
                alt="quote"
                className="mb-auto  lg:block"
              />
            </FadeUp>
            <div className="w-[780px] px-2 lg:px-16">
              <p className="text-center lg:leading-[32px] text-sm lg:text-[16px] text-black/[0.78]">
                {testimonials[activeIndex].text}
              </p>
              <h1 className="font-bold text-center mt-4 lg:mt-[16px]">
                {testimonials[activeIndex].author}
              </h1>
              <p className="text-center font-semibold text-black/[0.78] mt-1">
                ({testimonials[activeIndex].role})
              </p>
              {testimonials[activeIndex].company && (
                <p className="text-center text-black/[0.78] mt-1 lg:mt-2">
                  {testimonials[activeIndex].company}
                </p>
              )}
            </div>
            <FadeUp delay={0.2}>
              <Image
                src={"/quote-right.svg"}
                width={100}
                height={62}
                alt="quote"
                className="mt-auto  lg:block"
              />
            </FadeUp>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 space-x-2 hidden lg:flex">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-2 rounded-full ${
              index === activeIndex
                ? "bg-[#4BB543] w-12 transition-all"
                : "bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          setDirection("left");
          setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
          );
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 hidden lg:block"
        aria-label="Previous testimonial"
      >
        ←
      </button>
      <button
        onClick={() => {
          setDirection("right");
          setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hidden lg:block"
        aria-label="Next testimonial"
      >
        →
      </button>
    </div>
  );
};

export default TestimonialCarousel;
