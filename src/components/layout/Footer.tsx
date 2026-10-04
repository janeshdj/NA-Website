import React from 'react';
import { Logo } from '../ui/Logo';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: string, subCategory?: string, searchQuery?: string, targetId?: string) => void;
  onOpenAppointment?: (condition?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAppointment }) => {
  const handleLinkClick = (view: string, subCategory = 'all', searchQuery = '', targetId = '') => {
    if (onNavigate) {
      onNavigate(view, subCategory, searchQuery, targetId);
    } else {
      window.location.hash = view;
    }
  };

  return (
    <footer className="bg-neithal-green-950 text-neithal-cream-50 pt-12 sm:pt-16 pb-28 sm:pb-16 border-t border-neithal-gold-500/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          {/* Brand Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-neithal-cream-100 font-medium leading-relaxed max-w-md pt-2">
              A personal approach to classical Ayurvedic medicine, Panchakarma therapies, authentic pharmacy, and therapeutic yoga in Heritage Town, Puducherry.
            </p>
            <div className="pt-2 text-xs text-neithal-gold-400 font-extrabold tracking-widest uppercase">
              Established 2019 · Heritage Town, Puducherry
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-neithal-gold-400 border-b border-white/10 pb-1.5">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-neithal-cream-100">
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-neithal-gold-300 transition-colors text-left">Home Overview</button></li>
              <li><button onClick={() => handleLinkClick('home', 'all', '', 'neithal-approach')} className="hover:text-neithal-gold-300 transition-colors text-left">The Neithal Approach</button></li>
              <li><button onClick={() => handleLinkClick('treatments')} className="hover:text-neithal-gold-300 transition-colors text-left">Treatments & Care</button></li>
              <li><button onClick={() => handleLinkClick('conditions')} className="hover:text-neithal-gold-300 transition-colors text-left">Areas of Care</button></li>
              <li><button onClick={() => handleLinkClick('treatments', 'all', '', 'panchakarma')} className="hover:text-neithal-gold-300 transition-colors text-left">Panchakarma Program</button></li>
              <li><button onClick={() => handleLinkClick('ahara')} className="hover:text-neithal-gold-300 transition-colors text-left">Neithal AHARA</button></li>
              <li><button onClick={() => handleLinkClick('pharmacy')} className="hover:text-neithal-gold-300 transition-colors text-left">Authentic Pharmacy</button></li>
              <li><button onClick={() => handleLinkClick('journal')} className="hover:text-neithal-gold-300 transition-colors text-left">The Neithal Journal</button></li>
            </ul>
          </div>

          {/* Clinical Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-neithal-gold-400 border-b border-white/10 pb-1.5">Care Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-neithal-cream-100">
              <li><button onClick={() => onOpenAppointment ? onOpenAppointment() : handleLinkClick('treatments')} className="hover:text-neithal-gold-300 transition-colors text-left">Ayurvedic Consultation</button></li>
              <li><button onClick={() => handleLinkClick('treatments', 'panchakarma')} className="hover:text-neithal-gold-300 transition-colors text-left">5-Fold Panchakarma</button></li>
              <li><button onClick={() => handleLinkClick('treatments', 'abhyanga')} className="hover:text-neithal-gold-300 transition-colors text-left">Abhyanga & Kizhi Therapies</button></li>
              <li><button onClick={() => handleLinkClick('treatments', 'shirodhara')} className="hover:text-neithal-gold-300 transition-colors text-left">Shirodhara Restorative Pour</button></li>
              <li><button onClick={() => handleLinkClick('conditions', 'womens-health', 'PCOS')} className="hover:text-neithal-gold-300 transition-colors text-left">Women's Health & PCOS</button></li>
              <li><button onClick={() => handleLinkClick('ahara')} className="hover:text-neithal-gold-300 transition-colors text-left">South Indian Dietetics</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-neithal-gold-300 transition-colors text-left">Community Medical Camps</button></li>
            </ul>
          </div>

          {/* Clinic Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-neithal-gold-400 border-b border-white/10 pb-1.5">Clinic Visit</h4>
            <div className="space-y-3 text-xs sm:text-sm text-neithal-cream-100 font-semibold">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neithal-gold-400 flex-shrink-0 mt-0.5" />
                <span>#83, Chetty Street, MG Road Junction, Heritage Town, Puducherry – 605001</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neithal-gold-400 flex-shrink-0" />
                <span>9:00 AM – 9:00 PM (All Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neithal-gold-400 flex-shrink-0" />
                <a href="tel:+919488023328" className="hover:text-neithal-gold-300 text-neithal-gold-400 font-extrabold">+91 94880 23328</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neithal-gold-400 flex-shrink-0" />
                <a href="mailto:neithalayurveda@gmail.com" className="hover:text-neithal-gold-300">neithalayurveda@gmail.com</a>
              </div>
              <a
                href="https://maps.google.com/?q=83+Chetty+Street+Puducherry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neithal-gold-400 font-extrabold hover:underline pt-1"
              >
                Get Directions on Google Maps <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-neithal-cream-200">
          <p>© {new Date().getFullYear()} Neithal Ayurveda. All rights reserved. Registered Trademark ®.</p>
          <div className="flex flex-wrap items-center gap-6 font-semibold">
            <a href="#disclaimer" className="hover:text-neithal-gold-400 transition-colors">Medical Disclaimer</a>
            <a href="#privacy" className="hover:text-neithal-gold-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-neithal-gold-400 transition-colors">Terms of Care</a>
          </div>
        </div>

        {/* Medical Disclaimer Note */}
        <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-neithal-cream-200/60 text-center max-w-5xl mx-auto leading-relaxed font-medium">
          Medical Disclaimer: Information presented on this website is for educational and health awareness purposes only. Treatments and Panchakarma therapies are prescribed following individualized consultation with our qualified BAMS Ayurveda physicians. Response to treatment varies per individual Prakriti and metabolic condition.
        </div>
      </div>
    </footer>
  );
};
