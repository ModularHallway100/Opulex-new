import React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <svg
    width="140"
    height="40"
    viewBox="0 0 140 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <circle cx="20" cy="20" r="19" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
      <g>
        <path d="M22.5,29.5 C19,30,15,28,13.5,24.5 C12,21,14,17,17.5,15.5" fill="#112A60" />
        <path d="M17.5, 15.5 C20,15,22,15.5,23.5,17 C25,18.5,25.5,21,25,23" fill="#112A60" />
        <path d="M25,23 C24,24,23,24.5,22,25 L22.5,29.5 L24,28 L25,23" fill="#0D2047" />
        <path d="M14,24.5 C15.5,22.5,17.5,21,20,20 C22.5,19,25,19.5,26.5,21.5" fill="hsl(var(--primary))" />
        <path d="M17,15.5 C17.5,14,19,12.5,21,12 C23,11.5,25,12,26.5,13.5 C28,15,28.5,17,28,19" fill="hsl(var(--primary))" />
        <path d="M28,19 C27,19.5,26,20,25,20.5 L26.5,21.5 L27,20 L28,19" fill="hsl(var(--primary))" opacity="0.8"/>
      </g>
    </g>
    <text
      x="48"
      y="27"
      fontFamily="Plus Jakarta Sans, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="hsl(var(--foreground))"
    >
      Opulex
    </text>
  </svg>
);

export default Logo;
