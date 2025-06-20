// src/hooks/useTranslations.js
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Custom hook to access the translation function and current language information.
 * @returns {{
 * t: (key: string) => string,
 * language: string,
 * changeLanguage: (lang: string) => void,
 * supportedLanguages: string[]
 * }}
 */
export const useTranslations = () => {
  const { t, language, changeLanguage, supportedLanguages } = useLanguage();
  return { t, language, changeLanguage, supportedLanguages };
};