// src/pages/NotFoundPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

// Basit bir illüstrasyon veya animasyon için bir SVG veya bileşen eklenebilir.
// Örnek olarak public/images/404_illustration.svg dosyanız olduğunu varsayalım.
// import NotFoundIllustration from '../assets/images/404_illustration.svg'; // Eğer SVG'yi bileşen olarak import ediyorsanız

const NotFoundPage = () => {
  const { t } = useTranslations();

  return (
    <>
      <Helmet>
        <title>{t('notFoundPage.title', 'Page Not Found')} - FlyAw Studios</title>
        <meta name="robots" content="noindex, nofollow" /> {/* Bu sayfanın indexlenmesini engelle */}
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center min-h-[calc(100vh-15rem)] flex flex-col justify-center items-center">
        {/* Opsiyonel: İllüstrasyon */}
        {/* <img src="/images/404_illustration.svg" alt={t('notFoundPage.illustrationAlt', 'Lost astronaut illustration')} className="w-64 h-64 md:w-80 md:h-80 mb-8 animate-pulse" /> */}
        <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-400 dark:text-yellow-500 text-6xl md:text-8xl mb-6 animate-bounce" />

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 animate-fadeInUp">
          {t('notFoundPage.mainHeading', 'Oops! Page Not Found')}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {t('notFoundPage.subHeading', "The page you're looking for doesn't seem to exist. Maybe it was moved, or you mistyped the URL.")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-brand-primary hover:bg-blue-700 dark:bg-brand-secondary dark:hover:bg-blue-500 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-transform transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2 -ml-1 h-5 w-5" />
            {t('notFoundPage.goHomeButton', 'Go to Homepage')}
          </Link>
          {/* Opsiyonel: Bir arama sayfasına yönlendirme veya site içi arama özelliği eklenebilir */}
          {/*
          <Link
            to="/search" // Veya ana sayfadaki arama bölümüne
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-transform transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2 -ml-1 h-5 w-5" />
            {t('notFoundPage.searchButton', 'Search Site')}
          </Link>
          */}
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;