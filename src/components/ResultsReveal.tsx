"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clipboard, ShieldAlert, Award } from 'lucide-react';

const reportData = [
  { label: "Surface Texture", value: "89/100", status: "Optimal", trend: "+4%" },
  { label: "Sebum Balance", value: "Normal", status: "Regulated", trend: "Stable" },
  { label: "Pore Density", value: "1.2mm²", status: "Excellent", trend: "-12%" },
  { label: "Elasticity", value: "High", status: "Clinical", trend: "+2%" }
];

const ResultsReveal = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-[90vh] py-32 bg-white relative flex items-center">
      {/* Immersive Depth Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-myskin-bg)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center w-full relative z-10">
        <div className="w-full max-w-5xl glass rounded-[40px] md:rounded-[60px] p-6 md:p-16 relative shadow-2xl shadow-black/[0.03] overflow-hidden border border-white/40">
          {/* Clinical Header */}
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-myskin-slate/5 pb-8 md:pb-12 mb-8 md:mb-12 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-myskin-slate flex items-center justify-center text-white shadow-xl">
                <Clipboard className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-4xl font-black text-myskin-slate tracking-tight">Personalized Skin Report</h2>
                <p className="text-[10px] font-black text-myskin-slate/30 flex items-center justify-center md:justify-start gap-2 uppercase tracking-widest">
                  <Activity className="w-3 h-3 md:w-4 md:h-4" />
                  Analysis ID: MS-77492-X
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border border-green-100/50">Verified Result</div>
              <p className="text-[9px] md:text-[10px] text-myskin-slate/30 font-bold uppercase tracking-widest mt-1">Issued on: {mounted ? new Date().toLocaleDateString() : "..."}</p>
            </div>
          </div>

          {/* Sequential Data List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {reportData.map((data) => (
              <motion.div
                key={data.label}
                variants={item}
                className="flex items-center justify-between p-8 rounded-3xl bg-myskin-bg/30 border border-white/20 hover:border-myskin-slate/15 transition-all group hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-myskin-slate opacity-20 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xl font-bold text-myskin-slate/60">{data.label}</span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-myskin-slate">{data.value}</span>
                    <span className="text-xs font-black text-green-500/80 uppercase tracking-widest">{data.trend}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Clinical Seals */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-12 opacity-30">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">MEDICAL Grade AI</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Clinically Tested</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 md:mt-20 text-center space-y-8 md:space-y-12 w-full max-w-5xl"
        >
          <div className="space-y-4 md:space-y-6 px-4">
            <h2 className="text-xl md:text-5xl font-extrabold text-myskin-slate tracking-tight leading-tight">
              Watch Your Progress Evolve with Aggregated Intelligence.
            </h2>
            <p className="text-base md:text-xl text-myskin-slate/60 max-w-2xl mx-auto leading-relaxed font-medium">
              Beauty isn&apos;t an overnight fix; it&apos;s a journey. MySkin breaks down your skin data and daily entries into insightful health and growth trends. See your skin health score climb as you refine your routines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 pt-8">
            {[
              { label: "Aggregated Scoring Trends", desc: "Visual progress charts showing improvement over weeks." },
              { label: "Personalized Insights", desc: "Alerts for skin stress before a breakout occurs." },
              { label: "Community Validation", desc: "Connect with people who share your skin type and share notes." }
            ].map((feature, idx) => (
              <div key={idx} className="space-y-4 p-6 md:p-8 rounded-[28px] md:rounded-[32px] bg-[#F8F9FA]/50 border border-myskin-slate/5 text-left md:text-center">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-myskin-slate/40">{feature.label}</h4>
                <p className="text-base font-bold text-myskin-slate/70 leading-snug">{feature.desc}</p>
              </div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default ResultsReveal;
