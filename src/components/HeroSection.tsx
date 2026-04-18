"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Zap, Calendar } from 'lucide-react';

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

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  const sphereX = useSpring(mousePosition.x * 20 - 10, { stiffness: 50, damping: 20 });
  const sphereY = useSpring(mousePosition.y * 20 - 10, { stiffness: 50, damping: 20 });

  return (
    <section ref={containerRef} className="relative h-screen w-screen overflow-hidden flex items-center bg-white">
      {/* Immersive Video Background - Full Width/Height */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <video 
          ref={videoRef}
          muted 
          loop 
          playsInline
          preload="auto"
          controlsList="nodownload"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Darker overlay on mobile for text readability, subtle on desktop */}
        <div className="absolute inset-0 bg-myskin-slate/40 md:bg-white/5 z-10" />
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

      {/* Content Layer - Centered with high contrast on mobile */}
      <div className="relative z-20 w-full px-6 md:px-24 lg:px-40 pt-20 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32">
          
          {/* Left Side: Editorial Heading & CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <div className="space-y-8 md:space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 w-fit shadow-lg shadow-black/5 mx-auto md:mx-0"
              >
                <p className="text-[10px] font-black text-white md:text-myskin-slate tracking-[0.2em] uppercase">
                  Pristine AI Analysis
                </p>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white md:text-myskin-slate leading-[1.1] tracking-tighter"
              >
                Unlock <br />
                <span className="font-light italic text-white/60 md:text-myskin-slate/50 leading-none">your skin's</span> <br />
                potential
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg text-white/80 md:text-myskin-slate/70 leading-relaxed font-medium max-w-xs mx-auto md:mx-0"
              >
                Clinical-grade scanning technology to reveal what's beneath the surface.
              </motion.p>
            </div>
          </div>

          {/* Right Side: Sophisticated Stats */}
          <div className="flex flex-col gap-6 md:gap-14 w-full md:w-auto pb-12 md:pb-0">
            {[
              { icon: <ShieldCheck />, val: "95%", lab: "accurate skin analysis" },
              { icon: <Zap />, val: "30+", lab: "skin concerns analyzed" },
              { icon: <Calendar />, val: "7-day", lab: "personalized routine" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-4 md:gap-6 justify-center md:justify-start"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 1.3 + idx * 0.4,
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl glass flex items-center justify-center text-white md:text-myskin-slate shadow-xl md:shadow-2xl flex-shrink-0">
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { className: "w-5 h-5 md:w-6 md:h-6" })}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-3xl md:text-5xl font-black text-white md:text-myskin-slate leading-none tracking-tighter">{stat.val}</span>
                  <p className="text-[9px] md:text-[10px] font-bold text-white/50 md:text-myskin-slate/40 uppercase tracking-widest mt-1 md:mt-2">{stat.lab}</p>
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
