// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async'; // SEO ve sayfa başlığı için
import { useLanguage } from '../../contexts/LanguageContext'; // Dil bilgisi için

const Layout = ({ children }) => {
  const { language } = useLanguage(); // Mevcut dili al

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: language, // HTML etiketine mevcut dili ekle
        }}
        titleTemplate="%s - FlyAw Studios" // Sayfa başlık şablonu
        defaultTitle="FlyAw Studios - Innovative Software Development" // Varsayılan başlık
      >
        {/* Genel meta etiketleri buraya eklenebilir veya her sayfada özel olarak yönetilebilir */}
        <meta name="description" content="FlyAw Studios: Yenilikçi yazılım geliştirme, mobil ve web uygulamaları, UX/UI tasarım ve teknik danışmanlık." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FlyAw Studios - Innovative Software Development" />
        <meta property="og:description" content="FlyAw Studios: Yenilikçi yazılım geliştirme, mobil ve web uygulamaları, UX/UI tasarım ve teknik danışmanlık." />
        {/* <meta property="og:image" content="URL_TO_YOUR_MAIN_IMAGE" /> */}
        {/* <meta property="og:url" content="YOUR_WEBSITE_URL" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FlyAw Studios - Innovative Software Development" />
        <meta name="twitter:description" content="FlyAw Studios: Yenilikçi yazılım geliştirme, mobil ve web uygulamaları, UX/UI tasarım ve teknik danışmanlık." />
        {/* <meta name="twitter:image" content="URL_TO_YOUR_MAIN_IMAGE" /> */}
        {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */}
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Sayfa içeriğinin yüklendiğini belirtmek için bir yükleme göstergesi veya 
            React Suspense kullanılabilir, özellikle route tabanlı code splitting yapılıyorsa.
            Şimdilik doğrudan children'ı render ediyoruz.
          */}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;