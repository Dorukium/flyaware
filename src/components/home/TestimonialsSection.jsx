// src/components/home/TestimonialsSection.jsx
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { testimonialsData } from '../../data/testimonialsData';
import TestimonialCard from './TestimonialCard';
// Opsiyonel: Slider kütüphanesi importları (eğer kullanılacaksa)
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules'; // Swiper v10 ve üzeri için

const TestimonialsSection = () => {
  const { t } = useTranslations();

  // Ana sayfada gösterilecek yorum sayısı
  const testimonialsToShow = testimonialsData.slice(0, 3); // İlk 3 yorumu göster

  if (!testimonialsToShow || testimonialsToShow.length === 0) {
    return null; // Eğer gösterilecek yorum yoksa bölümü render etme
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {t('testimonials.sectionTitle', 'What Our Clients Say')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('testimonials.sectionSubtitle', 'Real stories from satisfied partners who chose FlyAw Studios.')}
          </p>
        </div>

        {/* Basit Grid Yapısı (Slider yerine) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonialsToShow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* // Örnek Swiper Slider Entegrasyonu (Kurulum ve ek CSS importları gerektirir)
          // npm install swiper
          <Swiper
            modules={[Pagination]} // Swiper v10+ için
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-12" // Pagination için altta boşluk
          >
            {testimonialsToShow.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto"> 
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        */}
      </div>
    </section>
  );
};

export default TestimonialsSection;