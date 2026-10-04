import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Search, Menu, X, Calendar, ChevronDown, Sparkles, Activity, Utensils, BookOpen, User, PhoneCall, HeartPulse } from 'lucide-react';

interface HeaderRefinedProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenAppointment: () => void;
}

export const HeaderRefined: React.FC<HeaderRefinedProps> = ({
  currentView,
  onNavigate,
  onOpenAppointment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownMenus = [
    {
      id: 'treatments-menu',
      label: 'Care & Treatments',
      viewTarget: 'treatments',
      items: [
        { name: 'Panchakarma 5-Fold Program', desc: 'Therapeutic detoxification & rejuvenation', icon: <Sparkles className="w-4 h-4 text-neithal-gold-500" />, view: 'treatments' },
        { name: 'Ayurveda Consultation', desc: 'Nadi pulse diagnosis & Prakriti analysis', icon: <User className="w-4 h-4 text-neithal-gold-500" />, view: 'treatments' },
        { name: 'Traditional Body Therapies', desc: 'Abhyanga, Kizhi & Shirodhara', icon: <HeartPulse className="w-4 h-4 text-neithal-gold-500" />, view: 'treatments' },
      ],
    },
    {
      id: 'conditions-menu',
      label: 'Areas of Care',
      viewTarget: 'conditions',
      items: [
        { name: 'Musculoskeletal & Joint Care', desc: 'Arthritis, Sciatica & Back strain', icon: <Activity className="w-4 h-4 text-neithal-gold-500" />, view: 'conditions' },
        { name: 'Digestive & Gut Health', desc: 'IBS, Acid reflux & Constipation', icon: <Utensils className="w-4 h-4 text-neithal-gold-500" />, view: 'conditions' },
        { name: 'Women’s Hormonal Health', desc: 'PCOS, Menstrual relief & Menopause', icon: <Sparkles className="w-4 h-4 text-neithal-gold-500" />, view: 'conditions' },
        { name: 'Neurological & Metabolic', desc: 'Migraine, Diabetes & Weight reset', icon: <Activity className="w-4 h-4 text-neithal-gold-500" />, view: 'conditions' },
      ],
    },
    {
      id: 'ahara-pharmacy-menu',
      label: 'AHARA & Pharmacy',
      viewTarget: 'ahara',
      items: [
        { name: 'Neithal AHARA Nutrition', desc: 'South Indian dietetics & food wisdom', icon: <Utensils className="w-4 h-4 text-neithal-gold-500" />, view: 'ahara' },
        { name: 'Authentic Pharmacy Catalog', desc: 'Classical Kashayams, Thailams & Oils', icon: <Sparkles className="w-4 h-4 text-neithal-gold-500" />, view: 'pharmacy' },
      ],
    },
    {
      id: 'about-journal-menu',
      label: 'About & Journal',
      viewTarget: 'about',
      items: [
        { name: 'The Neithal 6-Step Approach', desc: 'Our individualized care philosophy', icon: <Sparkles className="w-4 h-4 text-neithal-gold-500" />, view: 'about' },
        { name: 'Our Physicians & Doctors', desc: 'Meet Dr. Saranya K. & Dr. Sathiyaraj N.', icon: <User className="w-4 h-4 text-neithal-gold-500" />, view: 'home' },
        { name: 'The Neithal Journal', desc: 'Physician educational articles', icon: <BookOpen className="w-4 h-4 text-neithal-gold-500" />, view: 'journal' },
        { name: 'Community Medical Camps', desc: 'Beyond the clinic initiatives', icon: <PhoneCall className="w-4 h-4 text-neithal-gold-500" />, view: 'about' },
      ],
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-subtle border-b border-neithal-border py-2.5'
            : 'bg-neithal-cream-50 py-3.5 border-b border-neithal-border/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Lockup */}
          <div onClick={() => onNavigate('home')}>
            <Logo variant="compact" />
          </div>

          {/* Desktop 4 Category Dropdown Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 relative">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-lg ${
                currentView === 'home'
                  ? 'text-neithal-green-950 bg-neithal-cream-100'
                  : 'text-neithal-muted hover:text-neithal-green-950'
              }`}
            >
              Overview
            </button>

            {dropdownMenus.map((menu) => {
              const isOpen = activeDropdown === menu.id;
              const isCurrentView = currentView === menu.viewTarget;

              return (
                <div
                  key={menu.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(menu.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => {
                      onNavigate(menu.viewTarget);
                      setActiveDropdown(null);
                    }}
                    className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-lg flex items-center gap-1 ${
                      isCurrentView
                        ? 'text-neithal-green-950 bg-neithal-cream-100'
                        : 'text-neithal-muted hover:text-neithal-green-950'
                    }`}
                  >
                    <span>{menu.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-neithal-gold-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu Panel */}
                  {isOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white rounded-2xl p-3 shadow-card border border-neithal-border z-50 animate-slide-up space-y-1">
                      {menu.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            onNavigate(item.view);
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-neithal-cream-50 transition-colors flex items-start gap-3 group"
                        >
                          <div className="p-2 rounded-lg bg-neithal-cream-100 group-hover:bg-neithal-green-950 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-[11px] text-neithal-muted leading-tight mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-neithal-text hover:text-neithal-gold-500 rounded-full hover:bg-neithal-cream-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <Button
              variant="gold"
              size="sm"
              icon={<Calendar className="w-3.5 h-3.5" />}
              onClick={onOpenAppointment}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neithal-text hover:text-neithal-gold-500"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="bg-neithal-cream-100 border-t border-b border-neithal-border py-3 px-4 animate-slide-up">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-neithal-gold-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search treatments, conditions, Panchakarma, AHARA or pharmacy..."
                className="w-full bg-transparent border-none focus:outline-none text-sm text-neithal-green-950 placeholder-neithal-muted"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-xs uppercase font-semibold text-neithal-muted hover:text-neithal-text"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neithal-green-950/95 backdrop-blur-xl text-neithal-cream-50 flex flex-col justify-between p-6 animate-fade-in lg:hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Logo variant="dark" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-neithal-gold-400">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-3 py-6 overflow-y-auto max-h-[60vh]">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-serif text-xl font-bold py-2 border-b border-white/10 text-neithal-gold-400"
            >
              Overview / Home
            </button>
            <button
              onClick={() => {
                onNavigate('treatments');
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-serif text-xl font-bold py-2 border-b border-white/10 hover:text-neithal-gold-400"
            >
              Care & Treatments
            </button>
            <button
              onClick={() => {
                onNavigate('conditions');
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-serif text-xl font-bold py-2 border-b border-white/10 hover:text-neithal-gold-400"
            >
              Areas of Care (Conditions)
            </button>
            <button
              onClick={() => {
                onNavigate('ahara');
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-serif text-xl font-bold py-2 border-b border-white/10 hover:text-neithal-gold-400"
            >
              Neithal AHARA Nutrition
            </button>
            <button
              onClick={() => {
                onNavigate('pharmacy');
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-serif text-xl font-bold py-2 border-b border-white/10 hover:text-neithal-gold-400"
            >
              Authentic Pharmacy
            </button>
            <button
              onClick={() => {
                onNavigate('journal');
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-serif text-xl font-bold py-2 border-b border-white/10 hover:text-neithal-gold-400"
            >
              The Neithal Journal
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-serif text-xl font-bold py-2 border-b border-white/10 hover:text-neithal-gold-400"
            >
              About & Community
            </button>
          </nav>

          <div className="pt-4 border-t border-white/10">
            <Button
              variant="gold"
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAppointment();
              }}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
