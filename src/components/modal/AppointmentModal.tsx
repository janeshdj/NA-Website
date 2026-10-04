import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageCircle, ArrowRight, UserCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledCondition?: string;
  prefilledDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  prefilledCondition = '',
  prefilledDoctor = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [consultationType, setConsultationType] = useState<string>('In-Person Clinic Visit');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (9 AM - 12 PM)');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [healthConcern, setHealthConcern] = useState<string>(prefilledCondition);
  const [selectedDoctor, setSelectedDoctor] = useState<string>(prefilledDoctor);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setHealthConcern(prefilledCondition || '');
      setSelectedDoctor(prefilledDoctor || '');
      setStep(1);
      setIsSubmitted(false);
    }
  }, [isOpen, prefilledCondition, prefilledDoctor]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppConfirm = () => {
    const doctorText = selectedDoctor ? selectedDoctor : 'Any Available Senior BAMS Physician';
    const concernText = healthConcern.trim() ? healthConcern.trim() : 'General Ayurveda Consultation';
    const dateText = preferredDate ? preferredDate : 'Earliest Available Date';

    const rawMessage = 
`*NEITHAL AYURVEDA - CONSULTATION APPOINTMENT*

*PATIENT DETAILS*
• *Full Name:* ${patientName}
• *Mobile Number:* ${patientPhone}

*PHYSICIAN & APPOINTMENT PREFERENCE*
• *Requested Consultant:* ${doctorText}
• *Consultation Type:* ${consultationType}
• *Preferred Date:* ${dateText}
• *Time Window:* ${preferredTime}
• *Primary Health Concern:* ${concernText}

*CLINIC LOCATION*
#83 Chetty Street, Heritage Town, Puducherry - 605001`;

    const text = encodeURIComponent(rawMessage);
    window.open(`https://wa.me/919488023328?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-neithal-green-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-8 border border-neithal-border shadow-elevated relative max-h-[92vh] sm:max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full text-neithal-muted hover:text-neithal-green-950 hover:bg-neithal-cream-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-5 sm:mb-6 pr-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-neithal-gold-500 bg-neithal-gold-100 px-3 py-1 rounded-full border border-neithal-gold-500/30">
                  Step {step} of 3
                </span>
                {selectedDoctor && (
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-neithal-green-950 bg-neithal-gold-400 px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-neithal-green-950" />
                    Requested: {selectedDoctor}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-neithal-green-950 mt-2">
                Book an Ayurveda Consultation
              </h3>
              <p className="text-xs text-neithal-muted mt-1">
                Heritage Town Clinic, Puducherry · Online Consultations Available
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Consultation Type */}
              {step === 1 && (
                <div className="space-y-4 animate-slide-up">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neithal-green-950">
                    Select Consultation Type
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        title: 'In-Person Clinic Visit',
                        desc: '#83 Chetty Street, Heritage Town, Puducherry',
                        badge: 'Clinic',
                      },
                      {
                        title: 'Online Video Consultation',
                        desc: 'Consult from home with senior BAMS doctor',
                        badge: 'Tele-Health',
                      },
                      {
                        title: 'Panchakarma Evaluation',
                        desc: 'Specialized 5-fold detoxification assessment',
                        badge: 'Therapeutic',
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        onClick={() => setConsultationType(item.title)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                          consultationType === item.title
                            ? 'border-neithal-gold-500 bg-neithal-gold-100/50 ring-2 ring-neithal-gold-500/20'
                            : 'border-neithal-border bg-neithal-cream-50 hover:bg-white'
                        }`}
                      >
                        <div>
                          <h4 className="font-bold text-sm text-neithal-green-950">{item.title}</h4>
                          <p className="text-xs text-neithal-muted">{item.desc}</p>
                        </div>
                        <span className="text-[10px] font-bold text-neithal-gold-500 uppercase tracking-widest">
                          {item.badge}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center mt-4"
                    icon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => setStep(2)}
                  >
                    Continue to Date & Time
                  </Button>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-4 animate-slide-up">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neithal-green-950 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-neithal-border bg-neithal-cream-50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-neithal-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neithal-green-950 mb-2">
                      Preferred Time Window
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-neithal-border bg-neithal-cream-50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-neithal-gold-500"
                    >
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 9 PM)</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                      onClick={() => setStep(3)}
                    >
                      Continue to Patient Details
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Patient Information */}
              {step === 3 && (
                <div className="space-y-4 animate-slide-up">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neithal-green-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter patient full name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-neithal-border bg-neithal-cream-50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-neithal-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neithal-green-950 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94880 23328"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-neithal-border bg-neithal-cream-50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-neithal-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neithal-green-950 mb-1">
                      Requested Consultant / Doctor
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-neithal-border bg-neithal-cream-50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-neithal-gold-500 font-semibold text-neithal-green-950"
                    >
                      <option value="">Any Available Senior BAMS Physician</option>
                      <option value="Dr. Saranya K.">Dr. Saranya K. (Senior Physician - Women's Health & PCOS)</option>
                      <option value="Dr. Sathiyaraj N.">Dr. Sathiyaraj N. (Panchakarma & Spine Specialist)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neithal-green-950 mb-1">
                      Primary Health Concern (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Sciatica pain, digestive irregularity, PCOS, or general wellness"
                      value={healthConcern}
                      onChange={(e) => setHealthConcern(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-neithal-border bg-neithal-cream-50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-neithal-gold-500"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full justify-center"
                      icon={<CheckCircle className="w-4 h-4" />}
                    >
                      Confirm Appointment Request
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4 animate-scale-up">
            <div className="w-16 h-16 bg-neithal-gold-100 text-neithal-gold-500 rounded-full flex items-center justify-center mx-auto border-2 border-neithal-gold-500">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-3xl font-bold text-neithal-green-950">
              Appointment Request Submitted
            </h3>

            <p className="text-xs text-neithal-muted leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-neithal-green-950">{patientName}</strong>. Our clinic team will reach out to confirm your timing slot. You can also send this request directly via WhatsApp for instant confirmation.
            </p>

            <div className="p-4 rounded-2xl bg-neithal-cream-100 border border-neithal-border text-left text-xs space-y-2 font-medium">
              <div><strong className="text-neithal-green-950">Patient Name:</strong> {patientName}</div>
              <div><strong className="text-neithal-green-950">Requested Doctor:</strong> <span className="text-neithal-gold-600 font-extrabold">{selectedDoctor || 'Any Available BAMS Physician'}</span></div>
              <div><strong className="text-neithal-green-950">Consultation Type:</strong> {consultationType}</div>
              <div><strong className="text-neithal-green-950">Preferred Timing:</strong> {preferredDate || 'Earliest Available'} ({preferredTime})</div>
              {healthConcern && <div><strong className="text-neithal-green-950">Primary Concern:</strong> {healthConcern}</div>}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <Button
                variant="gold"
                size="lg"
                className="w-full justify-center"
                icon={<MessageCircle className="w-4 h-4" />}
                onClick={handleWhatsAppConfirm}
              >
                Send Request via WhatsApp
              </Button>

              <Button variant="ghost" size="md" onClick={onClose}>
                Close Dialog
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
