// src/data/projectsData.js

// Proje resimleri için public/images/projects/slug-of-project/ klasör yapısını kullanabilirsiniz.
// Örn: public/images/projects/kurumsal-web-sitesi-revizyonu/main.jpg
//      public/images/projects/kurumsal-web-sitesi-revizyonu/gallery1.jpg

export const allProjectsData = [
  {
    id: 'flyaw-proj-001', // Her proje için benzersiz bir ID
    slug: 'kurumsal-web-sitesi-revizyonu', // URL dostu, benzersiz slug
    isFeatured: true, // Ana sayfada öne çıkıp çıkmayacağını belirtir
    image: '/images/projects/kurumsal-web-sitesi-revizyonu/main.jpg', // Ana görsel
    galleryImages: [ // Proje detay sayfasındaki galeri için (opsiyonel)
      '/images/projects/kurumsal-web-sitesi-revizyonu/gallery1.jpg',
      '/images/projects/kurumsal-web-sitesi-revizyonu/gallery2.jpg',
    ],
    titleKey: 'projectsData.kurumsalWebRevizyonu.title',
    categoryKey: 'projectsData.categories.webDevelopment', // Ortak kategori anahtarları kullanmak daha iyi
    shortDescriptionKey: 'projectsData.kurumsalWebRevizyonu.shortDescription',
    longDescriptionKey: 'projectsData.kurumsalWebRevizyonu.longDescription', // Detaylı açıklama
    clientNameKey: 'projectsData.kurumsalWebRevizyonu.clientName', // Müşteri adı
    timelineKey: 'projectsData.kurumsalWebRevizyonu.timeline', // Proje süresi
    keyFeatures: [ // Anahtar özellikler (doğrudan dizi veya i18n anahtarı olabilir)
      'projectsData.kurumsalWebRevizyonu.feature1',
      'projectsData.kurumsalWebRevizyonu.feature2',
      'projectsData.kurumsalWebRevizyonu.feature3',
    ],
    technologiesUsed: [ // Kullanılan teknolojiler (doğrudan dizi)
      'React',
      'Next.js',
      'Tailwind CSS',
      'Headless CMS (Strapi)',
      'GraphQL',
    ],
    liveLink: 'https://example-client.com', // Canlı site linki
    repoLink: null, // GitHub/GitLab repo linki (varsa, yoksa null)
    // testimonialId: 'testimonial1', // İlgili müşteri yorumunun ID'si (testimonialsData.js'ten)
  },
  {
    id: 'flyaw-proj-002',
    slug: 'e-ticaret-platformu-mobil',
    isFeatured: true,
    image: '/images/projects/e-ticaret-platformu-mobil/main.jpg',
    galleryImages: [
      '/images/projects/e-ticaret-platformu-mobil/screen1.jpg',
      '/images/projects/e-ticaret-platformu-mobil/screen2.jpg',
      '/images/projects/e-ticaret-platformu-mobil/screen3.jpg',
    ],
    titleKey: 'projectsData.eTicaretMobil.title',
    categoryKey: 'projectsData.categories.mobileDevelopment',
    shortDescriptionKey: 'projectsData.eTicaretMobil.shortDescription',
    longDescriptionKey: 'projectsData.eTicaretMobil.longDescription',
    clientNameKey: 'projectsData.eTicaretMobil.clientName',
    timelineKey: 'projectsData.eTicaretMobil.timeline',
    keyFeatures: [
      'projectsData.eTicaretMobil.feature1',
      'projectsData.eTicaretMobil.feature2',
      'projectsData.eTicaretMobil.feature3',
      'projectsData.eTicaretMobil.feature4',
    ],
    technologiesUsed: [
      'React Native',
      'Firebase',
      'Redux',
      'Stripe SDK',
    ],
    liveLink: null, // Belki uygulama mağaza linkleri
    // appStoreLink: 'https://...',
    // playStoreLink: 'https://...',
  },
  {
    id: 'flyaw-proj-003',
    slug: 'veri-analitik-paneli',
    isFeatured: false, // Bu proje ana sayfada öne çıkmasın
    image: '/images/projects/veri-analitik-paneli/dashboard.jpg',
    galleryImages: [],
    titleKey: 'projectsData.veriAnalitik.title',
    categoryKey: 'projectsData.categories.webApplication',
    shortDescriptionKey: 'projectsData.veriAnalitik.shortDescription',
    longDescriptionKey: 'projectsData.veriAnalitik.longDescription',
    clientNameKey: 'projectsData.veriAnalitik.clientName',
    timelineKey: 'projectsData.veriAnalitik.timeline',
    keyFeatures: [
      'projectsData.veriAnalitik.feature1',
      'projectsData.veriAnalitik.feature2',
    ],
    technologiesUsed: [
      'Vue.js',
      'Node.js (Express)',
      'MongoDB',
      'D3.js',
      'Socket.io',
    ],
    liveLink: '#', // Demo linki olabilir
  },
  {
    id: 'flyaw-proj-004',
    slug: 'ux-ui-danismanlik-projesi',
    isFeatured: true,
    image: '/images/projects/ux-ui-danismanlik-projesi/moodboard.jpg',
    galleryImages: [],
    titleKey: 'projectsData.uxDanismanlik.title',
    categoryKey: 'projectsData.categories.uiUxDesign',
    shortDescriptionKey: 'projectsData.uxDanismanlik.shortDescription',
    longDescriptionKey: 'projectsData.uxDanismanlik.longDescription',
    clientNameKey: 'projectsData.uxDanismanlik.clientName',
    timelineKey: 'projectsData.uxDanismanlik.timeline',
    keyFeatures: [
      'projectsData.uxDanismanlik.feature1',
      'projectsData.uxDanismanlik.feature2',
    ],
    technologiesUsed: [ // Bu tür bir projede "araçlar" daha uygun olabilir
      'Figma',
      'Adobe XD',
      'User Research',
      'Prototyping',
    ],
    liveLink: null,
  }
  // ... İhtiyaç duydukça daha fazla proje ekleyebilirsiniz
];

// Ana sayfada gösterilecek öne çıkan projeler
export const featuredProjectsData = allProjectsData.filter(project => project.isFeatured);

// Önemli: Yukarıdaki tüm ...Key alanları için i18n dosyalarınızda (en.json, tr.json vb.)
// karşılık gelen çevirileri eklemeniz gerekmektedir. Örneğin:
/*
  // en.json içinde:
  "projectsData": {
    "categories": {
      "webDevelopment": "Web Development",
      "mobileDevelopment": "Mobile Development",
      "webApplication": "Web Application",
      "uiUxDesign": "UI/UX Design"
    },
    "kurumsalWebRevizyonu": {
      "title": "Corporate Website Revamp",
      "shortDescription": "A complete overhaul of a legacy corporate website, focusing on modern UI/UX and performance.",
      "longDescription": "This project involved a comprehensive redesign and redevelopment... We implemented a headless CMS for easy content management...",
      "clientName": "Tech Solutions Inc.",
      "timeline": "4 Months",
      "feature1": "Responsive Design & Accessibility Compliance",
      "feature2": "SEO Optimization & Performance Tuning",
      "feature3": "Headless CMS Integration for easy content updates"
    },
    "eTicaretMobil": {
      "title": "E-commerce Mobile Platform",
      // ... diğer çeviriler ...
    },
    // ... diğer tüm projelerin çevirileri
  }
*/