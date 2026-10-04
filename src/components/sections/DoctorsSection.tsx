import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import doctorsData from '../../data/doctors.json';
import { Doctor } from '../../types';
import { Award, GraduationCap, Languages, Calendar, ShieldCheck, Sparkles } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenAppointment: (condition?: string, doctorName?: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenAppointment }) => {
  const doctors: Doctor[] = doctorsData;

  return (
    <section id="doctors" className="py-20 sm:py-28 bg-neithal-cream-50 relative overflow-hidden">
      {/* Background Royal Golden Glow Ambiance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neithal-gold-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-neithal-green-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="THE PEOPLE BEHIND NEITHAL"
          heading="Meet the people behind your care."
          supporting="Qualified BAMS physicians combining classical root-cause diagnostics with compassionate patient listening."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-neithal-gold-500/50 shadow-card hover:shadow-elevated hover:border-neithal-gold-500 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Royal Gold Top Corner Ribbon Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-neithal-gold-500/15 via-neithal-gold-300/5 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Header Row: Doctor Name + Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neithal-gold-500/20 pb-5 mb-6">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-neithal-gold-500 block mb-0.5">
                      {doc.title}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-neithal-green-950">
                      {doc.name}
                    </h3>
                  </div>

                  {/* PERFECTLY ALIGNED VERIFIED BADGE ON TOP RIGHT */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neithal-gold-100/80 border border-neithal-gold-500/40 text-neithal-green-950 text-xs font-bold shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-neithal-gold-500 flex-shrink-0" />
                    <span>Verified Physician</span>
                  </div>
                </div>

                {/* Content Split: Portrait + Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-start">
                  
                  {/* Doctor Official Photo with Royal Gold Frame (5 cols / 12) */}
                  <div className="sm:col-span-5 relative">
                    <div className="rounded-2xl overflow-hidden border-2 border-neithal-gold-500 shadow-md relative group h-64 sm:h-72 bg-neithal-green-950">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/85 via-transparent to-transparent" />

                      {/* Clean Non-Overlapping Doctor Badge */}
                      <span className="absolute bottom-2.5 left-2 right-2 sm:left-2.5 sm:right-2.5 text-center bg-neithal-gold-500 text-neithal-green-950 px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight shadow-md border border-neithal-green-950/20 leading-tight">
                        Senior BAMS Physician
                      </span>
                    </div>
                  </div>

                  {/* Doctor Credentials & Bio (7 cols / 12) */}
                  <div className="sm:col-span-7 space-y-3.5 flex flex-col justify-between h-full">
                    <div className="space-y-2 text-xs sm:text-sm text-neithal-text font-semibold">
                      <div className="flex items-start gap-2 text-neithal-green-950">
                        <GraduationCap className="w-4 h-4 text-neithal-gold-500 flex-shrink-0 mt-0.5" />
                        <span>{doc.qualification}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-neithal-gold-500 flex-shrink-0" />
                        <span>{doc.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Languages className="w-4 h-4 text-neithal-gold-500 flex-shrink-0" />
                        <span>Consults in: {doc.languages.join(', ')}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neithal-text leading-relaxed font-medium">
                      {doc.bio}
                    </p>

                    {/* Tight, Perfectly Aligned Specializations Badges */}
                    <div className="pt-1 border-t border-neithal-border/40">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-neithal-green-950 block mb-1.5 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-neithal-gold-500" />
                        Clinical Specializations:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {doc.specialization.map((spec, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-neithal-gold-100/70 border border-neithal-gold-500/40 text-neithal-green-950 rounded-lg text-[11px] font-bold shadow-xs whitespace-nowrap"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Row Action Button (Perfect Alignment Across Cards) */}
              <div className="mt-8 pt-5 border-t border-neithal-gold-500/30 flex items-center justify-between">
                <button
                  onClick={() => onOpenAppointment('', doc.name)}
                  className="w-full py-3.5 rounded-2xl bg-neithal-green-950 hover:bg-neithal-green-900 text-neithal-cream-50 font-extrabold uppercase tracking-wider text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-neithal-gold-400 group-hover:scale-110 transition-transform" />
                  <span>Book Consultation with {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
