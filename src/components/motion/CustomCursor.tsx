import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });
  const ringX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });

  const [variant, setVariant] = useState<"default" | "hover" | "view">("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='magnetic'], input, textarea, label")) {
        setVariant("hover");
      } else if (target.closest("[data-cursor='view']")) {
        setVariant("view");
      } else {
        setVariant("default");
      }
    };
    window.addEventListener("mousemove", move);
    document.documentElement.classList.add("has-custom-cursor");
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      >
        <motion.div
          animate={{
            scale: variant === "hover" ? 0.4 : variant === "view" ? 1.6 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
      >
        <motion.div
          animate={{
            scale: variant === "hover" ? 2.4 : variant === "view" ? 3.2 : 1,
            opacity: variant === "default" ? 0.5 : 0.85,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-accent"
        />
      </motion.div>
    </>
  );
};
