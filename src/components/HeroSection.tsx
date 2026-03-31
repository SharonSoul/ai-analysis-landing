"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, Calendar } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sphereX = useSpring(mousePosition.x * 20 - 10, { stiffness: 50, damping: 20 });
  const sphereY = useSpring(mousePosition.y * 20 - 10, { stiffness: 50, damping: 20 });

  return (
    <section ref={containerRef} className="relative h-screen w-screen overflow-hidden flex items-center bg-white">
      {/* Immersive Video Background - Full Width/Height */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* No color overlay, just pure video immersion */}
      </div>

      {/* Floating Purity Elements - Subtly added for 'Pristine' feel */}
      <motion.div 
        style={{ x: sphereX, y: sphereY }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl z-10 hidden md:block" 
      />
      <motion.div 
        style={{ x: useTransform(sphereX, (v) => (typeof v === 'number' ? -v * 1.5 : 0)), y: useTransform(sphereY, (v) => (typeof v === 'number' ? -v * 1.5 : 0)) }}
        className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl z-10 hidden md:block" 
      />

      {/* Content Layer - Maximized edge padding to clear center model */}
      <div className="relative z-20 w-full px-12 md:px-24 lg:px-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-32">
          
          {/* Left Side: Editorial Heading & CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 w-fit shadow-lg shadow-black/5 mx-auto md:mx-0"
              >
                <p className="text-[10px] font-black text-myskin-slate tracking-[0.2em] uppercase">
                  Pristine AI Analysis
                </p>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-myskin-slate leading-[1.2] tracking-tighter"
              >
                Unlock <br />
                <span className="font-light italic text-myskin-slate/50">your skin's</span> <br />
                potential
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-base text-myskin-slate/70 leading-relaxed font-medium max-w-xs mx-auto md:mx-0"
              >
                Clinical-grade scanning technology to reveal what's beneath the surface.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              >
                <button className="px-12 py-5 bg-myskin-slate text-white rounded-[20px] font-bold shadow-2xl shadow-myskin-slate/30 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center gap-4 text-lg">
                  Analyze Skin 
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Sophisticated Stats */}
          <div className="flex flex-col gap-10 md:gap-14">
            {[
              { icon: <ShieldCheck />, val: "95%", lab: "accurate skin analysis" },
              { icon: <Zap />, val: "30+", lab: "skin concerns analyzed" },
              { icon: <Calendar />, val: "7-day", lab: "personalized routine" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 1.3 + idx * 0.4, // Slower sequence starting after left side
                  duration: 1.8, // Slower slide in
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-myskin-slate shadow-2xl">
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-black text-myskin-slate leading-none tracking-tighter">{stat.val}</span>
                  <p className="text-[10px] font-bold text-myskin-slate/40 uppercase tracking-widest mt-2">{stat.lab}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Very Soft Gradient Fade at bottom to transition to Next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
