// src/data/testimonialsData.js
// Müşteri resimleri için public/images/clients/ klasörünü oluşturup
// client1.jpg, client2.jpg gibi görseller eklediğinizi varsayalım.

export const testimonialsData = [
  {
    id: 'testimonial1',
    name: 'Ayşe Yılmaz',
    companyKey: 'testimonials.clientOne.company', // i18n için (örn: "ABC Teknoloji CEO")
    avatar: '/images/clients/client1.jpg', // public klasöründeki yol
    commentKey: 'testimonials.clientOne.comment', // i18n için
    rating: 5, // 1-5 arası yıldız (opsiyonel)
  },
  {
    id: 'testimonial2',
    name: 'John Doe',
    companyKey: 'testimonials.clientTwo.company', // i18n için (örn: "Doe Solutions, Founder")
    avatar: '/images/clients/client2.jpg',
    commentKey: 'testimonials.clientTwo.comment',
    rating: 5,
  },
  {
    id: 'testimonial3',
    name: 'Fatma Demir',
    companyKey: 'testimonials.clientThree.company', // i18n için (örn: "Startup X Proje Yöneticisi")
    avatar: null, // Avatarı olmayan durumlar için (belki varsayılan bir ikon gösterilir)
    commentKey: 'testimonials.clientThree.comment',
    rating: 4,
  },
  // Daha fazla yorum eklenebilir
];