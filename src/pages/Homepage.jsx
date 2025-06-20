// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import HeroSection from '../components/home/HeroSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ServicesOverview from '../components/home/ServicesOverview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToActionSection from '../components/home/CallToActionSection'; // Yeni import

const HomePage = () => {
  const { t } = useTranslations();

  return (
    <>
      <Helmet>
        <title>{t('navbar.home')}</title>
        <meta
          name="description"
          content={t('homePage.metaDescription', 'FlyAw Studios: Dijital dünya için yenilikçi yazılım çözümleri, web ve mobil uygulama geliştirme, UI/UX tasarım ve danışmanlık hizmetleri.')}
        />
      </Helmet>

      <HeroSection />
      <FeaturedProjects />
      <ServicesOverview />
      <TestimonialsSection />
      <CallToActionSection /> {/* Yeni bölüm eklendi */}

      {/* Ana sayfanın sonuna ulaştık, artık "daha fazla bölüm yakında" mesajına gerek yok. */}
      {/* İsterseniz Footer'dan önce küçük bir ayırıcı veya boşluk bırakabilirsiniz. */}
    </>
  );
};

export default HomePage;