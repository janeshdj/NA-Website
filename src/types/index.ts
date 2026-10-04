export interface Doctor {
  id: string;
  name: string;
  title: string;
  employeeCode?: string;
  qualification: string;
  specialization: string[];
  experience: string;
  languages: string[];
  bio: string;
  image: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface PanchakarmaProcedure {
  id: string;
  name: string;
  sanskritName: string;
  englishTitle: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface ConditionCategory {
  id: string;
  name: string;
  description: string;
  items: {
    name: string;
    description: string;
    ayurvedicPerspective: string;
  }[];
}

export interface AharaPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface PharmacyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge?: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: string;
  initials: string;
  location: string;
  concern: string;
  story: string;
  quote: string;
}

export interface CommunityCamp {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
}
