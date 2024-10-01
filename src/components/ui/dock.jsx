"use client";;
import React, { useRef, createContext, useContext } from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const DockContext = createContext(null);

const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md"
);

const Dock = React.forwardRef((
  {
    className,
    children,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    direction = "bottom",
    ...props
  },
  ref,
) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mouseX, magnification, distance }}>
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}>
        {children}
      </motion.div>
    </DockContext.Provider>
  );
});

Dock.displayName = "Dock";

const DockIcon = ({
  size,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const { mouseX, magnification, distance } = useContext(DockContext);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [40, magnification, 40]);

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    (<motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}>
      {children}
    </motion.div>)
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
