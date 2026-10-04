export type Language = 'en' | 'ta';

export interface Translations {
  tagline: string;
  openNow: string;
  closedNow: string;
  locationHeader: string;
  bookConsultation: string;
  exploreTreatments: string;
  overview: string;
  treatments: string;
  conditions: string;
  ahara: string;
  yoga: string;
  pharmacy: string;
  journal: string;
  journey: string;
  about: string;
  verifiedPhysician: string;
  seniorBamsPhysician: string;
  clinicalSpecializations: string;
  clinicalSafetyAssurance: string;
  gmpCertifiedOils: string;
  physicianSupervised: string;
  singlePatientSterile: string;
  zeroSynthetics: string;
  directions: string;
  whatsApp: string;
  callDirect: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    tagline: 'Traditional Wisdom | Modern Care',
    openNow: 'Open Now · 9:00 AM – 9:00 PM (All Days)',
    closedNow: 'Opens at 9:00 AM · Online Booking Available 24/7',
    locationHeader: '#83 Chetty Street, Heritage Town, Puducherry',
    bookConsultation: 'Book Consultation',
    exploreTreatments: 'Explore Treatments',
    overview: 'Overview',
    treatments: 'Treatments',
    conditions: 'Conditions',
    ahara: 'AHARA',
    yoga: 'Yoga',
    pharmacy: 'Pharmacy',
    journal: 'Journal',
    journey: 'Patient 360',
    about: 'About',
    verifiedPhysician: 'Verified Physician',
    seniorBamsPhysician: 'Senior BAMS Physician',
    clinicalSpecializations: 'Clinical Specializations',
    clinicalSafetyAssurance: 'Clinical Quality & Safety Standards',
    gmpCertifiedOils: '100% Classical GMP Certified Oils & Formulations',
    physicianSupervised: 'Direct Senior BAMS Physician Supervision',
    singlePatientSterile: 'Single-Patient Sterile Therapy Linen',
    zeroSynthetics: 'Zero Synthetic Additives or Unlabeled Steroids',
    directions: 'Directions',
    whatsApp: 'WhatsApp',
    callDirect: 'Call Direct',
  },
  ta: {
    tagline: 'பாரம்பரிய ஞானம் | நவீன மருத்துவம்',
    openNow: 'இப்போது திறந்துள்ளது · காலை 9:00 – இரவு 9:00 (அனைத்து நாட்களும்)',
    closedNow: 'காலை 9:00 மணிக்கு திறக்கும் · ஆன்லைன் முன்பதிவு 24/7',
    locationHeader: '#83 செட்டி தெரு, ஹெரிட்டேஜ் டவுன், புதுச்சேரி',
    bookConsultation: 'முன்பதிவு செய்ய',
    exploreTreatments: 'சிகிச்சைகள்',
    overview: 'முகப்பு',
    treatments: 'சிகிச்சைகள்',
    conditions: 'பாதிப்புகள்',
    ahara: 'ஆஹாரம்',
    yoga: 'யோகா',
    pharmacy: 'மருந்தகம்',
    journal: 'செய்திகள்',
    journey: 'நோயாளி பயணம்',
    about: 'பற்றி',
    verifiedPhysician: 'சான்றளிக்கப்பட்ட மருத்துவர்',
    seniorBamsPhysician: 'மூத்த BAMS ஆயுர்வேத மருத்துவர்',
    clinicalSpecializations: 'சிறப்பு மருத்துவ சிகிச்சை துறைகள்',
    clinicalSafetyAssurance: 'மருத்துவத் தரம் மற்றும் பாதுகாப்புத் தரநிலைகள்',
    gmpCertifiedOils: '100% பாரம்பரிய GMP சான்றளிக்கப்பட்ட தைலங்கள்',
    physicianSupervised: 'மூத்த BAMS மருத்துவரின் நேரடி மேற்பார்வை',
    singlePatientSterile: 'ஒவ்வொரு நோயாளிக்கும் தனிப்பட்ட சுகாதாரம்',
    zeroSynthetics: 'செயற்கை இரசாயனங்கள் இல்லாத இயற்கை மருத்துவம்',
    directions: 'வரைபடம்',
    whatsApp: 'வாட்ஸ்அப்',
    callDirect: 'அழைக்கவும்',
  },
};
