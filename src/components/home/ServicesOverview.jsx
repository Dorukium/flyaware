// src/components/home/ServicesOverview.jsx
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { servicesOverviewData } from '../../data/servicesData'; // Örnek hizmet verilerini import ediyoruz
import ServiceCard from '../services/ServiceCard'; // Hizmet kartı bileşenini import ediyoruz
import Button from '../ui/Button'; // Genel Button bileşenimiz

const ServicesOverview = () => {
  const { t } = useTranslations();
  // Ana sayfada gösterilecek hizmet sayısı (örneğin ilk 3-4 hizmet)
  const servicesToShow = servicesOverviewData.slice(0, 3); // İlk 3 hizmeti gösterelim

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {t('servicesData.sectionTitle', 'Our Core Services')}
            {/* 'servicesData.sectionTitle' anahtarını i18n dosyalarınıza ekleyin (eğer farklı bir başlık isterseniz) */}
            {/* Veya doğrudan 'Our Services' gibi bir başlık da kullanabilirsiniz */}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('servicesData.sectionSubtitle', 'We offer a wide range of services to bring your digital ideas to life.')}
            {/* servicesData.sectionSubtitle anahtarını i18n dosyalarınıza ekleyin */}
          </p>
        </div>

        {servicesToShow.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {servicesToShow.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t('servicesData.noServices', 'No services to display at the moment.')}
            {/* servicesData.noServices anahtarını i18n dosyalarınıza ekleyin */}
          </p>
        )}

        {servicesOverviewData.length > 3 && ( // Eğer 3'ten fazla hizmet varsa "Tüm Hizmetler" butonu
          <div className="text-center mt-12 md:mt-16">
            <Button to="/services" variant="primary" size="lg">
              {t('servicesData.viewAllServices', 'View All Services')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesOverview;