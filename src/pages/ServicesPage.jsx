// src/pages/ServicesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import { allServicesData } from '../data/servicesData'; // Tüm hizmetleri içeren veri
import ServiceCard from '../components/services/ServiceCard'; // Daha önce oluşturduğumuz kart

const ServicesPage = () => {
  const { t } = useTranslations();

  return (
    <>
      <Helmet>
        <title>{t('navbar.services')} - FlyAw Studios</title>
        <meta
          name="description"
          content={t('servicesPage.metaDescription', 'Explore the comprehensive software development, design, and consulting services offered by FlyAw Studios.')}
          // servicesPage.metaDescription anahtarını i18n dosyalarınıza ekleyin
        />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Sayfa Başlığı */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            {t('servicesPage.title', 'Our Services')}
            {/* servicesPage.title anahtarı i18n'de zaten olmalı, yoksa ekleyin */}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('servicesPage.subtitle', 'Delivering excellence and innovation in every digital solution we craft. Discover how we can help your business thrive.')}
            {/* servicesPage.subtitle anahtarını i18n dosyalarınıza ekleyin */}
          </p>
        </header>

        {/* Hizmetler Listesi */}
        {allServicesData && allServicesData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {allServicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500 dark:text-gray-400">
            {t('servicesPage.noServicesAvailable', 'Currently, no services are listed. Please check back soon!')}
            {/* servicesPage.noServicesAvailable anahtarını i18n dosyalarınıza ekleyin */}
          </p>
        )}

        {/* Opsiyonel: CTA veya İletişim Bölümü */}
        <section className="mt-16 md:mt-24 text-center py-10 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('servicesPage.cta.title', "Have a Specific Need?")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            {t('servicesPage.cta.subtitle', "If you don't see a service listed or have a unique requirement, don't hesitate to reach out. We love a good challenge!")}
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('servicesPage.cta.button', "Contact Us for Custom Solutions")}
          </a>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;