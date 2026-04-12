"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const MobileAppSection = () => {
  return (
    <section className="min-h-[90vh] py-32 bg-myskin-slate text-white rounded-[80px] mx-8 mb-12 overflow-hidden relative flex items-center">
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:60px_60px] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24 w-full">
        <div className="md:w-1/2 space-y-8 md:space-y-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
              Pristine Mobile Experience
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Your skin speaks, we listen.
            </h2>
            <p className="text-white/60 text-lg md:text-2xl leading-relaxed font-light max-w-xl mx-auto md:mx-0">
              Take the power of MySkin with you wherever you go. Our mobile application is designed for seamless daily interaction, providing real-time skin alerts, routine reminders, and instant scan results. Expert-level skin intelligence, optimized for your life on the move.
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
            <button className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-white text-myskin-slate px-8 md:px-10 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black shadow-2xl hover:scale-105 transition-all active:scale-95">
              <Apple className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black leading-none opacity-50">Download on the</p>
                <p className="text-lg md:text-xl leading-none mt-1">App Store</p>
              </div>
            </button>
            <button className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 md:px-10 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black hover:bg-white/20 transition-all active:scale-95 shadow-xl">
              <Play className="w-6 h-6 md:w-8 md:h-8 fill-current" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black leading-none opacity-50">Get it on</p>
                <p className="text-lg md:text-xl leading-none mt-1">Google Play</p>
              </div>
            </button>
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] italic">
              We&apos;re currently accepting test users. Join the waitlist to get early access.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 relative flex justify-center">
          {/* Phone Model Visualization Placeholder Styling */}
          <div className="relative w-72 h-[600px] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-3xl z-20" />
            <Image 
              src="/myskin-mod.png" 
              alt="MySkin App Interface"
              fill
              className="object-cover"
              quality={90}
              unoptimized
              priority
            />
          </div>
          {/* Aura background for phone */}
          <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
