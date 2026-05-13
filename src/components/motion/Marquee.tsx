import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds for one loop
  reverse?: boolean;
  className?: string;
}

export const Marquee = ({ children, speed = 40, reverse = false, className = "" }: MarqueeProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex gap-16 whitespace-nowrap will-change-transform"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        <div className="flex gap-16 items-center">{children}</div>
        <div className="flex gap-16 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
};
