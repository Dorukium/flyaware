// src/components/home/CallToActionSection.jsx
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import Button from '../ui/Button'; // Genel Button bileşenimiz

const CallToActionSection = () => {
  const { t } = useTranslations();

  return (
    <section className="bg-brand-primary dark:bg-gray-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
          {t('cta.title', "Ready to Start Your Next Project?")}
          {/* cta.title anahtarını i18n dosyalarınıza ekleyin */}
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          {t('cta.subtitle', "Let's discuss how FlyAw Studios can help you achieve your digital goals. Get in touch with us today for a free consultation.")}
          {/* cta.subtitle anahtarını i18n dosyalarınıza ekleyin */}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            to="/contact" // İletişim sayfasına yönlendirme
            variant="primary" // Veya farklı bir vurgu rengi
            size="lg"
            className="bg-white hover:bg-gray-100 text-brand-primary dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-gray-900 shadow-lg transform hover:scale-105 px-8"
          >
            {t('cta.contactUsButton', "Contact Us")}
            {/* cta.contactUsButton anahtarını i18n dosyalarınıza ekleyin */}
          </Button>
          <Button
            to="/services" // Hizmetler sayfasına yönlendirme
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-primary dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900 transform hover:scale-105 px-8"
          >
            {t('cta.ourServicesButton', "Our Services")}
            {/* cta.ourServicesButton anahtarını i18n dosyalarınıza ekleyin */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;