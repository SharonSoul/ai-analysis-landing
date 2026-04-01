"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, RefreshCcw, FileSearch } from 'lucide-react';

const AIAdvisor = () => {
  const features = [
    {
      title: "Ingredient Conflict Scanner",
      description: "Instantly find what's cancelling each other out or causing irritation.",
      icon: <ScanSearch className="w-6 h-6" />,
    },
    {
      title: "Custom Product Swaps",
      description: "Get recommendations for high-performance drugstore alternatives that actually work.",
      icon: <RefreshCcw className="w-6 h-6" />,
    },
    {
      title: "Full Skin Audit",
      description: "A root-cause analysis of your primary skin concerns with a personalized roadmap to recovery.",
      icon: <FileSearch className="w-6 h-6" />,
    }
  ];

  return (
    <section className="min-h-[90vh] py-32 bg-white relative overflow-hidden flex items-center">
      {/* Tech Grid Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#354B59_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-20">
          <div className="md:w-1/2 space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-2 rounded-full bg-myskin-bg border border-myskin-slate/10 text-[10px] font-black uppercase tracking-[0.2em] text-myskin-slate/40"
              >
                The AI Clinical Advisor
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl font-extrabold text-myskin-slate tracking-tight leading-[1.1]"
              >
                A Dermatologist-Level Audit, Right in Your Pocket.
              </motion.h2>
              <p className="text-xl text-myskin-slate/60 leading-relaxed max-w-lg font-medium">
                Are your products working against each other? Our AI Advisor performs a 360-degree audit of your current routine. From identifying Ingredient Conflicts (like mixing Retinol with Vitamin C) to drafting a 2-Week Barrier Repair Protocol, MySkin gives you actionable, science-backed advice without the wait times of a clinic.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative bg-[#F8F9FA] border border-myskin-slate/5 p-10 rounded-[40px] transition-all duration-700 hover:bg-white hover:border-myskin-slate/10 hover:shadow-2xl flex flex-col items-start gap-8"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white flex items-center justify-center text-myskin-slate group-hover:bg-myskin-slate group-hover:text-white transition-all duration-500 shadow-inner">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-myskin-slate tracking-tight uppercase tracking-widest">{feature.title}</h3>
                  <p className="text-myskin-slate/60 text-base leading-relaxed font-medium">{feature.description}</p>
                </div>
                {/* Visual Accent */}
                <div className="absolute top-8 right-8 w-1 h-12 bg-myskin-slate/10 rounded-full group-hover:scale-y-150 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
