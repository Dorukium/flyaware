// src/pages/ProjectDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import { allProjectsData } from '../data/projectsData';
import Button from '../components/ui/Button';
import { ArrowTopRightOnSquareIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'; // İkonlar

const ProjectDetailPage = () => {
  const { t } = useTranslations();
  const { slug } = useParams(); // URL'den 'slug' parametresini al

  const project = allProjectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">{t('projectDetailPage.notFound.title', 'Project Not Found')}</h1>
            <p className="text-lg mb-8">{t('projectDetailPage.notFound.message', 'The project you are looking for does not exist or may have been moved.')}</p>
            <Link to="/projects" className="text-brand-primary hover:underline">
                {t('projectDetailPage.notFound.backLink', 'Back to Projects')}
            </Link>
        </div>
    );
  }

  const projectTitle = t(project.titleKey, 'Project Title');
  const projectCategory = t(project.categoryKey, 'Category');
  // Detaylı açıklama için i18n anahtarı (projectsData.js'e eklenebilir veya burada tanımlanır)
  // Örn: project.longDescriptionKey = `projectsData.${project.id}.longDescription`
  const projectLongDescription = t(
    `projectsData.${project.id}.longDescription`, // Bu anahtarı i18n dosyalarınıza ve projectsData.js'e eklemeniz gerekebilir
    `This is a detailed description for ${projectTitle}. It covers the project's objectives, challenges, our approach, and the outstanding results achieved. We focused on delivering a high-quality solution tailored to the client's specific needs, utilizing cutting-edge technologies and best practices in development and design.`
  );

  // Örnek ek detaylar (bu kısımları projenize göre özelleştirin ve i18n'e taşıyın)
  const projectDetails = {
    client: t(`projectsData.${project.id}.clientName`, 'Confidential Client'),
    timeline: t(`projectsData.${project.id}.timeline`, '3 Months'),
    keyFeatures: t(`projectsData.${project.id}.keyFeatures`, 'Responsive Design,CMS Integration,API Development,User Authentication').split(','),
    // "projectsData.proj1.clientName": "ABC Corp",
    // "projectsData.proj1.timeline": "3 Ay",
    // "projectsData.proj1.keyFeatures": "Duyarlı Tasarım,CMS Entegrasyonu,API Geliştirme" (virgülle ayrılmış)
  };


  return (
    <>
      <Helmet>
        <title>{projectTitle} - FlyAw Studios Projects</title>
        <meta name="description" content={t(project.shortDescriptionKey, projectTitle)} />
        {/* Daha spesifik Open Graph ve Twitter Card etiketleri eklenebilir */}
      </Helmet>

      {/* Proje Başlık Bölümü */}
      {project.image && (
        <div className="relative h-64 md:h-96 bg-gray-700">
          <img
            src={project.image}
            alt={projectTitle}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10 md:pb-16">
            <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-1">{projectCategory}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              {projectTitle}
            </h1>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mb-8">
          <Link to="/projects" className="inline-flex items-center text-brand-primary dark:text-brand-secondary hover:underline">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            {t('projectDetailPage.backToProjects', 'Back to All Projects')}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Ana İçerik */}
          <main className="md:col-span-2 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              {t('projectDetailPage.overviewTitle', 'Project Overview')}
            </h2>
            <p>{projectLongDescription}</p>

            {/* Ek Görseller (Galeri/Slider olarak geliştirilebilir) */}
            {/*
            <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">Screenshots</h3>
            <div className="grid grid-cols-2 gap-4">
              <img src="/path/to/screenshot1.jpg" alt="Screenshot 1" className="rounded-lg shadow-md" />
              <img src="/path/to/screenshot2.jpg" alt="Screenshot 2" className="rounded-lg shadow-md" />
            </div>
            */}
          </main>

          {/* Kenar Çubuğu - Proje Bilgileri */}
          <aside className="md:col-span-1 space-y-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('projectDetailPage.detailsTitle', 'Project Details')}
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="font-medium text-gray-600 dark:text-gray-400">{t('projectDetailPage.clientLabel', 'Client')}:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">{projectDetails.client}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-600 dark:text-gray-400">{t('projectDetailPage.categoryLabel', 'Category')}:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">{projectCategory}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-600 dark:text-gray-400">{t('projectDetailPage.timelineLabel', 'Timeline')}:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">{projectDetails.timeline}</dd>
                </div>
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <dt className="font-medium text-gray-600 dark:text-gray-400">{t('projectDetailPage.techLabel', 'Technologies')}:</dt>
                    <dd className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 rounded-full">{tag}</span>
                      ))}
                    </dd>
                  </div>
                )}
                {projectDetails.keyFeatures && projectDetails.keyFeatures.length > 0 && (
                    <div>
                        <dt className="font-medium text-gray-600 dark:text-gray-400">{t('projectDetailPage.keyFeaturesLabel', 'Key Features')}:</dt>
                        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mt-1 space-y-1">
                            {projectDetails.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature.trim()}</li>
                            ))}
                        </ul>
                    </div>
                )}
              </dl>
              {project.liveLink && project.liveLink !== '#' && (
                <div className="mt-6">
                  <Button
                    href={project.liveLink}
                    variant="primary"
                    className="w-full"
                    leftIcon={<ArrowTopRightOnSquareIcon className="h-5 w-5" />}
                  >
                    {t('projectsData.livePreview', 'Visit Live Site')}
                  </Button>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;