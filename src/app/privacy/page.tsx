"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { privacyHtml } from '@/lib/privacy-data';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-myskin-bg pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header/Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-4"
        >
          <Link 
            href="/"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-myskin-slate hover:bg-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-[10px] font-black uppercase tracking-[0.3em] text-myskin-slate/40">Legal</h1>
            <h2 className="text-2xl font-black text-myskin-slate tracking-tighter">Privacy Policy</h2>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-[40px] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Shield className="w-64 h-64 text-myskin-slate" />
          </div>

          <div 
            className={`prose prose-slate max-w-none 
              prose-headings:text-myskin-slate prose-headings:font-black prose-headings:tracking-tighter
              prose-p:text-myskin-slate/70 prose-p:leading-relaxed
              prose-strong:text-myskin-slate prose-strong:font-bold
              prose-a:text-myskin-slate prose-a:underline prose-a:underline-offset-4 prose-a:decoration-myskin-slate/20 hover:prose-a:decoration-myskin-slate
              prose-ul:text-myskin-slate/70
              privacy-content-custom`}
            dangerouslySetInnerHTML={{ __html: privacyHtml }}
          />
        </motion.div>
      </div>

      <Footer />

      <style jsx global>{`
        .privacy-content-custom h1 { font-size: 2.5rem; margin-bottom: 2rem; }
        .privacy-content-custom h2 { font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1rem; }
        .privacy-content-custom h3 { font-size: 1.2rem; margin-top: 2rem; margin-bottom: 0.5rem; }
        .privacy-content-custom ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .privacy-content-custom li { margin-bottom: 0.5rem; }
        .privacy-content-custom table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 0.8rem; }
        .privacy-content-custom th, .privacy-content-custom td { border: 1px solid rgba(53, 75, 89, 0.1); padding: 1rem; text-align: left; }
        .privacy-content-custom th { background: rgba(53, 75, 89, 0.05); }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;
