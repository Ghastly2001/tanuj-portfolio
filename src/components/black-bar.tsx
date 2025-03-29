import Image from "next/image";
import React from "react";

const BlackBar = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="w-full h-[80px] bg-black px-4">
      <div className="max-w-7xl flex items-center justify-between mx-auto h-full">
        <div className=" flex items-center gap-4">
          <p className="mx-auto text-white text-sm">
            © {currentYear} Tanuj Designs.
          </p>
        </div>
        <p className="text-white text-sm">
          Crafted with love 🤍 and lots of chai & coffee ☕
        </p>
      </div>
    </div>
  );
};

export default BlackBar;
