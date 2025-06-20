// src/components/layout/LanguageSwitcher.jsx
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslations } from '../../hooks/useTranslations'; // t fonksiyonu için

const LanguageSwitcher = () => {
  const { language, supportedLanguages, changeLanguage } = useLanguage();
  const { t } = useTranslations();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  // Desteklenen diller için daha kullanıcı dostu isimler (opsiyonel)
  const languageNames = {
    en: 'English',
    tr: 'Türkçe',
    de: 'Deutsch',
    fr: 'Français',
  };

  return (
    <div className="relative">
      <label htmlFor="language-select" className="sr-only">
        {t('languageSwitcher.selectLanguage')}
      </label>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
        className="block appearance-none w-full md:w-auto bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-3 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent text-sm text-gray-700 dark:text-gray-200 transition-colors duration-200"
      >
        {supportedLanguages.map((langCode) => (
          <option key={langCode} value={langCode}>
            {languageNames[langCode] || langCode.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;