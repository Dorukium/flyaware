// src/config/siteConfig.js
export const SITE_NAME = "FlyAw Studios";
export const SITE_URL = process.env.NODE_ENV === 'production' ? "https://www.flyawstudios.com" : "http://localhost:3000"; // Ortama göre URL
export const SITE_TITLE_TEMPLATE = `%s - ${SITE_NAME}`; // Helmet için başlık şablonu
export const DEFAULT_META_DESCRIPTION = "FlyAw Studios: Yenilikçi yazılım geliştirme, mobil ve web uygulamaları, UX/UI tasarım ve teknik danışmanlık.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`; // Varsayılan Open Graph resmi (public/images/og-default.jpg)

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/FlyAwStudios",
  linkedin: "https://linkedin.com/company/flyawstudios",
  github: "https://github.com/FlyAwStudios",
  // Diğer sosyal medya linkleri
};

export const CONTACT_INFO = {
  email: "info@flyawstudios.com",
  phone: "+90 (555) 123 4567",
  address: "123 Innovation Drive, Tech Park, Istanbul, Turkey",
};

// Bu dosyayı bileşenlerinizde import ederek kullanabilirsiniz.
// Örneğin Layout.jsx'te:
// import { SITE_TITLE_TEMPLATE, DEFAULT_META_DESCRIPTION } from '../config/siteConfig';
// <Helmet defaultTitle={SITE_NAME} titleTemplate={SITE_TITLE_TEMPLATE}>
//   <meta name="description" content={DEFAULT_META_DESCRIPTION} />
// </Helmet>