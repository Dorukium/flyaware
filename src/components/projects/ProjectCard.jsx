// src/components/projects/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import Button from '../ui/Button'; // Genel Button bileşenimiz
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'; // Harici link ikonu (opsiyonel)

const ProjectCard = ({ project }) => {
  const { t } = useTranslations();

  if (!project) return null;

  const { image, titleKey, categoryKey, shortDescriptionKey, tags, liveLink, detailsLink, slug } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      {image && (
        <Link to={detailsLink || `/projects/${slug}`} className="block aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={image}
            alt={t(titleKey, 'Project Image')}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy" // Lazy loading
          />
        </Link>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {categoryKey && (
          <p className="text-sm font-medium text-brand-primary dark:text-brand-secondary mb-1">
            {t(categoryKey, 'Category')}
          </p>
        )}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          <Link to={detailsLink || `/projects/${slug}`} className="hover:underline">
            {t(titleKey, 'Project Title')}
          </Link>
        </h3>
        {shortDescriptionKey && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
            {t(shortDescriptionKey, 'Short project description.')}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Button to={detailsLink || `/projects/${slug}`} variant="outline" size="sm">
            {t('projectsData.projectOne.details', 'View Details')}
          </Button>
          {liveLink && liveLink !== '#' && (
            <Button
              href={liveLink}
              variant="ghost"
              size="sm"
              className="text-brand-primary dark:text-brand-secondary"
              leftIcon={<ArrowTopRightOnSquareIcon className="h-4 w-4" />}
            >
              {t('projectsData.livePreview', 'Live Preview')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;