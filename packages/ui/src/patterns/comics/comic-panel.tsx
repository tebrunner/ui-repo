import React from "react";

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  notebookLines?: boolean;
  title?: string;
  borderWidth?: number;
}

export function ComicPanel({ children, className = "", notebookLines = false, title, borderWidth = 3 }: ComicPanelProps) {
  return (
    <div
      className={`relative bg-white overflow-hidden ${className}`}
      style={{
        border: `${borderWidth}px solid black`,
        boxShadow: "4px 4px 0px black",
      }}
    >
      {notebookLines && (
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #c8d8e8 27px, #c8d8e8 28px)",
          backgroundPosition: "0 8px",
          opacity: 0.4,
        }} />
      )}
      {notebookLines && (
        <div className="absolute left-[30px] top-0 bottom-0 w-[1px] pointer-events-none" style={{
          background: "rgba(220, 80, 80, 0.3)",
        }} />
      )}
      {title && (
        <div className="border-b-2 border-black px-3 py-1.5 bg-black">
          <span className="font-['Bangers',cursive] text-white tracking-wider">{title}</span>
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
