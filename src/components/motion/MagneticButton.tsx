import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export const Magnetic = ({
  children,
  className = "",
  strength = 0.35,
  as = "div",
  onClick,
  href,
  type,
}: MagneticProps) => {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = motion[as] as any;

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
      onClick={onClick}
      href={href}
      type={type}
      data-cursor="magnetic"
    >
      <motion.span style={{ x: sx, y: sy, display: "inline-block" }}>
        {children}
      </motion.span>
    </Tag>
  );
};
