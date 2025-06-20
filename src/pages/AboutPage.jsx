// src/pages/AboutPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
// İleride eklenebilecek alt bileşenler için yer tutucular:
// import TeamSection from '../components/about/TeamSection';
// import ValuesSection from '../components/about/ValuesSection';

// Hakkımızda sayfası için görselleri public/images/about/ altına ekleyebilirsiniz.
// Örneğin: public/images/about/studio_environment.jpg
//          public/images/about/team_photo.jpg (eğer ekip bölümü eklerseniz)

const AboutPage = () => {
  const { t } = useTranslations();

  return (
    <>
      <Helmet>
        <title>{t('navbar.about')} - FlyAw Studios</title>
        <meta
          name="description"
          content={t('aboutPage.metaDescription', 'Learn more about FlyAw Studios: our mission, vision, values, and the passionate team behind our innovative software solutions.')}
          // aboutPage.metaDescription anahtarını i18n dosyalarınıza ekleyin
        />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Sayfa Başlığı */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            {t('aboutPage.title', 'About FlyAw Studios')}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('aboutPage.subtitle', 'Crafting the future of digital experiences, one line of code at a time.')}
            {/* aboutPage.subtitle anahtarını i18n dosyalarınıza ekleyin */}
          </p>
        </header>

        {/* Stüdyo Hikayesi / Misyon ve Vizyon Bölümü */}
        <section className="mb-12 md:mb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                {t('aboutPage.storyTitle', 'Our Story & Mission')}
              </h2>
              <p>
                {t('aboutPage.storyP1', 'FlyAw Studios was born from a shared passion for innovation and a relentless pursuit of technological excellence. We saw a gap where brilliant ideas met a lack of technical execution, and we decided to bridge it. Our mission is to empower businesses and individuals by transforming their visions into robust, scalable, and user-centric digital products.')}
              </p>
              <p>
                {t('aboutPage.storyP2', 'We believe in the power of collaboration, transparency, and continuous learning. Every project is an opportunity to innovate, to challenge ourselves, and to deliver outstanding results that drive real-world impact.')}
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
                {t('aboutPage.visionTitle', 'Our Vision')}
              </h3>
              <p>
                {t('aboutPage.visionP1', 'To be a globally recognized leader in software development, known for our innovative solutions, commitment to quality, and a client-first approach. We aim to shape the digital landscape by creating technology that is not only powerful but also accessible and intuitive.')}
              </p>
            </div>
            <div className="text-center">
              {/* Buraya stüdyonuzla ilgili bir görsel veya illüstrasyon ekleyebilirsiniz */}
              <img
                src="/images/about/studio_concept.jpg" // Örnek görsel yolu
                alt={t('aboutPage.studioImageAlt', 'FlyAw Studios - Innovative workspace concept')}
                className="rounded-lg shadow-xl mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Değerlerimiz Bölümü (Opsiyonel, ValuesSection bileşeni ile de yapılabilir) */}
        <section className="mb-12 md:mb-20 py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              {t('aboutPage.valuesTitle', 'Our Core Values')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4">
            {[
              {
                titleKey: 'aboutPage.valueInnovation.title',
                descriptionKey: 'aboutPage.valueInnovation.description',
                icon: '💡', // Basit emoji ikon veya FontAwesome
              },
              {
                titleKey: 'aboutPage.valueQuality.title',
                descriptionKey: 'aboutPage.valueQuality.description',
                icon: '🌟',
              },
              {
                titleKey: 'aboutPage.valueCollaboration.title',
                descriptionKey: 'aboutPage.valueCollaboration.description',
                icon: '🤝',
              },
              {
                titleKey: 'aboutPage.valueIntegrity.title',
                descriptionKey: 'aboutPage.valueIntegrity.description',
                icon: '🛡️',
              },
              {
                titleKey: 'aboutPage.valueClientFocus.title',
                descriptionKey: 'aboutPage.valueClientFocus.description',
                icon: '🎯',
              },
              {
                titleKey: 'aboutPage.valueLearning.title',
                descriptionKey: 'aboutPage.valueLearning.description',
                icon: '📚',
              },
            ].map((value) => (
              <div key={value.titleKey} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {t(value.titleKey, 'Value Title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t(value.descriptionKey, 'Value description.')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ekip Bölümü (Opsiyonel, TeamSection bileşeni ile de yapılabilir) */}
        {/* <TeamSection /> */}
        <section className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                {t('aboutPage.meetTeamTitle', 'Meet Our Passionate Team')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                {t('aboutPage.meetTeamSubtitle', "We are a group of dedicated professionals ready to bring your ideas to life. While we're preparing individual profiles, know that our collective expertise is our greatest asset.")}
            </p>
            {/* Buraya genel bir ekip fotoğrafı veya illüstrasyon eklenebilir */}
            {/* <img src="/images/about/team_generic.jpg" alt="FlyAw Studios Team" className="rounded-lg shadow-xl mx-auto max-w-3xl" loading="lazy" /> */}
        </section>

      </div>
    </>
  );
};

export default AboutPage;