"use client";

import React from 'react';
import Image from 'next/image';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'AI Analysis', 'Skin Advisor', 'Scientific Basis'],
    Resources: ['Skin Education', 'Community Stories', 'FAQ', 'Support'],
    Company: ['About Us', 'Careers', 'Contact', 'Press Kit'],
  };

  return (
    <footer className="pt-24 pb-12 px-6 md:px-8 max-w-7xl mx-auto border-t border-myskin-slate/10 space-y-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        <div className="col-span-2 space-y-6 md:space-y-8">
          <div>
            <Image src="/myskinLogo.png" alt="MySkin" width={120} height={40} className="h-8 md:h-10 w-auto" priority />
          </div>
          <p className="text-myskin-slate/50 text-sm max-w-xs leading-relaxed">
            Expert-level skin intelligence, optimized for your life on the move.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/myskin.social' },
              { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/myskinsocial/' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-myskin-slate/10 flex items-center justify-center text-myskin-slate hover:bg-myskin-slate hover:text-white transition-all shadow-sm"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-[10px] font-black text-myskin-slate/30 uppercase tracking-[0.2em] mt-4">
            Follow @MYSKIN.SOCIAL for science-backed tips.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-myskin-slate">{title}</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a 
                    href={link === 'Contact' ? 'mailto:toluwani@myskin.social' : '#'} 
                    className="text-sm font-medium text-myskin-slate/50 hover:text-myskin-slate transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-12 border-t border-myskin-slate/5 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-myskin-slate/40 text-[10px] font-bold space-y-3 uppercase tracking-widest leading-loose">
            <p>© 2026 MySkin Social Inc.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="hover:text-myskin-slate transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-myskin-slate transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-myskin-slate transition-colors">Cookie Settings</a>
            </div>
          </div>
          <p className="max-w-md text-[10px] font-medium italic text-myskin-slate/30 text-left md:text-right leading-relaxed">
            Disclaimer: MySkin is an AI-powered advisory tool and does not replace professional medical diagnosis. Consult a dermatologist for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
