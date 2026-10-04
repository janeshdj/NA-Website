import { useState, useEffect } from 'react';
import { Language, translations, Translations } from '../data/translations';

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('neithal_lang');
    return (saved === 'ta' ? 'ta' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('neithal_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const t: Translations = translations[lang];

  return { lang, setLang, toggleLanguage, t };
}
