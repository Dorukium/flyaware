// src/data/blogData.js
// Blog görselleri için public/images/blog/slug-of-post/ klasörünü kullanabilirsiniz.
// Örn: public/images/blog/ilk-blog-yazimiz/main.jpg

// Yazarlar için ayrı bir obje tutabiliriz veya her posta direkt ekleyebiliriz.
// export const blogAuthors = {
//   author1: {
//     nameKey: 'blogAuthors.janeDoe.name',
//     avatar: '/images/authors/jane.jpg',
//     bioKey: 'blogAuthors.janeDoe.bio',
//   },
// };

export const blogPostsData = [
  {
    id: 'blog-post-001',
    slug: 'modern-web-gelistirme-trendleri-2025',
    titleKey: 'blogPosts.postOne.title',
    author: { // Yazar bilgilerini doğrudan ekleyebiliriz
      nameKey: 'blogAuthors.janeDoe.name', // i18n için
      avatarUrl: '/images/authors/jane.jpg', // public/images/authors/jane.jpg
    },
    publishDate: '2025-05-15', // YYYY-MM-DD formatında
    image: '/images/blog/modern-web-gelistirme-trendleri-2025/cover.jpg',
    categoryKey: 'blogCategories.webDevelopment', // i18n için
    tags: ['Web Development', 'JavaScript', 'React', 'AI', '2025 Trends'],
    excerptKey: 'blogPosts.postOne.excerpt', // Kısa özet
    // Tam içerik için ya doğrudan markdown/html ya da i18n'den uzun bir metin çekilebilir.
    // Daha büyük projeler için Markdown dosyalarından içerik yüklemek (örn: gray-matter + marked/react-markdown) daha iyidir.
    // Şimdilik i18n anahtarı olarak tutalım.
    contentKey: 'blogPosts.postOne.content',
    readingTimeKey: 'blogPosts.postOne.readingTime', // örn: "5 min read"
  },
  {
    id: 'blog-post-002',
    slug: 'etkili-ui-ux-tasariminin-temel-prensipleri',
    titleKey: 'blogPosts.postTwo.title',
    author: {
      nameKey: 'blogAuthors.johnSmith.name',
      avatarUrl: '/images/authors/john.jpg',
    },
    publishDate: '2025-04-28',
    image: '/images/blog/etkili-ui-ux-tasariminin-temel-prensipleri/main.jpg',
    categoryKey: 'blogCategories.uiUxDesign',
    tags: ['UI Design', 'UX Design', 'User Experience', 'Design Principles'],
    excerptKey: 'blogPosts.postTwo.excerpt',
    contentKey: 'blogPosts.postTwo.content',
    readingTimeKey: 'blogPosts.postTwo.readingTime', // örn: "7 min read"
  },
  {
    id: 'blog-post-003',
    slug: 'yazilim-projelerinde-basarili-musteri-iletisimi',
    titleKey: 'blogPosts.postThree.title',
    author: {
      nameKey: 'blogAuthors.janeDoe.name', // Aynı yazar olabilir
      avatarUrl: '/images/authors/jane.jpg',
    },
    publishDate: '2025-03-10',
    image: '/images/blog/yazilim-projelerinde-basarili-musteri-iletisimi/header.jpg',
    categoryKey: 'blogCategories.projectManagement',
    tags: ['Project Management', 'Client Communication', 'Software Development'],
    excerptKey: 'blogPosts.postThree.excerpt',
    contentKey: 'blogPosts.postThree.content',
    readingTimeKey: 'blogPosts.postThree.readingTime', // örn: "6 min read"
  },
  // ... daha fazla blog yazısı
];