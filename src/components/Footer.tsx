const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18c0 1.32-.43 2.61-1.23 3.65-1.16 1.51-2.97 2.38-4.81 2.34-1.84.04-3.65-.83-4.81-2.34-1.23-1.6-1.55-3.8-.81-5.63.74-1.83 2.58-3.08 4.54-3.08.38 0 .77.04 1.14.13V15.11c-.37-.09-.75-.13-1.14-.13-1.4 0-2.61.9-3.07 2.15-.46 1.25-.23 2.68.57 3.7.79 1.02 2.05 1.54 3.32 1.51 1.27.03 2.53-.49 3.32-1.51.54-.7.83-1.56.83-2.43V4.31c-1.44.87-2.89 1.3-4.33 1.47v-4.03l.44.25c.31-.2.53-.52.6-.88.07-.36.01-.73-.17-1.05-.18-.32-.48-.54-.84-.61-.36-.07-.73-.01-1.05.17-.32.18-.54.48-.61.84-.07.36-.01.73.17 1.05.18.32.48.54.84.61s.73.01 1.05-.17l-.14-.25z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
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
          <div className="text-xl md:text-2xl font-bold tracking-tight text-myskin-slate">
            MySkin<span className="font-light">AI</span>
          </div>
          <p className="text-myskin-slate/50 text-sm max-w-xs leading-relaxed">
            Expert-level skin intelligence, optimized for your life on the move.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { icon: <InstagramIcon />, label: 'Instagram' },
              { icon: <TikTokIcon />, label: 'TikTok' },
              { icon: <LinkedinIcon />, label: 'LinkedIn' },
              { icon: <YoutubeIcon />, label: 'YouTube' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-full border border-myskin-slate/10 flex items-center justify-center text-myskin-slate hover:bg-myskin-slate hover:text-white transition-all shadow-sm"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-[10px] font-black text-myskin-slate/30 uppercase tracking-[0.2em] mt-4">
            Follow @MySkinApp for science-backed tips.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-myskin-slate">{title}</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-medium text-myskin-slate/50 hover:text-myskin-slate transition-colors">
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
            <p>© 2026 MySkin Technologies Inc.</p>
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
