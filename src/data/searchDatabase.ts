export interface SearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  view: string;
  subCategory?: string;
  searchQuery?: string;
  targetId?: string;
}

export const SEARCH_DATABASE: SearchItem[] = [
  // --- AREAS OF CARE / CONDITIONS ---
  {
    id: 'pcos',
    title: 'PCOS & Anovulatory Cycles',
    category: 'Areas of Care',
    description: 'Hormonal balancing, regularizing 28-day menstrual cycles & metabolic detox via Virechana.',
    tags: ['pcos', 'women', 'hormonal', 'periods', 'fertility', 'virechana', 'acne', 'ovary', 'weight', 'womens health'],
    view: 'conditions',
    subCategory: 'womens-health',
    searchQuery: 'PCOS',
  },
  {
    id: 'sciatica',
    title: 'Sciatica & Lumbar Disc Strain',
    category: 'Areas of Care',
    description: 'Relief from sharp radiating leg pain, disc compression & lumbar Vata congestion using Kati Basti.',
    tags: ['sciatica', 'back pain', 'disc', 'spine', 'nerve', 'lumbar', 'kati basti', 'joint', 'musculoskeletal'],
    view: 'conditions',
    subCategory: 'musculoskeletal',
    searchQuery: 'Sciatica',
  },
  {
    id: 'arthritis',
    title: 'Arthritis & Joint Stiffness',
    category: 'Areas of Care',
    description: 'Joint lubrication, swelling reduction, and anti-inflammatory Kizhi & Abhyanga therapy.',
    tags: ['arthritis', 'joint', 'knee', 'pain', 'inflammation', 'swelling', 'janu basti', 'knee pain'],
    view: 'conditions',
    subCategory: 'musculoskeletal',
    searchQuery: 'Arthritis',
  },
  {
    id: 'acid-reflux',
    title: 'Acid Reflux, GERD & IBS-D',
    category: 'Areas of Care',
    description: 'Restoring Agni (digestive fire), clearing gut inflammation and neutralizing Pachaka Pitta.',
    tags: ['acid reflux', 'gerd', 'ibs', 'digestion', 'stomach', 'bloating', 'gas', 'gut', 'agni', 'digestive'],
    view: 'conditions',
    subCategory: 'digestive',
    searchQuery: 'IBS',
  },
  {
    id: 'migraine',
    title: 'Migraine & Sinus Headache',
    category: 'Areas of Care',
    description: 'Vascular & cranial tension relief via Nasyam herbal nasal therapy and Shirodhara.',
    tags: ['migraine', 'headache', 'sinus', 'nasyam', 'brain', 'stress', 'neurological'],
    view: 'conditions',
    subCategory: 'neurological',
    searchQuery: 'Migraine',
  },
  {
    id: 'diabetes',
    title: 'Diabetes Support & Weight Reset',
    category: 'Areas of Care',
    description: 'Metabolic Agni enhancement, insulin sensitivity dietetics (AHARA) and Kapha detoxification.',
    tags: ['diabetes', 'sugar', 'blood sugar', 'weight loss', 'metabolism', 'obesity', 'glycemic', 'metabolic'],
    view: 'conditions',
    subCategory: 'metabolic',
    searchQuery: 'Diabetes',
  },
  {
    id: 'skin-psoriasis',
    title: 'Skin Wellness (Psoriasis & Eczema)',
    category: 'Areas of Care',
    description: 'Raktamokshana bio-purification, botanical oils, and autoimmune dermal soothing.',
    tags: ['skin', 'psoriasis', 'eczema', 'itching', 'dermatology', 'rash', 'raktamokshana'],
    view: 'conditions',
    subCategory: 'all',
    searchQuery: 'Skin',
  },

  // --- TREATMENTS & PANCHAKARMA ---
  {
    id: 'panchakarma-main',
    title: 'Panchakarma 5-Fold Bio-Detox Program',
    category: 'Treatments & Detox',
    description: 'Vamana, Virechana, Vasti, Nasya, and Raktamokshana root-cause cellular purification.',
    tags: ['panchakarma', 'detox', 'purification', 'virechana', 'vamana', 'vasti', 'nasya', 'cleansing'],
    view: 'treatments',
    targetId: 'panchakarma',
  },
  {
    id: 'abhyanga',
    title: 'Abhyanga Herbal Oil Massage',
    category: 'Treatments & Detox',
    description: 'Full-body synchronized warm medicated oil massage to calm Vata and nourish tissues.',
    tags: ['abhyanga', 'massage', 'oil', 'body massage', 'vata', 'relaxation', 'rejuvenation'],
    view: 'treatments',
    targetId: 'treatments',
  },
  {
    id: 'shirodhara',
    title: 'Shirodhara Forehead Pour Therapy',
    category: 'Treatments & Detox',
    description: 'Continuous warm herbal oil stream over third eye to relieve stress, insomnia & anxiety.',
    tags: ['shirodhara', 'forehead oil', 'head massage', 'sleep', 'insomnia', 'stress', 'mental health'],
    view: 'treatments',
    targetId: 'treatments',
  },
  {
    id: 'basti-reservoir',
    title: 'Kati & Janu Basti Joint Reservoirs',
    category: 'Treatments & Detox',
    description: 'Dough-ring warm medicated oil pools applied directly to the spine (Kati) or knees (Janu).',
    tags: ['basti', 'kati basti', 'janu basti', 'spine', 'knees', 'joint oil', 'lower back'],
    view: 'treatments',
    targetId: 'treatments',
  },
  {
    id: 'kizhi',
    title: 'Kizhi Herbal Poultice Therapy',
    category: 'Treatments & Detox',
    description: 'Warm herbal leaf and powder bolus compress to reduce muscle spasms and inflammation.',
    tags: ['kizhi', 'podikizhi', 'elakizhi', 'poultice', 'fomentation', 'muscle pain', 'stiffness'],
    view: 'treatments',
    targetId: 'treatments',
  },

  // --- CLINICAL CASE STUDIES ---
  {
    id: 'case-sciatica',
    title: 'Sciatica Case Study: Kati Basti 14-Day Recovery',
    category: 'Clinical Case Study',
    description: 'Male 44 Yrs software engineer: 85% mobility restoration & zero sciatic radiation via Kati Basti.',
    tags: ['case study', 'sciatica case', 'recovery', 'outcomes', 'results', 'sciatica'],
    view: 'home',
    targetId: 'case-studies',
  },
  {
    id: 'case-pcos',
    title: 'PCOS Case Study: Virechana 30-Day Recovery',
    category: 'Clinical Case Study',
    description: 'Female 29 Yrs: Restored 28-day cycle, 4.5kg weight reset & clear skin via Virechana detox.',
    tags: ['case study', 'pcos case', 'women case', 'recovery', 'outcomes', 'pcos'],
    view: 'home',
    targetId: 'case-studies',
  },
  {
    id: 'case-acid-reflux',
    title: 'Acid Reflux & IBS Case Study: 21-Day Bio-Reset',
    category: 'Clinical Case Study',
    description: 'Male 38 Yrs: Complete resolution of acid burning & regular gut rhythm off antacids.',
    tags: ['case study', 'acid reflux case', 'ibs case', 'gut case', 'recovery', 'outcomes'],
    view: 'home',
    targetId: 'case-studies',
  },

  // --- DOCTORS & PHYSICIANS ---
  {
    id: 'dr-saranya',
    title: 'Dr. Saranya K. (BAMS, MD - Senior Physician)',
    category: 'Physicians & Experts',
    description: '14+ years experience in Women’s Health, PCOS, Hormonal Wellness & Panchakarma.',
    tags: ['doctor', 'dr saranya', 'physician', 'expert', 'women doctor', 'consultant', 'pcos doctor'],
    view: 'home',
    targetId: 'doctors',
  },
  {
    id: 'dr-sathiyaraj',
    title: 'Dr. Sathiyaraj N. (BAMS - Panchakarma Specialist)',
    category: 'Physicians & Experts',
    description: 'Spine, Musculoskeletal & Chronic Vata Disorders Specialist at Heritage Town Puducherry.',
    tags: ['doctor', 'dr sathiyaraj', 'spine doctor', 'panchakarma doctor', 'sciatica doctor'],
    view: 'home',
    targetId: 'doctors',
  },

  // --- NEITHAL AHARA NUTRITION ---
  {
    id: 'ahara-main',
    title: 'Neithal AHARA Heritage Dietetics',
    category: 'Nutrition & Diet',
    description: 'South Indian medicinal food, digestive fire (Agni) balance, Kanjis, Rasams & spices.',
    tags: ['ahara', 'diet', 'food', 'nutrition', 'kanji', 'rasam', 'spices', 'turmeric', 'ginger', 'eating'],
    view: 'ahara',
    targetId: 'ahara',
  },

  // --- YOGA & MIND-BODY ---
  {
    id: 'yoga-main',
    title: 'Therapeutic Yoga & Pranayama Breathwork',
    category: 'Yoga & Mind-Body',
    description: 'Condition-linked yoga asanas for spine, digestion, stress reset & Nadi Shodhana breathwork.',
    tags: ['yoga', 'pranayama', 'breathwork', 'meditation', 'asana', 'mind', 'stress', 'sleep'],
    view: 'yoga',
    targetId: 'yoga',
  },

  // --- PHARMACY ---
  {
    id: 'pharmacy-main',
    title: 'Authentic Herbal Pharmacy & Kashayams',
    category: 'Pharmacy & Herbs',
    description: 'Classical liquid Kashayams, medicated Thailams, Arishtams, and fresh botanical Churnas.',
    tags: ['pharmacy', 'medicines', 'kashayam', 'thailam', 'herbs', 'churnas', 'triphala', 'ashwagandha'],
    view: 'pharmacy',
    targetId: 'pharmacy',
  },

  // --- PATIENT 360 JOURNEY ---
  {
    id: 'journey-main',
    title: 'Connected Patient 360 Journey',
    category: 'Patient Care',
    description: 'Prakriti analysis, Nadi Pariksha pulse diagnosis & 6-step personalized care protocol.',
    tags: ['journey', 'prakriti', 'pulse diagnosis', 'nadi', 'consultation process', 'care plan'],
    view: 'journey',
  },

  // --- LOCATION & CLINIC ---
  {
    id: 'location-clinic',
    title: 'Heritage Town Clinic Location & Hours',
    category: 'Clinic & Visit',
    description: '#83 Chetty Street, Heritage Town, Puducherry. Open 9:00 AM – 9:00 PM Daily.',
    tags: ['location', 'address', 'puducherry', 'chetty street', 'hours', 'timing', 'contact', 'map'],
    view: 'home',
    targetId: 'contact',
  },
  {
    id: 'faqs-main',
    title: 'Frequently Asked Questions (FAQs)',
    category: 'Help & FAQs',
    description: 'Panchakarma program duration, doctor consultation fees, insurance & diet guidelines.',
    tags: ['faq', 'questions', 'fees', 'cost', 'duration', 'insurance', 'help'],
    view: 'home',
    targetId: 'faqs',
  },
];
