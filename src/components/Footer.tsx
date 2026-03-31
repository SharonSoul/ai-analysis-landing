"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const DownloadSection = () => {
  return (
    <section className="py-24 bg-myskin-slate text-white text-center rounded-[60px] mx-8 mb-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      
      <div className="relative z-10 space-y-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">Scan to Download <br /> <span className="not-italic">Mobile Version</span></h2>
          <p className="text-white/50 text-sm font-medium uppercase tracking-widest">Available on iOS & Android</p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-[32px] shadow-2xl">
            <div className="w-48 h-48 bg-myskin-slate rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* QR Code Placeholder with styling */}
              <div className="absolute inset-0 border-[10px] border-white/10" />
              <div className="grid grid-cols-4 gap-2 opacity-80">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`w-6 h-6 ${i % 3 === 0 ? 'bg-white' : 'bg-transparent border border-white/20'} rounded-sm`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <h1 className="text-8xl md:text-[120px] font-bold text-white/10 tracking-tighter select-none">MYSKIN</h1>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-t border-myskin-slate/5">
      <div className="text-myskin-slate/40 text-xs font-bold uppercase tracking-widest">
        © 2026 MySkin AI. All rights reserved.
      </div>
      
      <div className="flex items-center gap-8">
        {['Privacy', 'Terms', 'Support', 'Press'].map((item) => (
          <a key={item} href="#" className="text-xs font-bold uppercase tracking-widest text-myskin-slate/40 hover:text-myskin-slate transition-colors">
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
};
