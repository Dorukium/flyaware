// src/pages/ServiceDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import { allServicesData } from '../data/servicesData'; // Tüm hizmetleri içeren veri
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Örnek olarak kullanılabilecek ikonlar (hizmet detaylarında)
import { faBullseye, faProjectDiagram, faTools, faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ServiceDetailPage = () => {
  const { t } = useTranslations();
  const { slug } = useParams(); // URL'den 'slug' parametresini al

  // Veri dosyasından 'slug' ile eşleşen hizmeti bul
  const service = allServicesData.find((s) => s.slug === slug);

  // Hizmet bulunamazsa, kullanıcıyı 404 sayfasına (veya Hizmetler sayfasına) yönlendir
  if (!service) {
    // Basit bir yönlendirme, idealde bir 404 sayfası olurdu.
    // return <Navigate to="/services" replace />;
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">{t('serviceDetailPage.notFound.title', 'Service Not Found')}</h1>
            <p className="text-lg mb-8">{t('serviceDetailPage.notFound.message', 'The service you are looking for does not exist or may have been moved.')}</p>
            <Link to="/services" className="text-brand-primary hover:underline">
                {t('serviceDetailPage.notFound.backLink', 'Back to Services')}
            </Link>
        </div>
    );
  }

  // Hizmetin detaylarını i18n dosyalarınızdan çekmek için anahtarlar oluşturun
  // Örneğin: service.detailsKey = `servicesData.${service.id}.details`
  //          service.processKey = `servicesData.${service.id}.process`
  //          service.technologiesKey = `servicesData.${service.id}.technologies`
  // Bu anahtarları servicesData.js'e veya doğrudan buraya ekleyebilirsiniz.
  // Şimdilik genel yer tutucu metinler kullanalım.

  const serviceTitle = t(service.titleKey, 'Service Title');
  const serviceShortDescription = t(service.shortDescriptionKey, 'Short service description.');
  
  // Örnek detaylı içerik (bu kısımları i18n'den veya Markdown'dan çekmek daha iyi olur)
  const detailedContent = {
    description: t(`servicesData.${service.id}.detailedDescription`, `This is a detailed description for ${serviceTitle}. We delve deep into the specifics of how this service can benefit your business, covering various aspects and potential outcomes. Our approach is always tailored to meet your unique requirements, ensuring optimal results and satisfaction.`),
    keyFeatures: t(`servicesData.${service.id}.keyFeatures`, 'Custom Solutions,Scalable Architecture,User-Centric Design,Agile Development,Ongoing Support').split(','),
    process: [
      t(`servicesData.${service.id}.process.step1`, 'Discovery & Planning'),
      t(`servicesData.${service.id}.process.step2`, 'Design & Prototyping'),
      t(`servicesData.${service.id}.process.step3`, 'Development & Testing'),
      t(`servicesData.${service.id}.process.step4`, 'Deployment & Launch'),
      t(`servicesData.${service.id}.process.step5`, 'Post-Launch Support'),
    ],
    // Bu örnekler için i18n dosyalarınıza ilgili anahtarları eklemeniz gerekir.
    // Örn: "servicesData.web-dev.detailedDescription": "Web geliştirme hizmetimiz...",
    //      "servicesData.web-dev.keyFeatures": "Özel Çözümler,Ölçeklenebilir Mimari,...", (virgülle ayrılmış)
    //      "servicesData.web-dev.process.step1": "Keşif & Planlama", ...
  };


  return (
    <>
      <Helmet>
        <title>{serviceTitle} - FlyAw Studios</title>
        <meta name="description" content={serviceShortDescription} />
        {/* Daha spesifik Open Graph ve Twitter Card etiketleri eklenebilir */}
      </Helmet>

      <div className="bg-brand-primary dark:bg-gray-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {service.icon && <FontAwesomeIcon icon={service.icon} size="3x" className="mb-4" />}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            {serviceTitle}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-blue-100 dark:text-gray-300 max-w-2xl mx-auto">
            {serviceShortDescription}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Ana İçerik Alanı */}
          <main className="md:col-span-2 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              {t('serviceDetailPage.aboutTitle', `About ${serviceTitle}`)}
            </h2>
            <p>{detailedContent.description}</p>

            {detailedContent.keyFeatures && detailedContent.keyFeatures.length > 0 && (
              <>
                <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
                  {t('serviceDetailPage.keyFeaturesTitle', 'Key Features')}
                </h3>
                <ul className="list-none p-0">
                  {detailedContent.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start mb-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <span>{feature.trim()}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {detailedContent.process && detailedContent.process.length > 0 && (
              <>
                <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
                  {t('serviceDetailPage.ourProcessTitle', 'Our Process')}
                </h3>
                <div className="space-y-4">
                  {detailedContent.process.map((step, index) => (
                    <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg text-brand-primary dark:text-brand-secondary">
                        {t('serviceDetailPage.step', 'Step {index}', { index: index + 1 })}: {step}
                      </h4>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* Buraya teknoloji yığını, vaka çalışmaları gibi bölümler eklenebilir */}
          </main>

          {/* Kenar Çubuğu (Diğer Hizmetler, CTA) */}
          <aside className="md:col-span-1 space-y-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('serviceDetailPage.otherServicesTitle', 'Other Services')}
              </h3>
              <ul className="space-y-2">
                {allServicesData
                  .filter((s) => s.slug !== slug) // Mevcut hizmeti hariç tut
                  .slice(0, 5) // İlk 5'ini göster
                  .map((otherService) => (
                    <li key={otherService.id}>
                      <Link
                        to={`/services/${otherService.slug}`}
                        className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary hover:underline group"
                      >
                        <span>{t(otherService.titleKey)}</span>
                        <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="p-6 bg-brand-secondary text-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">
                {t('serviceDetailPage.sidebarCta.title', 'Ready to Get Started?')}
              </h3>
              <p className="text-sm mb-5">
                {t('serviceDetailPage.sidebarCta.subtitle', 'Let us help you achieve your business goals with our expert services.')}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-brand-primary font-semibold py-2 px-6 rounded-md hover:bg-gray-100 transition-colors"
              >
                {t('serviceDetailPage.sidebarCta.button', 'Contact Us')}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;