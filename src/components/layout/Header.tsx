import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Search, Menu, X, Calendar, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#neithal-approach' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Conditions', href: '#conditions' },
    { name: 'AHARA', href: '#ahara' },
    { name: 'Pharmacy', href: '#pharmacy' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-subtle border-b border-neithal-border py-3'
            : 'bg-neithal-cream-50 py-4 border-b border-neithal-border/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#hero" className="flex-shrink-0">
            <Logo variant="light" className={isScrolled ? 'scale-95 transition-transform' : ''} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-neithal-text hover:text-neithal-gold-500 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neithal-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-neithal-text hover:text-neithal-gold-500 rounded-full hover:bg-neithal-cream-100 transition-colors"
              aria-label="Search site"
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
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-neithal-text hover:text-neithal-gold-500 rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neithal-text hover:text-neithal-gold-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Overlay Bar */}
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

      {/* Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neithal-green-950/95 backdrop-blur-xl text-neithal-cream-50 flex flex-col justify-between p-6 animate-fade-in lg:hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Logo variant="dark" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-neithal-gold-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl hover:text-neithal-gold-400 transition-colors flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-5 h-5 text-neithal-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
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
            <p className="text-center text-xs text-neithal-cream-200/70 pt-2">
              #83, Chetty Street, Heritage Town, Puducherry
            </p>
          </div>
        </div>
      )}
    </>
  );
};
