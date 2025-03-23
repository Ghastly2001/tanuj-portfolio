"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Me",
      href: "/about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/tanuj-pandey-55258223a",
    },
    {
      name: "Behance",
      href: "https://www.behance.net/tanujpandey2",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="fixed w-full top-0 bg-white/60 shadow-sm shadow-black/[0.05] z-[99999] backdrop-blur-md">
      <div className="w-full h-[80px] flex items-center px-4 justify-between max-w-7xl mx-auto">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src={"/logo.svg"}
            layout="fill"
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="hidden sm:block">
          {/* WIP: Projects active on link click */}
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`px-7 text-sm  ${
                pathname === link.href ? "font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Menu
          className="sm:hidden text-black border border-black p-1 rounded-md"
          size={40}
        />
      </div>
    </div>
  );
};

export default Navbar;
