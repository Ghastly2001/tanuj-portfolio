"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const router = useRouter();
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
      href: "/projects?category=ui_ux",
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
    <div className="fixed w-full top-0 bg-white/90 shadow-sm  shadow-black/[0.05] z-[10] backdrop-blur-sm">
      <div className="w-full h-[80px] flex items-center px-4 justify-between max-w-7xl mx-auto">
        <div
          className="relative w-[50px] h-[50px] cursor-pointer"
          onClick={() => router.push("/")}
        >
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
              className={`px-6 text-sm  ${
                pathname === link.href || pathname === link.href.slice(0, 9)
                  ? "font-bold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <MobileMenu className="sm:hidden" links={links} />
      </div>
    </div>
  );
};

export default Navbar;
