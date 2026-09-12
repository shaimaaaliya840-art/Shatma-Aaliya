/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PortfolioData, Project } from './types';
import { initialPortfolioData, initialProjects, initialTestimonials } from './data/portfolioData';
import { CustomCursor } from './components/CustomCursor';
import { OrbitalBackground } from './components/OrbitalBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SchemeShowcase } from './components/SchemeShowcase';
import { FeaturedWorkStrip } from './components/FeaturedWorkStrip';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectModal } from './components/ProjectModal';
import { PullQuoteAndTestimonials } from './components/PullQuoteAndTestimonials';
import { AboutAndExperience } from './components/AboutAndExperience';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { QuickCustomizerModal } from './components/QuickCustomizerModal';
import { FloatingContactDock } from './components/FloatingContactDock';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('shatma_portfolio_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Guarantee user's contact specifics are present and updated
        return {
          ...initialPortfolioData,
          ...parsed,
          contactEmail: parsed.contactEmail || initialPortfolioData.contactEmail,
          whatsappNumber: parsed.whatsappNumber || initialPortfolioData.whatsappNumber,
          callingNumber: parsed.callingNumber || initialPortfolioData.callingNumber,
          socials: {
            ...initialPortfolioData.socials,
            ...(parsed.socials || {})
          }
        };
      }
    } catch (e) {
      console.error('Failed to load portfolio cache', e);
    }
    return initialPortfolioData;
  });

  const [projects] = useState<Project[]>(initialProjects);
  const [testimonials] = useState(initialTestimonials);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleSaveCustomizer = (newData: PortfolioData) => {
    setPortfolioData(newData);
    try {
      localStorage.setItem('shatma_portfolio_data', JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save portfolio cache', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#140D16] text-[#FEF9EF] font-sans selection:bg-[#58111A] selection:text-[#FEF9EF] relative">
      {/* SchemeEngine-inspired Full-Viewport Animated Orbital Background */}
      <OrbitalBackground />

      {/* Custom Wine Red / Deep Maroon Interactive Cursor */}
      <CustomCursor />

      {/* Editorial Navigation */}
      <Navbar
        portfolioData={portfolioData}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Main Structural Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section (Slot roll & letter physics strictly preserved, Deep Maroon badge) */}
        <Hero
          portfolioData={portfolioData}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* 2. Scheme Engine Interactive Spotlight Showcase */}
        <SchemeShowcase
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* 3. Featured-Work Strip */}
        <FeaturedWorkStrip
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. Project Grid */}
        <ProjectGrid
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. Testimonials & The Core Pull-Quote */}
        <PullQuoteAndTestimonials
          testimonials={testimonials}
          pullQuote={portfolioData.pullQuote}
        />

        {/* 5. About / Experience / Personal (with Neelgar Work Experience Slotted In) */}
        <AboutAndExperience
          portfolioData={portfolioData}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      </main>

      {/* 6. Editorial Footer */}
      <div className="relative z-10 pb-12">
        <Footer
          portfolioData={portfolioData}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      </div>

      {/* 7. Persistent Floating Contact Dock (scrolls all over portfolio, present on all screens) */}
      <FloatingContactDock
        portfolioData={portfolioData}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Modals and Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        portfolioData={portfolioData}
      />

      <QuickCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        portfolioData={portfolioData}
        onSave={handleSaveCustomizer}
      />
    </div>
  );
}
