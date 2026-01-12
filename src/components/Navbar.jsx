'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      
      {/* LOGO */}
      <div className="flex items-center">
        <Image
          src="/wedding/Elegantize-Logo.png"
          alt="Elegantize Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      {/* NAV LINKS */}
      <ul className="hidden md:flex gap-8 text-[16px] font-medium">
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
        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
}
