import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const whatsappUrl = `https://wa.me/919488023328?text=${encodeURIComponent(
    'Hello Neithal Ayurveda, I would like to locate the clinic or enquire about consultation timings.'
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-28 bg-neithal-cream-100 border-t border-b border-neithal-border/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          eyebrow="LOCATION & HOURS"
          heading="Visit Neithal."
          supporting="Conveniently located at the MG Road junction in historic Heritage Town, Puducherry. Ample parking and quiet consultation rooms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Contact Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-neithal-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neithal-green-950 border-b border-neithal-border/50 pb-4">
                Clinic Information
              </h3>

              <div className="space-y-5 text-sm sm:text-base text-neithal-text font-semibold">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-neithal-cream-100 text-neithal-green-950 flex-shrink-0 border border-neithal-border/60">
                    <MapPin className="w-5 h-5 text-neithal-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neithal-green-950">Address</h4>
                    <p className="text-neithal-text text-xs sm:text-sm leading-relaxed mt-0.5 font-medium">
                      #83, Chetty Street, MG Road Junction, Heritage Town, Puducherry – 605001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-neithal-cream-100 text-neithal-green-950 flex-shrink-0 border border-neithal-border/60">
                    <Clock className="w-5 h-5 text-neithal-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neithal-green-950">Working Hours</h4>
                    <p className="text-neithal-text text-xs sm:text-sm leading-relaxed mt-0.5 font-medium">
                      9:00 AM – 9:00 PM (Monday through Sunday)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-neithal-cream-100 text-neithal-green-950 flex-shrink-0 border border-neithal-border/60">
                    <Phone className="w-5 h-5 text-neithal-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neithal-green-950">Phone / WhatsApp</h4>
                    <a href="tel:+919488023328" className="text-neithal-gold-500 font-extrabold hover:underline text-sm sm:text-base">
                      +91 94880 23328
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-neithal-cream-100 text-neithal-green-950 flex-shrink-0 border border-neithal-border/60">
                    <Mail className="w-5 h-5 text-neithal-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neithal-green-950">Email Inquiry</h4>
                    <a href="mailto:neithalayurveda@gmail.com" className="text-neithal-text font-medium hover:text-neithal-green-950 text-xs sm:text-sm">
                      neithalayurveda@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-neithal-border/50 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              <a
                href="https://maps.google.com/?q=83+Chetty+Street+Puducherry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-neithal-green-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neithal-green-900 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-neithal-gold-400" />
                <span>Directions</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-neithal-gold-500 text-neithal-green-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:bg-neithal-gold-400 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Map Preview Box (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-neithal-border shadow-card relative min-h-[300px] sm:min-h-[400px]">
            <iframe
              title="Neithal Ayurveda Puducherry Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6262402123!2d79.8315!3d11.9365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5363c400000001%3A0x0!2s83%20Chetty%20St%2C%20Heritage%20Town%2C%20Puducherry!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[320px] sm:min-h-[420px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
