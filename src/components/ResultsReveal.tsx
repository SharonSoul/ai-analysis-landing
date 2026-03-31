"use client";

import React from 'react';
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

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        <div className="w-full max-w-4xl glass rounded-[40px] p-12 relative shadow-2xl shadow-black/5 overflow-hidden">
          {/* Clinical Header */}
          <div className="flex items-center justify-between border-b border-myskin-slate/10 pb-10 mb-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-myskin-slate flex items-center justify-center text-white">
                <Clipboard className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h2 className="text-3xl font-bold text-myskin-slate">Personalized Skin Report</h2>
                <p className="text-sm font-medium text-myskin-slate/40 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> 
                  Analysis ID: MS-77492-X
                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1">
              <div className="px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest">Verified Result</div>
              <p className="text-[10px] text-myskin-slate/30 font-bold uppercase">Issued on: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Sequential Data List */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {reportData.map((data) => (
              <motion.div 
                key={data.label}
                variants={item}
                className="flex items-center justify-between p-6 rounded-2xl border border-myskin-slate/5 hover:border-myskin-slate/15 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-myskin-slate opacity-20 group-hover:opacity-100 transition-opacity" />
                  <span className="text-lg font-medium text-myskin-slate/60">{data.label}</span>
                </div>
                <div className="flex items-center gap-12">
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-bold text-myskin-slate">{data.value}</span>
                    <span className="text-[10px] font-bold text-green-500/80">{data.trend}</span>
                  </div>
                  <div className="w-24 text-right">
                    <span className="text-sm font-bold text-myskin-slate/40 group-hover:text-myskin-slate transition-colors">{data.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Clinical Seals */}
          <div className="mt-16 flex items-center justify-center gap-10 opacity-20 hover:opacity-40 transition-opacity duration-700">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest italic">FDA Grade AI</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest italic">Clinically Tested</span>
            </div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-myskin-slate/5 translate-x-12 -translate-y-12 rotate-45 pointer-events-none" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center space-y-6"
        >
          <p className="text-myskin-slate/60 max-w-lg leading-relaxed">
            Download your comprehensive 18-page dermatological breakdown and start your 7-day science-first transformation today.
          </p>
          <button className="px-12 py-5 rounded-2xl bg-myskin-slate text-white font-bold shadow-2xl shadow-myskin-slate/30 border border-white/10 hover:scale-105 active:scale-95 transition-all text-lg">
            View My Full Report
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsReveal;
