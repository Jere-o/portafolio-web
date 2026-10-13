import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center bg-white/[0.06] backdrop-blur-xl text-[#38BDF8] text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] tracking-wide">
      <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping mr-2" />
      {children}
    </span>
  );
};