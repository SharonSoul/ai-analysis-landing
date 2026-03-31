import React from 'react';
import HeroSection from '@/components/HeroSection';
import AIDemoSection from '@/components/AIDemoSection';
import FeatureGrid from '@/components/FeatureGrid';
import ResultsReveal from '@/components/ResultsReveal';
import { DownloadSection, Footer } from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* AI Demo Section */}
      <ScrollReveal>
        <AIDemoSection />
      </ScrollReveal>

      {/* Feature Grid */}
      <ScrollReveal>
        <FeatureGrid />
      </ScrollReveal>

      {/* Results Reveal */}
      <ScrollReveal>
        <ResultsReveal />
      </ScrollReveal>

      {/* Download Section */}
      <ScrollReveal>
        <DownloadSection />
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </div>
  );
}
