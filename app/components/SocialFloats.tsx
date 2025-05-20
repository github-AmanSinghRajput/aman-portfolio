'use client';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

const socials = [
  {
    href: 'https://linkedin.com/in/aman-singh-rajput-08b498170',
    label: 'LinkedIn',
    Icon: Linkedin,
    className: 'bg-accentBlue',
  },
  {
    href: 'https://github.com/github-AmanSinghRajput',
    label: 'GitHub',
    Icon: Github,
    className: 'bg-[#161B22]',
  },
];

export default function SocialFloats() {
  return (
    <div className="fixed bottom-20 right-4 flex flex-col items-end gap-3 z-40">
      {socials.map(({ href, label, Icon, className }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          aria-label={label}
          className={`group flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110 ${className}`}
        >
          <Icon className="h-6 w-6" />
          <span className="absolute -top-9 right-1/2 translate-x-1/2
                         px-2 py-1 rounded-md text-xs whitespace-nowrap
                         bg-gray-800 text-white opacity-0 scale-95
                         group-hover:opacity-100 group-hover:scale-100
                         transition-all origin-bottom">
          {label}
        </span>
        </Link>
        
      ))}
    </div>
  );
}
