import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechnologySection } from './components/TechnologySection';
import { ProjectsSection } from './components/ProjectsSection';
import { MobilePhotographySection } from './components/MobilePhotographySection';
import { MovieEnthusiastSection } from './components/MovieEnthusiastSection';
import { CareerFoundationSection } from './components/CareerFoundationSection';
import { ContactFooter } from './components/ContactFooter';
import { CvModal } from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#102440]">
      <Navbar />
      <main>
        <HeroSection onOpenCv={() => setCvModalOpen(true)} />
        <AboutSection />
        <TechnologySection />
        <ProjectsSection />
        <MobilePhotographySection />
        <MovieEnthusiastSection />
        <CareerFoundationSection onOpenCv={() => setCvModalOpen(true)} />
      </main>
      <ContactFooter onOpenCv={() => setCvModalOpen(true)} />
      <CvModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
