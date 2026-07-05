"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-24 lg:px-40 py-4 md:py-6 w-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20 py-4' : 'bg-transparent py-6 md:py-8'
        }`}
    >


      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <Image src="/myskinLogo.png" alt="MySkin" width={120} height={40} className="h-8 md:h-10 w-auto" priority />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/myskin-demo"}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block px-6 py-2.5 rounded-xl bg-white/20 border border-white/30 text-[10px] font-black uppercase tracking-widest text-myskin-slate hover:bg-white/40 transition-all backdrop-blur-md shadow-sm"
        >
          Book Consultation
        </a>

        <button
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-2.5 rounded-xl bg-myskin-slate text-white text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-myskin-slate/20 hover:scale-105 active:scale-95 transition-all"
        >
          Join the waitlist
        </button>
      </div>
    </motion.nav>
  );
};


export default Navbar;
