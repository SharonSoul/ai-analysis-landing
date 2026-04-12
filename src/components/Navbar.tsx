"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-24 lg:px-40 py-6 md:py-8 w-full bg-transparent"
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <img src="/myskinLogo.png" alt="MySkin" className="h-8 md:h-10 w-auto" />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block px-6 py-2.5 rounded-xl bg-white/20 border border-white/30 text-[10px] font-black uppercase tracking-widest text-myskin-slate hover:bg-white/40 transition-all backdrop-blur-md shadow-sm">
          Contact
        </button>
        <button className="px-6 py-2.5 rounded-xl bg-myskin-slate text-white text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-myskin-slate/20 hover:scale-105 active:scale-95 transition-all">
          Download App
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
