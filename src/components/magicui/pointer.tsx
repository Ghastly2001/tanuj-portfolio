"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Pointer({
  className,
  style,
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "ref">): JSX.Element {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const parentElement = containerRef.current.parentElement;

      if (parentElement) {
        parentElement.style.position = "relative";
        parentElement.style.overflow = "hidden";
        parentElement.style.cursor = "none";

        const handleMouseMove = (e: MouseEvent) => {
          const rect = parentElement.getBoundingClientRect();
          x.set(e.clientX - rect.left);
          y.set(e.clientY - rect.top);
        };

        const handleMouseEnter = () => setIsActive(true);
        const handleMouseLeave = () => setIsActive(false);

        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", handleMouseEnter);
        parentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          parentElement.style.position = "";
          parentElement.style.overflow = "";
          parentElement.style.cursor = "";
          parentElement.removeEventListener("mousemove", handleMouseMove);
          parentElement.removeEventListener("mouseenter", handleMouseEnter);
          parentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [x, y]);

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
            ref={pointerRef}
            className="pointer-events-none absolute z-50"
            style={{
              x,
              y,
              ...style,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            {...props}
          >
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "rotate-[-70deg] stroke-white text-black",
                  className
                )}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
