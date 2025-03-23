"use client";
import React, { ReactNode, use, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const FadeUp = ({
  children,
  delay,
  duration,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView && !visible) {
      setVisible(true);
    }
  }, [isInView, visible]);
  return (
    <motion.div
      ref={ref}
      transition={{ delay, type: "spring", duration }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      animate={visible ? "visible" : "hidden"}
      initial={"hidden"}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
