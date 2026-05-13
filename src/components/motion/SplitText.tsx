import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  highlight?: string; // word(s) to wrap with serif-accent text-accent
  highlightLast?: number; // alt: highlight last N words
}

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const SplitText = ({
  children,
  className = "",
  delay = 0,
  stagger = 0.06,
  as = "h1",
  highlight,
  highlightLast,
}: SplitTextProps) => {
  const words = children.split(" ");
  const Tag = motion[as] as any;

  const isHighlighted = (word: string, idx: number) => {
    if (highlight && word.toLowerCase().replace(/[.,!?]/g, "") === highlight.toLowerCase()) return true;
    if (highlightLast && idx >= words.length - highlightLast) return true;
    return false;
  };

  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-[0.15em] -mb-[0.15em]"
          aria-hidden
        >
          <motion.span
            custom={i}
            variants={wordVariants}
            className={`inline-block ${
              isHighlighted(word, i) ? "serif-accent text-accent" : ""
            }`}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  once?: boolean;
}

export const Reveal = ({ children, delay = 0, className = "", y = 24, once = true }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
