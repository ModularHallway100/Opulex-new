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
      <circle cx="20" cy="20" r="18" fill="hsl(var(--secondary))" />
      <circle cx="20" cy="20" r="19" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
      <path
        d="M23.2,12.5c-1.2-1.2-2.8-1.9-4.5-1.9c-3.5,0-6.4,2.9-6.4,6.4c0,1.7,0.7,3.3,1.9,4.5L12.5,23.2l1.8,2.3l2.3,1.8l1.7,0.7 c-0.8-1.1-1.2-2.4-1.2-3.8c0-3.5,2.9-6.4,6.4-6.4c1.4,0,2.7,0.5,3.8,1.2l-0.7-1.7l-1.8-2.3L23.2,12.5z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M20,29c-3.9,0-7-3.1-7-7s3.1-7,7-7c1.6,0,3.1,0.5,4.3,1.4l-1.4,1.4c-0.7-0.5-1.6-0.8-2.6-0.8c-2.8,0-5,2.2-5,5s2.2,5,5,5 c1,0,1.9-0.3,2.6-0.8l1.4,1.4C23.1,28.5,21.6,29,20,29z M28.6,21.4c-0.8-2.3-2.6-4.1-4.9-4.9l1.2-1.2c2.8,0.9,5,3.1,5.9,5.9 L28.6,21.4z"
        fill="hsl(var(--secondary-foreground))"
        opacity="0.6"
      />
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
