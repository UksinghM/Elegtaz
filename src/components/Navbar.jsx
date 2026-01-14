'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-1 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center">
        {/* container must be relative for Image fill to work */}
        <div className="relative w-28 h-8 md:w-36 md:h-10">
          <Image
            src="/Homepage/logo.png"
            alt="Elegantize Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* NAV LINKS */}
      <ul className="hidden md:flex gap-5 text-sm font-medium">
        <li><Link href="/" className="hover:text-[#c6a062]">Home</Link></li>
        <li><Link href="/about" className="hover:text-[#c6a062]">About</Link></li>
        <li><Link href="/services" className="hover:text-[#c6a062]">Services</Link></li>
        <li><Link href="/gallery" className="hover:text-[#c6a062]">Gallery</Link></li>
        <li><Link href="/portfolio" className="hover:text-[#c6a062]">Portfolio</Link></li>
        <li><Link href="/blog" className="hover:text-[#c6a062]">Blog</Link></li>
        <li><Link href="/faqs" className="hover:text-[#c6a062]">FAQs</Link></li>
        <li><Link href="/contact" className="hover:text-[#c6a062]">Contact</Link></li>
      </ul>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button className="text-xl">☰</button>
      </div>
    </nav>
  );
}