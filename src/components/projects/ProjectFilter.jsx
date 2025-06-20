// src/components/projects/ProjectFilter.jsx
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { allProjectsData } from '../../data/projectsData'; // Kategori listesini çekmek için

const ProjectFilter = ({ selectedCategory, onCategoryChange }) => {
  const { t } = useTranslations();

  // Tüm projelerden benzersiz kategori anahtarlarını topla
  const categoryKeys = React.useMemo(() => {
    const keys = new Set(allProjectsData.map(p => p.categoryKey).filter(Boolean));
    return ['all', ...Array.from(keys)]; // 'all' seçeneğini başa ekle
  }, []);


  if (categoryKeys.length <= 2) { // Sadece 'all' ve bir kategori varsa filtre göstermeye değmez
    return null;
  }

  return (
    <div className="mb-8 md:mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
      {categoryKeys.map((categoryKey) => {
        const isActive = selectedCategory === categoryKey;
        const buttonText = categoryKey === 'all'
          ? t('projectsPage.filter.allCategories', 'All Projects')
          : t(categoryKey, categoryKey.split('.').pop().replace(/([A-Z])/g, ' $1').trim()); // "projectsData.projectOne.category" -> "Category" gibi

        return (
          <button
            key={categoryKey}
            onClick={() => onCategoryChange(categoryKey)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
              ${
                isActive
                  ? 'bg-brand-primary text-white shadow-md dark:bg-brand-secondary dark:text-gray-900'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }
            `}
          >
            {buttonText}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;