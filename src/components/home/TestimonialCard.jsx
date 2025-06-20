// src/components/home/TestimonialCard.jsx
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'; // Dolu yıldız
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'; // Boş yıldız (opsiyonel, rating için)
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Varsayılan avatar

const TestimonialCard = ({ testimonial }) => {
  const { t } = useTranslations();

  if (!testimonial) return null;

  const { name, companyKey, avatar, commentKey, rating } = testimonial;

  // Yıldızları render etmek için bir yardımcı fonksiyon (opsiyonel)
  const renderStars = () => {
    if (!rating || rating < 1 || rating > 5) return null;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? fasStar : farStar}
          className="text-yellow-400 dark:text-yellow-500"
        />
      );
    }
    return <div className="flex items-center justify-center mb-3 space-x-1">{stars}</div>;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-5 shadow-md border-2 border-brand-primary dark:border-brand-secondary"
          loading="lazy"
        />
      ) : (
        <FontAwesomeIcon
          icon={faUserCircle}
          className="w-20 h-20 md:w-24 md:h-24 text-gray-300 dark:text-gray-600 mb-5"
        />
      )}
      <blockquote className="mb-4 flex-grow">
        {/* Rating yıldızları */}
        {renderStars()}
        <p className="text-gray-600 dark:text-gray-300 italic text-md md:text-lg leading-relaxed">
          "{t(commentKey, 'Client comment placeholder...')}"
        </p>
      </blockquote>
      <footer className="mt-auto">
        <p className="font-semibold text-lg text-gray-900 dark:text-white">{name}</p>
        {companyKey && (
          <p className="text-sm text-brand-primary dark:text-brand-secondary">
            {t(companyKey, 'Client company/title')}
          </p>
        )}
      </footer>
    </div>
  );
};

export default TestimonialCard;