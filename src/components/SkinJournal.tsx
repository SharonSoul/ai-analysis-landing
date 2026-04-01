"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CloudSun, Pill, ClipboardList } from 'lucide-react';

const SkinJournal = () => {
  const features = [
    {
      title: "Dynamic UV & Weather Integration",
      description: "Automatically logs your local UV index and humidity to adjust your daily advice.",
      icon: <CloudSun className="w-6 h-6" />,
    },
    {
      title: "Supplement & Nutrition Sync",
      description: "Track how your internal health reflects on your external glow.",
      icon: <Pill className="w-6 h-6" />,
    },
    {
      title: "Multi-Step Routine Tracking",
      description: "Easily log your AM and PM products to see which combinations truly work.",
      icon: <ClipboardList className="w-6 h-6" />,
    }
  ];

  return (
    <section className="min-h-[90vh] py-32 bg-[#F8F9FA] relative overflow-hidden flex items-center">
      {/* Immersive Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-myskin-slate/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="md:w-1/2 space-y-8 md:space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-2 rounded-full bg-white border border-myskin-slate/5 text-[10px] font-black uppercase tracking-[0.2em] text-myskin-slate/40"
              >
                The Intelligent Skin Journal
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-extrabold text-myskin-slate tracking-tight leading-[1.1]"
              >
                Your Skin Doesn&apos;t Live in a Vacuum. <br />Track What Matters.
              </motion.h2>
              <p className="text-lg md:text-xl text-myskin-slate/60 leading-relaxed max-w-lg font-medium">
                Your skin responds to everything: the weather, the UV index, what you eat, and the supplements you take. The MySkin Daily Log connects these dots for you. It&apos;s more than just a diary; it&apos;s a data-driven companion that tracks your morning and night routines alongside local environmental factors to reveal the why behind your skin&apos;s behavior.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 grid gap-6 md:gap-8 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group relative bg-white border border-myskin-slate/5 p-6 md:p-10 rounded-[28px] md:rounded-[32px] transition-all duration-700 hover:border-myskin-slate/20 hover:shadow-[0_20px_50px_rgba(53,75,89,0.08)] flex flex-col sm:flex-row items-start gap-6 md:gap-8"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-myskin-bg flex items-center justify-center text-myskin-slate group-hover:bg-myskin-slate group-hover:text-white transition-all duration-500 shadow-sm">
                  {React.isValidElement(feature.icon) ? React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-6 h-6 md:w-7 md:h-7" }) : feature.icon}
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-myskin-slate tracking-tight">{feature.title}</h3>
                  <p className="text-myskin-slate/60 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinJournal;
