// src/pages/ContactPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import ContactForm from '../components/contact/ContactForm'; // Form bileşenimiz
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Canlı destek widget'ı için (Örnek: Tawk.to)
// Bu widget'ı sayfa yüklendiğinde aktif hale getirmek için useEffect kullanılabilir.
// const TawkToWidget = () => {
//   React.useEffect(() => {
//     const s1 = document.createElement("script");
//     const s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'YOUR_TAWK_TO_SCRIPT_SRC'; // Tawk.to'dan alacağınız script URL'si
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
//   }, []);
//   return null; // Bu bileşen bir şey render etmez, sadece scripti ekler
// };


const ContactPage = () => {
  const { t } = useTranslations();

  const contactDetails = [
    {
      icon: faMapMarkerAlt,
      labelKey: 'contactPage.address.label',
      valueKey: 'contactPage.address.value',
      href: 'https://maps.google.com/?q=FlyAw+Studios+Istanbul+Turkey', // Örnek harita linki
    },
    {
      icon: faPhoneAlt,
      labelKey: 'contactPage.phone.label',
      valueKey: 'contactPage.phone.value',
      href: 'tel:+900000000000', // Örnek telefon numarası
    },
    {
      icon: faEnvelope,
      labelKey: 'contactPage.email.label',
      valueKey: 'contactPage.email.value',
      href: 'mailto:info@flyawstudios.com', // Örnek e-posta
    },
  ];

  const socialLinks = [
    { href: "https://github.com/flyawstudios", icon: faGithub, label: "GitHub" },
    { href: "https://linkedin.com/company/flyawstudios", icon: faLinkedin, label: "LinkedIn" },
    { href: "https://twitter.com/flyawstudios", icon: faTwitter, label: "Twitter" },
  ];

  return (
    <>
      <Helmet>
        <title>{t('navbar.contact')} - FlyAw Studios</title>
        <meta
          name="description"
          content={t('contactPage.metaDescription', 'Get in touch with FlyAw Studios. Contact us for project inquiries, collaborations, or any questions you may have. We are here to help!')}
        />
      </Helmet>
      {/* <TawkToWidget />  Eğer canlı destek widget'ı kullanacaksanız */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Sayfa Başlığı */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white animate-fadeInUp">
            {t('contactPage.title', 'Get In Touch')}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {t('contactPage.subtitle', "We're excited to hear from you! Whether you have a project idea, a question, or just want to say hello, feel free to reach out.")}
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* İletişim Formu Bölümü */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              {t('contactPage.formTitle', 'Send Us a Message')}
            </h2>
            <ContactForm />
          </div>

          {/* İletişim Bilgileri ve Harita Bölümü */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('contactPage.infoTitle', 'Contact Information')}
              </h2>
              <div className="space-y-5">
                {contactDetails.map((detail) => (
                  <div key={detail.labelKey} className="flex items-start group">
                    <FontAwesomeIcon
                      icon={detail.icon}
                      className="text-brand-primary dark:text-brand-secondary h-6 w-6 mr-4 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                        {t(detail.labelKey, 'Label')}
                      </h3>
                      <a
                        href={detail.href}
                        target={detail.href.startsWith('mailto:') || detail.href.startsWith('tel:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-secondary hover:underline break-all"
                      >
                        {t(detail.valueKey, 'Value')}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {/* Sosyal Medya Linkleri */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                  {t('contactPage.followUs', 'Follow Us')}
                </h3>
                <div className="flex space-x-5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-secondary transform transition-transform duration-200 hover:scale-125"
                      title={link.label}
                    >
                      <FontAwesomeIcon icon={link.icon} size="lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Harita Bölümü */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              {/* Google Maps iframe'i veya react-google-maps gibi bir kütüphane kullanılabilir */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.200000000000!2d28.978359!3d41.01700000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_LATITUDE%2CN%20YOUR_LONGITUDE!5e0!3m2!1sen!2str!4vDATE" // Kendi stüdyo koordinatlarınızla güncelleyin
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contactPage.mapTitle', 'Our Location on Map')}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;