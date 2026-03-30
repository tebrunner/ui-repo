import React from "react";

interface SpeechBubbleProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "bottom";
  className?: string;
  variant?: "speech" | "thought" | "shout";
}

export function SpeechBubble({ children, direction = "bottom", className = "", variant = "speech" }: SpeechBubbleProps) {
  const tailPath = direction === "left"
    ? "M 0 20 L -16 30 L 8 28 Z"
    : direction === "right"
    ? "M 100% 20 L calc(100% + 16) 30 L calc(100% - 8) 28 Z"
    : "M 30 100% L 20 calc(100% + 18) L 42 100% Z";

  const borderStyle = variant === "shout"
    ? "border-[3px] border-black"
    : "border-2 border-black";

  const shapeClass = variant === "thought"
    ? "rounded-[50%]"
    : variant === "shout"
    ? "rounded-none"
    : "rounded-[20px]";

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`bg-white ${borderStyle} ${shapeClass} px-3 py-2 relative`}
        style={variant === "shout" ? {
          clipPath: "polygon(4% 0%, 96% 2%, 100% 5%, 98% 95%, 95% 100%, 5% 98%, 0% 96%, 2% 4%)"
        } : undefined}
      >
        <div className="font-['Special_Elite',monospace] text-black">
          {children}
        </div>
      </div>
      {variant !== "thought" && (
        <svg className="absolute w-full h-5 left-0" style={{ top: "100%", marginTop: "-1px" }} viewBox="0 0 200 20" preserveAspectRatio="none">
          <path d={direction === "left" ? "M 30 0 L 10 20 L 50 0" : direction === "right" ? "M 150 0 L 190 20 L 170 0" : "M 80 0 L 60 20 L 100 0"} fill="white" stroke="black" strokeWidth="2" />
        </svg>
      )}
      {variant === "thought" && (
        <div className="flex gap-1 ml-6 -mt-1">
          <div className="w-2 h-2 bg-white border border-black rounded-full" />
          <div className="w-1.5 h-1.5 bg-white border border-black rounded-full mt-1" />
        </div>
      )}
    </div>
  );
}