import React from 'react';
import HeroSection from '@/components/HeroSection';
import AIDemoSection from '@/components/AIDemoSection';
import SkinJournal from '@/components/SkinJournal';
import AIAdvisor from '@/components/AIAdvisor';
import ResultsReveal from '@/components/ResultsReveal';
import MobileAppSection from '@/components/MobileAppSection';
import WaitlistSection from '@/components/WaitlistSection';
import { Footer } from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* AI Demo Section - Section 1 */}
      <ScrollReveal>
        <AIDemoSection />
      </ScrollReveal>

      {/* Skin Journal - Section 2 */}
      <ScrollReveal>
        <SkinJournal />
      </ScrollReveal>

      {/* AI Advisor - Section 3 */}
      <ScrollReveal>
        <AIAdvisor />
      </ScrollReveal>

      {/* Results Reveal - Section 5 */}
      <ScrollReveal>
        <ResultsReveal />
      </ScrollReveal>

      {/* Mobile App Section - Section 4 */}
      <ScrollReveal>
        <MobileAppSection />
      </ScrollReveal>

      {/* Waitlist Section - Section 6 */}
      <ScrollReveal>
        <WaitlistSection />
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </div>
  );
}
