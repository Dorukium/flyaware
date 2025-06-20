// src/pages/ProjectsPage.jsx
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import { allProjectsData } from '../data/projectsData'; // Tüm proje verileri
import ProjectCard from '../components/projects/ProjectCard'; // Proje kartı
import ProjectFilter from '../components/projects/ProjectFilter'; // Filtreleme bileşeni

const ProjectsPage = () => {
  const { t } = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState('all'); // Başlangıçta tüm kategoriler seçili

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return allProjectsData;
    }
    return allProjectsData.filter(project => project.categoryKey === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Helmet>
        <title>{t('navbar.projects')} - FlyAw Studios</title>
        <meta
          name="description"
          content={t('projectsPage.metaDescription', 'Discover the portfolio of FlyAw Studios. A showcase of our innovative web, mobile, and software development projects.')}
          // projectsPage.metaDescription anahtarını i18n dosyalarınıza ekleyin
        />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Sayfa Başlığı */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            {t('projectsPage.title', 'Our Projects')}
            {/* projectsPage.title anahtarını i18n dosyalarınıza ekleyin */}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projectsPage.subtitle', 'A glimpse into the diverse range of solutions we have successfully delivered to our clients.')}
            {/* projectsPage.subtitle anahtarını i18n dosyalarınıza ekleyin */}
          </p>
        </header>

        {/* Filtreleme Bölümü */}
        <ProjectFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Projeler Listesi */}
        {filteredProjects && filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500 dark:text-gray-400 py-10">
            {selectedCategory === 'all'
              ? t('projectsPage.noProjectsAvailable', 'No projects are listed at the moment. Please check back soon!')
              : t('projectsPage.noProjectsInCategory', 'No projects found in this category. Try a different filter!')
            }
            {/* ilgili anahtarları i18n dosyalarınıza ekleyin */}
          </p>
        )}
      </div>
    </>
  );
};

export default ProjectsPage;