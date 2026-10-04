import React, { useState, useEffect, useMemo } from 'react';
import { Logo } from '../ui/Logo';
import { Search, Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { SEARCH_DATABASE, SearchItem } from '../../data/searchDatabase';

interface HeaderAppleProps {
  currentView: string;
  onNavigate: (view: string, subCategory?: string, searchQuery?: string, targetId?: string) => void;
  onOpenAppointment: (condition?: string) => void;
}

export const HeaderApple: React.FC<HeaderAppleProps> = ({
  currentView,
  onNavigate,
  onOpenAppointment,
}) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return SEARCH_DATABASE.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [searchQuery]);

  const handleSelectSearchItem = (item: SearchItem) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    onNavigate(item.view, item.subCategory || 'all', item.searchQuery || '', item.targetId || '');
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (filteredSearchResults.length > 0) {
        handleSelectSearchItem(filteredSearchResults[0]);
      } else if (searchQuery.trim()) {
        setIsSearchOpen(false);
        onNavigate('conditions', 'all', searchQuery.trim());
        setSearchQuery('');
      }
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const megaMenus: Record<string, {
    col1Title: string;
    col1Items: { name: string; action: () => void }[];
    col2Title: string;
    col2Items: { name: string; action: () => void }[];
    col3Title: string;
    col3Items: { name: string; action: () => void }[];
  }> = {
    treatments: {
      col1Title: 'Explore Treatments',
      col1Items: [
        { name: 'Panchakarma 5-Fold Program', action: () => onNavigate('treatments', 'panchakarma') },
        { name: 'Abhyanga Herbal Oil Massage', action: () => onNavigate('treatments', 'abhyanga') },
        { name: 'Shirodhara Forehead Pour', action: () => onNavigate('treatments', 'shirodhara') },
        { name: 'Kizhi Herbal Poultice Therapy', action: () => onNavigate('treatments', 'kizhi') },
        { name: 'Janu & Kati Basti Joint Reservoirs', action: () => onNavigate('treatments', 'basti') },
      ],
      col2Title: 'Care Services',
      col2Items: [
        { name: 'Ayurvedic Pulse Diagnosis (Nadi)', action: () => onOpenAppointment('Pulse Diagnosis (Nadi)') },
        { name: 'In-Person Consultation (Puducherry)', action: () => onOpenAppointment('In-Person Consultation') },
        { name: 'Online Tele-Health Video Consult', action: () => onOpenAppointment('Online Tele-Health') },
        { name: 'Personalized Herbal Prescriptions', action: () => onNavigate('pharmacy') },
      ],
      col3Title: 'Therapeutic Intent',
      col3Items: [
        { name: 'Deep Bio-Detox & Rejuvenation', action: () => onNavigate('treatments', 'panchakarma') },
        { name: 'Spinal, Disc & Sciatica Relief', action: () => onNavigate('conditions', 'musculoskeletal', 'Sciatica') },
        { name: 'Nervous System & Stress Reset', action: () => onNavigate('treatments', 'shirodhara') },
        { name: 'Post-Illness Vitality (Ojas)', action: () => onNavigate('treatments') },
      ],
    },

    conditions: {
      col1Title: 'Explore Areas of Care',
      col1Items: [
        { name: 'Musculoskeletal & Joint Mobility', action: () => onNavigate('conditions', 'musculoskeletal') },
        { name: 'Digestive Fire & Gut Health', action: () => onNavigate('conditions', 'digestive') },
        { name: 'Women’s Hormonal & PCOS Care', action: () => onNavigate('conditions', 'womens-health') },
        { name: 'Neurological & Nerve Comfort', action: () => onNavigate('conditions', 'neurological') },
        { name: 'Metabolic & Glycemic Balance', action: () => onNavigate('conditions', 'metabolic') },
      ],
      col2Title: 'Common Conditions',
      col2Items: [
        { name: 'Arthritis, Sciatica & Neck Strain', action: () => onNavigate('conditions', 'musculoskeletal', 'Arthritis') },
        { name: 'IBS, Acid Reflux & Bloating', action: () => onNavigate('conditions', 'digestive', 'IBS') },
        { name: 'PCOS, Irregular Cycles & Cramps', action: () => onNavigate('conditions', 'womens-health', 'PCOS') },
        { name: 'Migraine, Sinusitis & Neuropathy', action: () => onNavigate('conditions', 'neurological', 'Migraine') },
        { name: 'Diabetes Support & Weight Reset', action: () => onNavigate('conditions', 'metabolic', 'Diabetes') },
      ],
      col3Title: 'Neithal Diagnostics',
      col3Items: [
        { name: 'Prakriti Body Constitution Analysis', action: () => onNavigate('journey') },
        { name: 'Root-Cause Vata/Pitta/Kapha Audit', action: () => onNavigate('journey') },
        { name: 'Individualized Care Pathways', action: () => onNavigate('journey') },
        { name: 'Long-Term Recovery Oversight', action: () => onNavigate('journey') },
      ],
    },

    ahara: {
      col1Title: 'Neithal AHARA',
      col1Items: [
        { name: 'South Indian Heritage Dietetics', action: () => onNavigate('ahara') },
        { name: 'Agni Digestive Fire Balancing', action: () => onNavigate('ahara') },
        { name: 'Food as Everyday Sustenance', action: () => onNavigate('ahara') },
        { name: 'Ritucharya (Seasonal Eating)', action: () => onNavigate('ahara') },
      ],
      col2Title: 'Kitchen Spices & Herbs',
      col2Items: [
        { name: 'Turmeric, Black Pepper & Ginger', action: () => onNavigate('ahara') },
        { name: 'Curry Leaves, Cumin & Asafoetida', action: () => onNavigate('ahara') },
        { name: 'Traditional Kanjis & Rasams', action: () => onNavigate('ahara') },
        { name: 'Fermented Grain Nutrition', action: () => onNavigate('ahara') },
      ],
      col3Title: 'Personalized Guidance',
      col3Items: [
        { name: 'Custom Metabolic Meal Maps', action: () => onOpenAppointment() },
        { name: 'Physician Diet Consultation', action: () => onOpenAppointment() },
        { name: 'Youth & Family AHARA Workshops', action: () => onNavigate('about') },
      ],
    },

    yoga: {
      col1Title: 'Therapeutic Yoga',
      col1Items: [
        { name: 'Spinal & Joint Care Yoga', action: () => onNavigate('yoga') },
        { name: 'Agni Digestive Yoga', action: () => onNavigate('yoga') },
        { name: 'Restorative Stress & Sleep Yoga', action: () => onNavigate('yoga') },
        { name: 'Hormonal & Pelvic Balance Yoga', action: () => onNavigate('yoga') },
      ],
      col2Title: 'Pranayama & Rhythm',
      col2Items: [
        { name: 'Nadi Shodhana Breathwork', action: () => onNavigate('yoga') },
        { name: 'Bhramari Calming Meditation', action: () => onNavigate('yoga') },
        { name: 'Dinacharya Daily Rhythm', action: () => onNavigate('yoga') },
      ],
      col3Title: 'Care Integration',
      col3Items: [
        { name: 'Condition-Linked Yoga Programs', action: () => onNavigate('yoga') },
        { name: 'Request Personal Yoga Plan', action: () => onOpenAppointment() },
      ],
    },

    pharmacy: {
      col1Title: 'Authentic Pharmacy',
      col1Items: [
        { name: 'Classical Liquid Kashayams', action: () => onNavigate('pharmacy') },
        { name: 'Medicated Herbal Thailams', action: () => onNavigate('pharmacy') },
        { name: 'Natural Arishtams & Tonics', action: () => onNavigate('pharmacy') },
        { name: 'Fresh Herbal Churnas & Teas', action: () => onNavigate('pharmacy') },
      ],
      col2Title: 'Quality Assurance',
      col2Items: [
        { name: 'Classical GMP Certified Facilities', action: () => onNavigate('pharmacy') },
        { name: 'Physician Compounded Quality', action: () => onNavigate('pharmacy') },
        { name: 'Fresh Botanical Procurement', action: () => onNavigate('pharmacy') },
      ],
      col3Title: 'Order & Pickup',
      col3Items: [
        { name: 'Inquire via WhatsApp Instant', action: () => window.open('https://wa.me/919488023328', '_blank') },
        { name: 'Heritage Town Clinic Pickup', action: () => onNavigate('pharmacy') },
        { name: 'Direct Pharmacy Counter Call', action: () => window.open('tel:+919488023328') },
      ],
    },

    journal: {
      col1Title: 'The Neithal Journal',
      col1Items: [
        { name: 'Panchakarma Science & Detox', action: () => onNavigate('journal') },
        { name: 'South Indian Kitchen AHARA', action: () => onNavigate('journal') },
        { name: 'Joint Care in Coastal Climates', action: () => onNavigate('journal') },
        { name: 'View All Physician Articles', action: () => onNavigate('journal') },
      ],
      col2Title: 'Featured Topics',
      col2Items: [
        { name: 'Understanding Vata Season Imbalance', action: () => onNavigate('journal') },
        { name: 'How Spices Restore Digestive Agni', action: () => onNavigate('journal') },
        { name: 'Managing PCOS Naturally', action: () => onNavigate('journal') },
      ],
      col3Title: 'Community & Education',
      col3Items: [
        { name: 'Free Health Screening Camps', action: () => onNavigate('about') },
        { name: 'Coastal Yoga & Meditation', action: () => onNavigate('about') },
        { name: 'School Nutrition Drives', action: () => onNavigate('about') },
      ],
    },

    about: {
      col1Title: 'About Neithal',
      col1Items: [
        { name: 'Connected Patient 360 Journey', action: () => onNavigate('journey') },
        { name: 'The 6-Step Consultation Process', action: () => onNavigate('about') },
        { name: 'Heritage Town Clinic Space', action: () => onNavigate('about') },
        { name: 'Community Medical Camps', action: () => onNavigate('about') },
      ],
      col2Title: 'Our Physicians',
      col2Items: [
        { name: 'Dr. Saranya K. (Senior Physician)', action: () => onNavigate('home') },
        { name: 'Dr. Sathiyaraj N. (Panchakarma Spec.)', action: () => onNavigate('home') },
        { name: 'Experienced Therapy Staff', action: () => onNavigate('about') },
      ],
      col3Title: 'Visit & Hours',
      col3Items: [
        { name: '#83 Chetty Street, Heritage Town', action: () => onNavigate('home') },
        { name: 'Open 9:00 AM – 9:00 PM Daily', action: () => onNavigate('home') },
        { name: 'Google Maps Directions', action: () => window.open('https://maps.google.com/?q=83+Chetty+Street+Puducherry', '_blank') },
      ],
    },
  };

  const currentMega = activeCategory ? megaMenus[activeCategory] : null;

  return (
    <>
      {/* Top Apple-Style Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled || activeCategory
            ? 'bg-neithal-green-950 text-neithal-cream-50 shadow-md py-3 sm:py-3.5'
            : 'bg-neithal-cream-50 text-neithal-green-950 border-b border-neithal-border/60 py-3 sm:py-3.5'
        }`}
        onMouseLeave={() => setActiveCategory(null)}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6 w-full">
          
          {/* Logo Lockup (Flex-Shrink-0) */}
          <div onClick={() => onNavigate('home')} className="flex-shrink-0 cursor-pointer">
            <Logo variant={isScrolled || activeCategory ? 'dark' : 'light'} />
          </div>

          {/* OPTION 1: SEGMENTED FLOATING GLASS PILL NAVIGATION TRACK */}
          <nav className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-300 ${
            isScrolled || activeCategory
              ? 'bg-white/10 border-white/20 backdrop-blur-md shadow-inner'
              : 'bg-neithal-green-950/5 border-neithal-gold-500/30 backdrop-blur-md shadow-subtle'
          }`}>
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                currentView === 'home'
                  ? 'bg-neithal-gold-500 text-neithal-green-950 shadow-md scale-102'
                  : isScrolled || activeCategory
                  ? 'text-neithal-cream-100 hover:text-neithal-gold-300 hover:bg-white/10'
                  : 'text-neithal-green-950 hover:text-neithal-gold-600 hover:bg-neithal-green-950/10'
              }`}
            >
              {t.overview}
            </button>

            {[
              { id: 'treatments', label: t.treatments },
              { id: 'conditions', label: t.conditions },
              { id: 'ahara', label: t.ahara },
              { id: 'yoga', label: t.yoga },
              { id: 'pharmacy', label: t.pharmacy },
              { id: 'journal', label: t.journal },
              { id: 'about', label: t.about },
            ].map((cat) => {
              const isActive = activeCategory === cat.id || currentView === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onNavigate(cat.id)}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-neithal-gold-500 text-neithal-green-950 shadow-md scale-102'
                      : isScrolled || activeCategory
                      ? 'text-neithal-cream-100 hover:text-neithal-gold-300 hover:bg-white/10'
                      : 'text-neithal-green-950 hover:text-neithal-gold-600 hover:bg-neithal-green-950/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled || activeCategory
                  ? 'text-neithal-cream-100 hover:text-neithal-gold-400'
                  : 'text-neithal-green-950 hover:text-neithal-gold-500 hover:bg-neithal-cream-100'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenAppointment()}
              className="px-4 py-2 rounded-full bg-neithal-gold-500 text-neithal-green-950 text-xs font-extrabold uppercase tracking-wider hover:bg-neithal-gold-400 transition-all shadow-md flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-neithal-green-950" />
              <span>{t.bookConsultation}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger & Actions */}
          <div className="flex lg:hidden items-center gap-1.5 flex-shrink-0">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled || activeCategory ? 'text-white' : 'text-neithal-green-950'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full ${isScrolled || activeCategory ? 'text-white' : 'text-neithal-green-950'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* APPLE-STYLE FULL-WIDTH GLASSMORPHIC MEGA OVERLAY DROPDOWN */}
        {activeCategory && currentMega && (
          <div
            className="absolute top-full left-0 right-0 bg-neithal-green-950/98 backdrop-blur-2xl text-neithal-cream-50 border-b-2 border-neithal-gold-500/40 shadow-2xl animate-slide-up z-50 py-10 px-8 lg:px-16"
            onMouseEnter={() => setActiveCategory(activeCategory)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              
              {/* Column 1 */}
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neithal-gold-400 border-b border-neithal-gold-500/30 pb-3 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neithal-gold-500" />
                  {currentMega.col1Title}
                </h4>
                <ul className="space-y-3">
                  {currentMega.col1Items.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => {
                          item.action();
                          setActiveCategory(null);
                        }}
                        className="text-base sm:text-lg font-serif font-bold text-white hover:text-neithal-gold-300 transition-colors flex items-center justify-between w-full text-left group py-0.5"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-neithal-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neithal-gold-400 border-b border-neithal-gold-500/30 pb-3 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neithal-gold-500" />
                  {currentMega.col2Title}
                </h4>
                <ul className="space-y-3">
                  {currentMega.col2Items.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => {
                          item.action();
                          setActiveCategory(null);
                        }}
                        className="text-base sm:text-lg font-serif font-bold text-white hover:text-neithal-gold-300 transition-colors flex items-center justify-between w-full text-left group py-0.5"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-neithal-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neithal-gold-400 border-b border-neithal-gold-500/30 pb-3 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neithal-gold-500" />
                  {currentMega.col3Title}
                </h4>
                <ul className="space-y-3">
                  {currentMega.col3Items.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => {
                          item.action();
                          setActiveCategory(null);
                        }}
                        className="text-base sm:text-lg font-serif font-bold text-white hover:text-neithal-gold-300 transition-colors flex items-center justify-between w-full text-left group py-0.5"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-neithal-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* Search Bar & Instant Live Results Modal */}
        {isSearchOpen && (
          <div className="bg-neithal-green-950 border-t border-b border-neithal-gold-500/30 py-5 px-4 sm:px-8 shadow-2xl animate-slide-up z-50">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/20 backdrop-blur-md">
                <Search className="w-5 h-5 text-neithal-gold-400 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search treatments, conditions (e.g. PCOS, Sciatica), Panchakarma, AHARA, Doctors..."
                  className="w-full bg-transparent border-none focus:outline-none text-base sm:text-lg text-white placeholder-neithal-cream-200/60 font-medium"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 text-neithal-cream-200 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="text-xs uppercase font-extrabold text-neithal-gold-400 hover:text-white px-3 py-1.5 rounded-lg bg-neithal-green-900 border border-neithal-gold-500/30 transition-all flex-shrink-0"
                >
                  Close
                </button>
              </div>

              {/* Instant Search Results Dropdown */}
              {searchQuery.trim() ? (
                <div className="bg-neithal-green-900/95 rounded-2xl border border-neithal-gold-500/30 p-3 space-y-2 max-h-[380px] overflow-y-auto no-scrollbar shadow-2xl">
                  {filteredSearchResults.length > 0 ? (
                    filteredSearchResults.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelectSearchItem(item)}
                        className="w-full text-left p-3.5 rounded-xl bg-white/5 hover:bg-neithal-gold-500/20 border border-transparent hover:border-neithal-gold-500/40 transition-all flex items-start justify-between gap-4 group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-neithal-gold-400 bg-neithal-green-950 px-2 py-0.5 rounded-md border border-neithal-gold-500/30">
                              {item.category}
                            </span>
                            <h4 className="font-serif text-base font-bold text-white group-hover:text-neithal-gold-300 transition-colors">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-xs text-neithal-cream-200/80 leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-bold text-neithal-gold-400 group-hover:translate-x-1 transition-transform flex-shrink-0 pt-1">
                          <span>Go to section</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-6 text-center text-neithal-cream-200/70 text-sm">
                      No exact match found for "<span className="text-neithal-gold-400 font-bold">{searchQuery}</span>". Press <kbd className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono text-white">Enter</kbd> to view all care conditions.
                    </div>
                  )}
                </div>
              ) : (
                /* Quick Suggestion Pills */
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
                  <span className="text-[11px] font-bold text-neithal-gold-400/80 uppercase tracking-wider flex-shrink-0">Popular:</span>
                  {[
                    { label: 'PCOS', query: 'pcos' },
                    { label: 'Sciatica', query: 'sciatica' },
                    { label: 'Panchakarma', query: 'panchakarma' },
                    { label: 'Virechana Detox', query: 'virechana' },
                    { label: 'Dr. Saranya', query: 'dr saranya' },
                    { label: 'Acid Reflux', query: 'acid reflux' },
                    { label: 'AHARA Diet', query: 'ahara' },
                    { label: 'Clinic Location', query: 'location' },
                  ].map((pill, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(pill.query)}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-neithal-gold-500 text-neithal-cream-100 hover:text-neithal-green-950 border border-white/10 hover:border-neithal-gold-500 transition-all flex-shrink-0"
                    >
                      {pill.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Dim Page Overlay */}
      {activeCategory && (
        <div className="fixed inset-0 top-16 bg-neithal-green-950/60 backdrop-blur-sm z-40 transition-opacity" />
      )}

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-neithal-green-950 text-neithal-cream-50 flex flex-col justify-between p-5 sm:p-6 animate-fade-in xl:hidden overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
            <Logo variant="dark" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-neithal-gold-400 hover:text-white transition-colors">
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 py-4 overflow-y-auto no-scrollbar flex-grow">
            {[
              { id: 'home', label: 'Overview / Home' },
              { id: 'treatments', label: 'Treatments & Panchakarma' },
              { id: 'conditions', label: 'Areas of Care (Conditions)' },
              { id: 'ahara', label: 'Neithal AHARA Nutrition' },
              { id: 'yoga', label: 'Therapeutic Yoga & Mind-Body' },
              { id: 'pharmacy', label: 'Authentic Pharmacy' },
              { id: 'journal', label: 'The Neithal Journal' },
              { id: 'journey', label: 'Connected Patient Journey' },
              { id: 'about', label: 'About & Community' },
            ].map((link) => {
              const isCurrent = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left font-serif text-xl sm:text-2xl font-bold py-3 px-2 border-b border-white/10 flex items-center justify-between transition-colors ${
                    isCurrent ? 'text-neithal-gold-400 bg-white/5 rounded-lg' : 'text-neithal-cream-100 hover:text-neithal-gold-300'
                  }`}
                >
                  <span>{link.label}</span>
                  {isCurrent && <span className="w-2 h-2 rounded-full bg-neithal-gold-400" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/10 flex-shrink-0">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-4 rounded-xl bg-neithal-gold-500 text-neithal-green-950 font-extrabold uppercase tracking-wider text-sm shadow-lg hover:bg-neithal-gold-400 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-neithal-green-950" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
