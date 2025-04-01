"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
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
    <div className="fixed w-full top-0 bg-white/90 shadow-sm shadow-black/[0.05] z-[10] backdrop-blur-sm">
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
        <div className="hidden sm:flex items-center">
          {links.map((link) =>
            link.name === "Projects" ? (
              <div
                key={link.href}
                className="relative "
                onMouseEnter={() => setActive("Projects")}
                onMouseLeave={() => setActive(null)}
              >
                <Link
                  href={link.href}
                  className={`px-6 text-sm flex items-center${
                    pathname === link.href || pathname === link.href.slice(0, 9)
                      ? "font-bold"
                      : ""
                  } cursor-pointer`}
                >
                  <span>{link.name}</span>{" "}
                  <ChevronDown
                    className={`font-medium ml-1 transition-all ${
                      active === "Projects" ? "rotate-180" : "rotate-0"
                    }`}
                    size={16}
                  />
                </Link>

                <AnimatePresence>
                  {active === "Projects" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="absolute top-4 left-0 bg-white backdrop-blur-sm p-4 rounded-lg shadow-xl space-y-3"
                    >
                      <motion.div
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-40"
                      >
                        <Link
                          href="/projects?category=ui_ux"
                          className="text-black font-medium flex gap-2"
                        >
                          UI-UX
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          className="text-black font-medium"
                          href="/projects?category=fashion"
                        >
                          Fashion
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          href="/projects?category=research_project"
                          className="text-black font-medium"
                        >
                          Research Projects
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={link.href}
                key={link.href}
                className={`px-6 text-sm ${
                  pathname === link.href || pathname === link.href.slice(0, 9)
                    ? "font-bold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
        <MobileMenu className="hidden" links={links} />
      </div>
    </div>
  );
};

export default Navbar;
