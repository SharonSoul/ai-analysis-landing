"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Beaker, Brain, Database, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: "Multispectral Imaging",
    description: "Analyze individual skin layers beyond the visible spectrum to detect deep pigmentation and vascular conditions.",
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: "Clinical Biometrics",
    description: "Measure sebum levels, hydration percentages, and pore density with sub-millimeter precision.",
    icon: <Beaker className="w-6 h-6" />,
  },
  {
    title: "Neural Engine X",
    description: "Powered by a proprietary neural network trained on over 2 million clinical dermatological scans.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Adaptive Routine",
    description: "Your personalized routine evolves in real-time as your skin responds to treatments and environmental factors.",
    icon: <Database className="w-6 h-6" />,
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-widest text-myskin-slate/40"
          >
            Science-First Methodology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-myskin-slate"
          >
            Clinical Innovation in Every Pixel
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-myskin-slate/5 p-8 rounded-3xl transition-all duration-500 hover:border-myskin-slate/20 hover:shadow-2xl"
            >
              {/* Aura Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none">
                <div className="absolute inset-0 bg-myskin-slate/5 blur-3xl" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-myskin-bg flex items-center justify-center text-myskin-slate group-hover:bg-myskin-slate group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-myskin-slate group-hover:translate-x-1 transition-transform">{feature.title}</h3>
                  <p className="text-myskin-slate/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex items-center gap-2 text-myskin-slate/40 group-hover:text-myskin-slate transition-colors pt-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest italic">Validated</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
