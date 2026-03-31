"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIDemoSection = () => {
  const [activeLabel, setActiveLabel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLabel((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const labels = [
    { title: "Moisture Level", value: "84%", color: "#3B82F6", top: "25%", left: "65%" },
    { title: "Texture Score", value: "92/100", color: "#10B981", top: "45%", left: "35%" },
    { title: "Tone Evenness", value: "Optimal", color: "#6366F1", top: "65%", left: "60%" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Text Description */}
        <div className="md:w-1/2 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-myskin-slate"
          >
            AI-Powered <br />Precision Analysis
          </motion.h2>
          <p className="text-xl text-myskin-slate/60 leading-relaxed max-w-lg">
            Our proprietary scanning technology identifies subsurface skin conditions that the human eye might miss. Instantly detect dehydration, sun damage, and early signs of aging.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-myskin-slate/40">Clinical Grade</h4>
              <p className="text-lg font-medium">Laboratory standard accuracy in your pocket.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-myskin-slate/40">Real-time</h4>
              <p className="text-lg font-medium">Instant results powered by neural edge processing.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Scan Demo */}
        <div className="md:w-1/2 relative bg-myskin-bg rounded-3xl overflow-hidden p-8 shadow-2xl shadow-black/5 aspect-square flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden group">
            {/* Base Image */}
            <img 
              src="https://images.unsplash.com/photo-1542453580-0d33e5c7075c?auto=format&fit=crop&q=80&w=1000" 
              alt="Skin Analysis"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            
            {/* Scan Beam */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-myskin-slate/10 to-transparent animate-laser z-20 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-myskin-slate/30 shadow-[0_0_15px_rgba(53,75,89,0.5)] animate-laser z-30 pointer-events-none" />
            
            {/* Floating Labels */}
            <AnimatePresence>
              {labels.map((label, index) => (
                <motion.div
                  key={label.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: activeLabel === index ? 1 : 0.4, 
                    scale: activeLabel === index ? 1.05 : 1,
                    y: activeLabel === index ? [0, -5, 0] : 0
                  }}
                  transition={{ 
                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                  }}
                  className="absolute z-40"
                  style={{ top: label.top, left: label.left }}
                >
                  <div className="flex flex-col gap-1 items-start">
                    <div className="w-4 h-4 rounded-full bg-white border-2 border-myskin-slate animate-pulse" />
                    <div className="glass px-4 py-2 rounded-xl flex flex-col -ml-2 mt-1 min-w-[140px]">
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-myskin-slate/50">
                        {label.title}
                      </span>
                      <span className="text-sm font-bold text-myskin-slate">
                        {label.value}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-10 opacity-10 pointer-events-none bg-[radial-gradient(#354B59_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemoSection;
