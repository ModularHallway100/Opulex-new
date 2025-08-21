import React from 'react';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => (
  <div className="flex items-center">
    <Image src="/Logo.png" alt="Opulex Logo" width={140} height={40} className={className} priority />
  </div>
);

export default Logo;
