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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 md:px-24 lg:px-40 py-8 w-full bg-white/5 backdrop-blur-[2px]"
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-bold tracking-tight text-myskin-slate drop-shadow-sm">
          MySkin<span className="font-light">AI</span>
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-12">
        {['Explore', 'Your Skin', 'Transformations', 'AI Guidance', 'Philosophy'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-sm font-semibold text-myskin-slate/80 hover:text-myskin-slate transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block px-6 py-2.5 rounded-full border border-myskin-slate/20 text-sm font-bold text-myskin-slate hover:bg-myskin-slate/5 transition-all">
          Contact Us
        </button>
        <button className="px-8 py-2.5 rounded-full bg-myskin-slate text-white text-sm font-bold shadow-lg shadow-myskin-slate/10 hover:shadow-xl hover:shadow-myskin-slate/20 transition-all">
          Analyze Skin
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
