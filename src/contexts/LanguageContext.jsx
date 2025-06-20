import React, { createContext, useState, useEffect, useContext } from 'react';
// Örnek çeviri dosyalarını import edeceğiz (bir sonraki adımda oluşturulacaklar)
import enTranslations from '../i18n/en.json';
import trTranslations from '../i18n/tr.json';
import deTranslations from '../i18n/de.json';
import frTranslations from '../i18n/fr.json';

// 1. Desteklenen diller ve çevirileri bir obje içinde topluyoruz
const translations = {
  en: enTranslations,
  tr: trTranslations,
  de: deTranslations,
  fr: frTranslations,
};

// 2. Desteklenen dil kodları
export const supportedLanguages = Object.keys(translations); // ['en', 'tr', 'de', 'fr']

// 3. Create Context
const LanguageContext = createContext();

// 4. Create a custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// 5. Create the Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Tarayıcı dilini veya localStorage'da kayıtlı dili kontrol et
    const storedLang = localStorage.getItem('flyaw_language');
    if (storedLang && supportedLanguages.includes(storedLang)) {
      return storedLang;
    }
    // Tarayıcının tercih ettiği dili al (sadece ilk iki harfi, örn: "en-US" -> "en")
    const browserLang = navigator.language.split('-')[0];
    return supportedLanguages.includes(browserLang) ? browserLang : 'en'; // Varsayılan dil 'en'
  });

  // Dil değiştirme fonksiyonu
  const changeLanguage = (lang) => {
    if (supportedLanguages.includes(lang)) {
      setLanguage(lang);
    } else {
      console.warn(`Language "${lang}" is not supported. Falling back to "en".`);
      setLanguage('en'); // Desteklenmeyen bir dil gelirse İngilizce'ye dön
    }
  };

  // Dil değiştiğinde localStorage'a kaydet ve HTML lang attribute'unu güncelle
  useEffect(() => {
    localStorage.setItem('flyaw_language', language);
    document.documentElement.lang = language; // SEO ve erişilebilirlik için önemli
  }, [language]);

  // Mevcut dile ait çevirileri sağla
  const currentTranslations = translations[language] || translations['en'];

  // t fonksiyonu: çeviri anahtarını alır ve mevcut dildeki karşılığını döndürür
  // Örnek kullanım: t('home.title')
  const t = (key) => {
    // İç içe objelerden değeri almak için (örn: "home.title")
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== 'undefined' ? obj[k] : key), currentTranslations);
  };

  const value = {
    language,
    supportedLanguages,
    changeLanguage,
    t, // Çeviri fonksiyonunu context'e ekliyoruz
    translations: currentTranslations, // Mevcut dile ait tüm çevirileri de isterseniz doğrudan alabilirsiniz
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};