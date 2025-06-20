// src/components/home/FeaturedProjects.jsx
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { featuredProjectsData } from '../../data/projectsData'; // Örnek proje verilerini import ediyoruz
import ProjectCard from '../projects/ProjectCard'; // Proje kartı bileşenini import ediyoruz
import Button from '../ui/Button'; // Genel Button bileşenimiz

const FeaturedProjects = () => {
  const { t } = useTranslations();
  // Ana sayfada gösterilecek proje sayısı (örneğin ilk 3 proje)
  const projectsToShow = featuredProjectsData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {t('projectsData.sectionTitle', 'Featured Projects')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projectsData.sectionSubtitle', 'Take a look at some of our recent work and success stories.')}
            {/* projectsData.sectionSubtitle anahtarını i18n dosyalarınıza ekleyin */}
          </p>
        </div>

        {projectsToShow.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectsToShow.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t('projectsData.noProjects', 'No featured projects to display at the moment.')}
            {/* projectsData.noProjects anahtarını i18n dosyalarınıza ekleyin */}
          </p>
        )}

        {featuredProjectsData.length > 3 && ( // Eğer 3'ten fazla proje varsa "Tümünü Gör" butonu
          <div className="text-center mt-12 md:mt-16">
            <Button to="/projects" variant="primary" size="lg">
              {t('projectsData.viewAllProjects', 'View All Projects')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;