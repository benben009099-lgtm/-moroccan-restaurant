import React from "react";

export function Restaurant7Crest({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer octagonal Zellige star frame */}
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="12"
        stroke="#C89D54"
        strokeWidth="1.5"
        fill="#0B1F17"
      />
      {/* Moorish Horseshoe Arch */}
      <path
        d="M18 52V31C18 21.5 24.5 14 32 12C39.5 14 46 21.5 46 31V52"
        stroke="#C89D54"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 52V31.5C21 23.8 26.2 17.5 32 15.8C37.8 17.5 43 23.8 43 31.5V52"
        stroke="#C89D54"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      {/* Subtle 8-point Moroccan Star at crown */}
      <path
        d="M32 7L33.2 9.8L36 11L33.2 12.2L32 15L30.8 12.2L28 11L30.8 9.8L32 7Z"
        fill="#C89D54"
      />
      {/* Stylized Numeral 7 */}
      <path
        d="M25.5 25H39.5L30.2 46H26.8L35.4 28.2H25.5V25Z"
        fill="#FAF6F0"
      />
      <line
        x1="15"
        y1="52"
        x2="49"
        y2="52"
        stroke="#C89D54"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ZelligeSectionDivider({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  const strokeColor = dark ? "#C89D54" : "#C89D54";
  const lineOpacity = dark ? "opacity-35" : "opacity-40";

  return (
    <div
      className={`flex items-center justify-center gap-4 my-4 select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#C89D54] ${lineOpacity}`}
      />
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect
          x="7"
          y="7"
          width="18"
          height="18"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <rect
          x="16"
          y="3.27"
          width="18"
          height="18"
          transform="rotate(45 16 3.27)"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <circle cx="16" cy="16" r="2.5" fill="#B85338" />
      </svg>
      <div
        className={`h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#C89D54] ${lineOpacity}`}
      />
    </div>
  );
}
