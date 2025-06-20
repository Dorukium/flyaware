// src/data/servicesData.js
import { faLaptopCode, faMobileAlt, faPalette, faTasks, faHeadset, faLightbulb } from '@fortawesome/free-solid-svg-icons';
// Font Awesome ikonlarını import ediyoruz.

export const servicesOverviewData = [
  {
    id: 'web-dev',
    slug: 'web-development', // URL ve anahtar için
    icon: faLaptopCode,
    titleKey: 'servicesData.webDevelopment.title', // i18n için
    shortDescriptionKey: 'servicesData.webDevelopment.shortDescription', // i18n için
    detailsLink: '/services/web-development',
  },
  {
    id: 'mobile-app',
    slug: 'mobile-app-development',
    icon: faMobileAlt,
    titleKey: 'servicesData.mobileAppDevelopment.title',
    shortDescriptionKey: 'servicesData.mobileAppDevelopment.shortDescription',
    detailsLink: '/services/mobile-app-development',
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    icon: faPalette,
    titleKey: 'servicesData.uiUxDesign.title',
    shortDescriptionKey: 'servicesData.uiUxDesign.shortDescription',
    detailsLink: '/services/ui-ux-design',
  },
  // Ana sayfada daha fazla hizmet özeti göstermek isterseniz ekleyebilirsiniz.
  // Örneğin:
  // {
  //   id: 'consulting',
  //   slug: 'technical-consulting',
  //   icon: faLightbulb,
  //   titleKey: 'servicesData.technicalConsulting.title',
  //   shortDescriptionKey: 'servicesData.technicalConsulting.shortDescription',
  //   detailsLink: '/services/technical-consulting',
  // },
];

// Tüm hizmetler sayfasında kullanılacak daha kapsamlı bir liste
export const allServicesData = [
    ...servicesOverviewData, // Ana sayfadakileri de içersin
    {
        id: 'software-dev',
        slug: 'custom-software-development',
        icon: faTasks, // Değiştirebilirsiniz
        titleKey: 'servicesData.customSoftware.title',
        shortDescriptionKey: 'servicesData.customSoftware.shortDescription',
        detailsLink: '/services/custom-software-development',
    },
    {
        id: 'consulting',
        slug: 'technical-consulting',
        icon: faLightbulb,
        titleKey: 'servicesData.technicalConsulting.title',
        shortDescriptionKey: 'servicesData.technicalConsulting.shortDescription',
        detailsLink: '/services/technical-consulting',
    },
    {
        id: 'support',
        slug: 'support-maintenance',
        icon: faHeadset,
        titleKey: 'servicesData.supportMaintenance.title',
        shortDescriptionKey: 'servicesData.supportMaintenance.shortDescription',
        detailsLink: '/services/support-maintenance',
    },
    // ... diğer tüm hizmetler
];