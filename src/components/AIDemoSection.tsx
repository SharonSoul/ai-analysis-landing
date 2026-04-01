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
    <section className="min-h-[90vh] py-24 bg-white relative overflow-hidden flex items-center">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-myskin-bg/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16 relative z-10 w-full">
        {/* Left Side: Text Description */}
        <div className="md:w-1/2 space-y-6 md:space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-myskin-slate tracking-tight leading-tight"
          >
            Your Face is a Map. <br />Let&apos;s Read It with 468 Points of Precision.
          </motion.h2>
          <p className="text-lg md:text-xl text-myskin-slate/60 leading-relaxed max-w-lg">
            Stop guessing and start knowing. MySkin&apos;s DermFoundation AI Engine uses advanced facial landmarking to map your skin&apos;s unique topography. By analyzing 468 individual points on your face, our technology detects subtle changes in texture, hydration, and barrier health that the human eye might miss.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-myskin-slate/5">
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-myskin-slate/40">Deep Texture Analysis</h4>
              <p className="text-base md:text-lg font-bold text-myskin-slate/80 leading-snug">Identifies fine lines, pore congestion, and surface irregularities.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-myskin-slate/40">AI-Powered Scoring</h4>
              <p className="text-base md:text-lg font-bold text-myskin-slate/80 leading-snug">Receive a comprehensive skin health score based on clinical dermatological standards.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Scan Demo */}
        <div className="md:w-1/2 relative bg-myskin-bg rounded-3xl overflow-hidden p-8 shadow-2xl shadow-black/5 aspect-square flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden group">
            {/* Base Image */}
            <img 
              src="/skin-scan.png" 
              alt="Skin Analysis"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
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
