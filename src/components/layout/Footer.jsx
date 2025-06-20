// src/components/layout/Footer.jsx
import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Örnek sosyal medya ikonları

const Footer = () => {
  const { t } = useTranslations();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/your-profile", icon: faGithub, label: "GitHub" },
    { href: "https://linkedin.com/in/your-profile", icon: faLinkedin, label: "LinkedIn" },
    { href: "https://twitter.com/your-profile", icon: faTwitter, label: "Twitter" },
    // İhtiyaç duyduğunuz diğer sosyal medya linklerini ekleyebilirsiniz
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm text-center md:text-left mb-4 md:mb-0">
            {t('footer.copyRight').replace('{year}', currentYear.toString())}
            {/* Örnek: "© 2024 FlyAw Studios. Tüm hakları saklıdır." */}
          </div>

          {/* Social Media Links */}
          {socialLinks.length > 0 && (
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          )}
        </div>
        {/* İsterseniz buraya gizlilik politikası, kullanım şartları gibi linkler de ekleyebilirsiniz. */}
        {/* <div className="mt-4 text-center text-xs">
          <Link to="/privacy-policy" className="hover:underline">{t('footer.privacy')}</Link>
          <span className="mx-2">|</span>
          <Link to="/terms-of-service" className="hover:underline">{t('footer.terms')}</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;