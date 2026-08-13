"use client";

import { motion } from "framer-motion";

type AsteriskProps = {
  className?: string;
  size?: number;
  spin?: boolean;
};

export function Asterisk({ className = "", size = 24, spin = false }: AsteriskProps) {
  const svg = (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="6"
          x2="50"
          y2="94"
          stroke="currentColor"
          strokeWidth="10"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );

  if (!spin) return svg;

  return (
    <motion.span
      initial={{ rotate: -90, opacity: 0, scale: 0.4 }}
      animate={{ rotate: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "inline-block", width: size, height: size, lineHeight: 0 }}
    >
      {svg}
    </motion.span>
  );
}
