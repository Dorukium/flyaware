// src/components/home/HeroSection.jsx
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import Button from '../ui/Button'; // Oluşturduğumuz Button bileşenini import ediyoruz
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Örnek ikon (Tailwind Labs tarafından)

// @heroicons/react kurulumu gerekebilir: npm install @heroicons/react veya yarn add @heroicons/react
// Eğer kurduysanız package.json'a eklendiğinden emin olun.
// Eğer ikon kütüphanesi kullanmak istemiyorsanız, bu importu ve ikonu kaldırabilirsiniz.
// Veya FontAwesome kullanabilirsiniz: import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// ve <FontAwesomeIcon icon={faArrowRight} /> şeklinde kullanabilirsiniz.

const HeroSection = () => {
  const { t } = useTranslations();

  return (
    <section className="bg-gradient-to-r from-blue-600 via-brand-primary to-indigo-700 dark:from-gray-800 dark:via-dark-bg dark:to-gray-900 text-white py-20 md:py-32 rounded-lg shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
          {t('homePage.heroTitle')}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          {t('homePage.heroSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            to="/services" // Hizmetler sayfasına yönlendirme
            variant="primary"
            size="lg"
            className="bg-white hover:bg-gray-100 text-brand-primary dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-gray-900 shadow-lg transform hover:scale-105"
            // rightIcon={<FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />} // FontAwesome örneği
            rightIcon={<ArrowRightIcon className="h-5 w-5" />} // Heroicons örneği
          >
            {t('homePage.learnMore')}
          </Button>
          <Button
            to="/contact" // İletişim sayfasına yönlendirme
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-primary dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900 transform hover:scale-105"
          >
            {t('contactPage.title')} {/* "Bize Ulaşın" */}
          </Button>
        </div>
        {/* Opsiyonel: Animasyonlu bir "aşağı kaydır" ikonu eklenebilir */}
      </div>
    </section>
  );
};

export default HeroSection;