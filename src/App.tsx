import { useState, useEffect } from 'react';
import { UtilityBar } from './components/layout/UtilityBar';
import { HeaderApple } from './components/layout/HeaderApple';
import { HeroSection } from './components/hero/HeroSection';
import { ClinicalAssurance } from './components/sections/ClinicalAssurance';
import { HelpDiscovery } from './components/sections/HelpDiscovery';
import { DoctorsSection } from './components/sections/DoctorsSection';
import { ClinicalCaseStudies } from './components/sections/ClinicalCaseStudies';
import { ReviewGlider } from './components/sections/ReviewGlider';
import { FaqSection } from './components/sections/FaqSection';
import { LocationContact } from './components/sections/LocationContact';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { AppointmentModal } from './components/modal/AppointmentModal';

/* Master KB Sub-Views */
import { ConditionsView } from './views/ConditionsView';
import { TreatmentsView } from './views/TreatmentsView';
import { AharaView } from './views/AharaView';
import { YogaView } from './views/YogaView';
import { PharmacyView } from './views/PharmacyView';
import { JournalView } from './views/JournalView';
import { AboutView } from './views/AboutView';
import { PatientJourneyView } from './views/PatientJourneyView';

export function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedSearchQuery, setSelectedSearchQuery] = useState<string>('');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false);
  const [prefilledCondition, setPrefilledCondition] = useState<string>('');
  const [prefilledDoctor, setPrefilledDoctor] = useState<string>('');

  const handleOpenAppointment = (condition = '', doctor = '') => {
    setPrefilledCondition(condition);
    setPrefilledDoctor(doctor);
    setIsAppointmentOpen(true);
  };

  const handleNavigate = (view: string, subCategory = 'all', searchQuery = '', targetId = '') => {
    setCurrentView(view);
    setSelectedSubCategory(subCategory);
    setSelectedSearchQuery(searchQuery);

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 90;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync with URL hash if loaded directly (e.g. #yoga, #journey)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'conditions', 'treatments', 'ahara', 'yoga', 'pharmacy', 'journal', 'about', 'journey'].includes(hash)) {
      setCurrentView(hash);
    }
  }, []);

  return (
    <div className="min-h-screen bg-neithal-cream-50 text-neithal-text font-sans antialiased">
      {/* 1. Top Utility Bar with Real-Time Operating Status & Language Toggle */}
      <UtilityBar />

      {/* 2. Navigation Header */}
      <HeaderApple
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenAppointment={(cond) => handleOpenAppointment(cond)}
      />

      {/* Main Content Area */}
      <main>
        {currentView === 'home' && (
          <>
            {/* Core Homepage (Master Knowledge Base Architecture) */}
            <HeroSection
              onOpenAppointment={() => handleOpenAppointment()}
              onNavigate={handleNavigate}
            />
            
            {/* Clinical Quality & Safety Assurances Bar */}
            <ClinicalAssurance />

            <HelpDiscovery onNavigate={handleNavigate} />
            <DoctorsSection onOpenAppointment={(cond, doc) => handleOpenAppointment(cond, doc)} />
            <ClinicalCaseStudies onOpenAppointment={() => handleOpenAppointment()} />
            <ReviewGlider />
            <FaqSection />
            <LocationContact />
            <FinalCTA onOpenAppointment={() => handleOpenAppointment()} />
          </>
        )}

        {currentView === 'conditions' && (
          <ConditionsView
            onOpenAppointment={(cond) => handleOpenAppointment(cond)}
            initialCategory={selectedSubCategory}
            initialQuery={selectedSearchQuery}
          />
        )}

        {currentView === 'treatments' && (
          <TreatmentsView onOpenAppointment={() => handleOpenAppointment()} />
        )}

        {currentView === 'ahara' && <AharaView />}

        {currentView === 'yoga' && (
          <YogaView onOpenAppointment={() => handleOpenAppointment()} />
        )}

        {currentView === 'pharmacy' && <PharmacyView />}

        {currentView === 'journal' && <JournalView />}

        {currentView === 'about' && (
          <AboutView onOpenAppointment={(cond, doc) => handleOpenAppointment(cond, doc)} />
        )}

        {currentView === 'journey' && (
          <PatientJourneyView onOpenAppointment={() => handleOpenAppointment()} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenAppointment={() => handleOpenAppointment()} />

      {/* Mobile Bottom Bar */}
      <MobileBottomBar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        prefilledCondition={prefilledCondition}
        prefilledDoctor={prefilledDoctor}
      />
    </div>
  );
}

export default App;
