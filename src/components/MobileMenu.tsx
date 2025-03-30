import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface IMobileMenu {
  className?: string;
  links: {
    name: string;
    href: string;
  }[];
}

const MobileMenu = ({ className, links }: IMobileMenu) => {
  const [opened, setOpened] = useState(false);

  const data = links.map((item, index) => (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={opened ? "opened" : "closed"}
      variants={{
        opened: { y: 0, opacity: 1 },
        closed: { y: 100, opacity: 0 },
      }}
      transition={{ duration: 0.5, ease: "circOut", delay: index * 0.1 }}
      key={item.name}
    >
      <Link
        key={item.name}
        href={item.href}
        className={`inline-block font-medium transition-all duration-300 text-2xl md:text-sm xl:text-base hover:text-gray-300 text-white`}
        onClick={() => setOpened(!opened)}
      >
        <span>{item.name}</span>
      </Link>
    </motion.div>
  ));
  return (
    <div className="lg:hidden ">
      {opened ? (
        <X onClick={() => setOpened(!opened)} />
      ) : (
        <MenuIcon onClick={() => setOpened(!opened)} />
      )}
      <motion.div
        className={cn(
          className,
          "fixed z-50 inset-0  h-[calc(100vh - 76px)] top-[76px]"
        )}
        initial={{ display: "none" }}
        animate={opened ? "opened" : "closed"}
        variants={{
          opened: { display: "block" },
          closed: { display: "none", transition: { delay: 0.2 } },
        }}
        transition={{ duration: 0 }}
      >
        <motion.div
          className="bg-[#333333] w-full h-screen  flex flex-col justify-between items-start pb-2"
          initial={{ opacity: 0 }}
          animate={opened ? "opened" : "closed"}
          variants={{
            opened: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Menu links */}
          <div className="flex-1 h-full border w-full flex flex-col justify-center items-center p-8 gap-6">
            {data}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
