import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Activity, Clock, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

interface ClinicalCaseStudiesProps {
  onOpenAppointment: (condition?: string, doctorName?: string) => void;
}

export const ClinicalCaseStudies: React.FC<ClinicalCaseStudiesProps> = ({ onOpenAppointment }) => {
  const caseStudies = [
    {
      id: 'case-1',
      category: 'Musculoskeletal Care',
      condition: 'Sciatica & Lumbar Disc Strain',
      patientInfo: 'Male, 44 Yrs · Software Engineer',
      duration: '14-Day Protocol',
      image: '/case-sciatica-basti.jpg',
      imageTag: 'Kati Basti Spinal Protocol',
      protocol: 'Kati Basti (Warm Medicated Reservoir), Abhyanga Oil Massage & Custom Spinal Exercises',
      beforeState: 'Severe radiating leg pain, unable to sit for >15 mins, dependent on analgesics.',
      afterOutcome: '85% mobility restoration, zero sharp sciatic radiation, resumed unassisted walking.',
      physicianNote: 'Dr. Sathiyaraj N.: Focus was on relieving localized Vata congestion at the L4-L5 lumbar root.',
      doctorName: 'Dr. Sathiyaraj N.',
    },
    {
      id: 'case-2',
      category: "Women's Health",
      condition: 'PCOS & Anovulatory Cycles',
      patientInfo: 'Female, 29 Yrs · Bank Professional',
      duration: '30-Day Care Pathway',
      image: '/case-pcos-virechana.jpg',
      imageTag: 'Virechana Bio-Detox',
      protocol: 'Classical Virechana Detox, Herbal Kashayams & South Indian AHARA Glycemic Meal Plan',
      beforeState: 'Irregular 60+ day cycles, severe hormonal acne, chronic fatigue and metabolic bloating.',
      afterOutcome: 'Natural 28-day menstrual cycle restored, 4.5 kg metabolic weight reset, clear skin.',
      physicianNote: 'Dr. Saranya K.: Cleared Kapha-Granthi obstruction in pelvic channels and balanced Agni.',
      doctorName: 'Dr. Saranya K.',
    },
    {
      id: 'case-3',
      category: 'Digestive Agni',
      condition: 'Chronic Acid Reflux & IBS-D',
      patientInfo: 'Male, 38 Yrs · Entrepreneur',
      duration: '21-Day Bio-Reset',
      image: '/case-acid-reflux-agni.jpg',
      imageTag: 'Agni Dipana Protocol',
      protocol: 'Agni Dipana Herbs, Medicated Ghee Administration & Ritucharya Lifestyle Audit',
      beforeState: 'Daily acid burning, food intolerance, frequent loose stools, high stress levels.',
      afterOutcome: 'Complete resolution of acid reflux, regular bowel rhythm, off antacids.',
      physicianNote: 'Dr. Sathiyaraj N.: Restored Samana Vayu and Pachaka Pitta balance through gut soothing herbs.',
      doctorName: 'Dr. Sathiyaraj N.',
    },
  ];

  return (
    <section id="case-studies" className="py-10 sm:py-14 bg-neithal-cream-100 border-b border-neithal-border/60 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="DOCUMENTED CLINICAL OUTCOMES"
          heading="Real Case Studies & Recovery Pathways"
          supporting="Anonymized physician-documented clinical cases showing root-cause diagnosis, individualized Panchakarma protocols, and patient recovery milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-neithal-gold-500/40 shadow-card hover:shadow-elevated hover:border-neithal-gold-500 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* 100% RELEVANT CLINICAL THERAPY IMAGE HEADER */}
              <div className="relative h-36 sm:h-40 overflow-hidden bg-neithal-green-950">
                <img
                  src={item.image}
                  alt={item.condition}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/90 via-neithal-green-950/30 to-transparent" />

                {/* Top Image Overlay Badges */}
                <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-neithal-gold-300 bg-neithal-green-950/90 border border-neithal-gold-500/40 px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-md">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-neithal-green-950 bg-neithal-gold-500 px-2.5 py-0.5 rounded-full shadow-md">
                    <Clock className="w-3 h-3 text-neithal-green-950" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Bottom Image Tag */}
                <div className="absolute bottom-2.5 left-3 text-xs font-bold text-neithal-cream-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neithal-gold-400" />
                  <span>{item.imageTag}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Title & Patient Demographics */}
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-extrabold text-neithal-green-950 group-hover:text-neithal-gold-600 transition-colors leading-tight">
                      {item.condition}
                    </h3>
                    <p className="text-[11px] text-neithal-muted font-semibold mt-0.5">
                      {item.patientInfo}
                    </p>
                  </div>

                  {/* Prescribed Protocol */}
                  <div className="p-2.5 rounded-2xl bg-neithal-cream-50 border border-neithal-border/60 text-[11px] sm:text-xs text-neithal-green-950 font-semibold space-y-0.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-neithal-gold-600 block">
                      Prescribed Protocol:
                    </span>
                    <p className="leading-snug">{item.protocol}</p>
                  </div>

                  {/* HIGH-CONTRAST BEFORE / AFTER METRICS */}
                  <div className="space-y-2">
                    {/* Before (Red Baseline) */}
                    <div className="p-2.5 rounded-xl bg-red-50/70 border border-red-200/70 text-[11px] sm:text-xs space-y-0.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-700 block flex items-center gap-1">
                        <Activity className="w-3 h-3 text-red-600" />
                        Baseline Symptoms (Before)
                      </span>
                      <p className="text-neithal-text font-medium leading-relaxed">
                        {item.beforeState}
                      </p>
                    </div>

                    {/* After (Emerald Recovery) */}
                    <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200 text-[11px] sm:text-xs space-y-0.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Clinical Outcome (After)
                      </span>
                      <p className="text-emerald-950 font-extrabold leading-relaxed">
                        {item.afterOutcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Physician Note Footer & Action Button */}
                <div className="pt-3 mt-2.5 border-t border-neithal-border/50 space-y-2.5">
                  <p className="text-[11px] text-neithal-muted italic leading-snug font-medium">
                    "{item.physicianNote}"
                  </p>

                  <button
                    onClick={() => onOpenAppointment(item.condition, item.doctorName)}
                    className="w-full py-2.5 rounded-2xl bg-neithal-green-950 hover:bg-neithal-green-900 text-neithal-gold-400 font-extrabold uppercase tracking-wider text-xs transition-all shadow-md flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-neithal-gold-400 group-hover/btn:scale-110 transition-transform" />
                    <span>Book Case Evaluation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neithal-gold-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

