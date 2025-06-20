// src/components/services/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../ui/Button'; // Genel Button bileşenimiz

const ServiceCard = ({ service }) => {
  const { t } = useTranslations();

  if (!service) return null;

  const { icon, titleKey, shortDescriptionKey, detailsLink, slug } = service;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center items-center h-full transform hover:-translate-y-1">
      {icon && (
        <div className="mb-5 text-brand-primary dark:text-brand-secondary p-4 bg-blue-100 dark:bg-gray-700 rounded-full inline-block">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
      )}
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
        <Link to={detailsLink || `/services/${slug}`} className="hover:underline">
          {t(titleKey, 'Service Title')}
        </Link>
      </h3>
      {shortDescriptionKey && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
          {t(shortDescriptionKey, 'Short service description.')}
        </p>
      )}
      <div className="mt-auto w-full">
        <Button to={detailsLink || `/services/${slug}`} variant="ghost" className="w-full sm:w-auto">
          {t('servicesData.learnMore', 'Learn More')}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;