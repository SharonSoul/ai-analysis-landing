"use client";


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist') // Change this to your existing table name if different
        .insert([{ email }]); // Change 'email' to your column name if different

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      setEmail('');
    } catch (err: any) {
      console.error('Waitlist submission error:', err);
      if (err.code === '23505' || err.message?.includes('duplicate key') || err.message?.includes('unique constraint')) {
        setError('You are already on the waitlist! Thank you for your support.');
      } else {
        setError(err.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="waitlist" className="min-h-[90vh] py-24 md:py-32 bg-white relative overflow-hidden flex items-center">
      {/* Atmospheric Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-myskin-bg/30 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="glass rounded-[40px] md:rounded-[80px] p-8 md:p-24 relative shadow-2xl shadow-black/5 overflow-hidden border border-white/60">
          <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-5 py-2 rounded-full bg-myskin-bg border border-myskin-slate/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-myskin-slate/40"
            >
              Early Access
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-7xl font-extrabold text-myskin-slate leading-[1.1] tracking-tight">
                Your skin. Your data. <br className="hidden md:block" />Real results.
              </h2>
              <p className="text-myskin-slate/50 text-base md:text-2xl leading-relaxed font-medium">
                Your skin has been waiting for this. Join the waitlist to request early access.
              </p>
            </div>

            {!submitted ? (
              <div className="max-w-lg mx-auto w-full space-y-4">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                    className="flex-1 px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-myskin-bg border border-myskin-slate/10 text-myskin-slate placeholder:text-myskin-slate/30 focus:outline-none focus:ring-2 focus:ring-myskin-slate/20 transition-all text-base md:text-lg disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 md:px-10 py-4 md:py-5 rounded-2xl bg-myskin-slate text-white font-bold shadow-xl shadow-myskin-slate/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-base md:text-lg disabled:opacity-70 disabled:hover:scale-100 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        Processing...
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Join the Waitlist
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
                
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-red-500 text-sm font-medium"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-myskin-slate">You're on the list!</h3>
                <p className="text-myskin-slate/50">Follow us for updates while you wait.</p>
              </motion.div>
            )}

            <p className="text-myskin-slate/30 text-xs font-medium uppercase tracking-widest pt-8">
              We respect your privacy. No spam, just skin science.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-myskin-bg/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-myskin-slate/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
