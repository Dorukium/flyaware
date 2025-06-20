// src/components/layout/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';

const Navbar = ({ isMobile = false, closeMobileMenu }) => {
  const { t, language } = useTranslations(); // language'ı URL'lere prefix olarak eklemek için aldık

  // Dinamik URL'ler için dil prefix'i. Varsayılan dil için prefix yok.
  // Bu kısmı Next.js gibi bir framework kullanıyorsanız veya router'ınızda dil segmenti varsa daha entegre yönetebilirsiniz.
  // Şu anki React Router yapımızda URL'ler /about, /contact şeklinde. Eğer /en/about, /tr/hakkimizda gibi URL'ler
  // istiyorsanız, App.jsx'teki Route path'lerini buna göre düzenlemeniz ve dil değişiminde
  // programatik navigasyon yapmanız gerekebilir. Şimdilik basit tutuyoruz.
  // const langPrefix = language === 'en' ? '' : `/${language}`; // Örnek prefixleme

  const navLinks = [
    { to: `/`, labelKey: 'navbar.home' },
    { to: `/about`, labelKey: 'navbar.about' },
    { to: `/services`, labelKey: 'navbar.services' },
    { to: `/projects`, labelKey: 'navbar.projects' },
    { to: `/blog`, labelKey: 'navbar.blog' },
    { to: `/contact`, labelKey: 'navbar.contact' },
  ];

  const baseLinkClass = "font-medium hover:text-brand-primary dark:hover:text-brand-secondary transition-colors duration-200";
  const activeLinkClass = "text-brand-primary dark:text-brand-secondary";
  const inactiveLinkClass = "text-gray-700 dark:text-gray-300";

  const mobileLinkClass = "block px-3 py-2 rounded-md text-base";
  const desktopLinkClass = "px-1 py-1 md:px-2 md:py-2"; // Daha kompakt padding masaüstü için

  const getLinkClassName = ({ isActive }) => {
    return `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass} ${isMobile ? mobileLinkClass : desktopLinkClass}`;
  };

  return (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.labelKey}
          to={link.to} // langPrefix + link.to  -> Eğer URL'e dil kodu eklenecekse
          className={getLinkClassName}
          onClick={isMobile && closeMobileMenu ? closeMobileMenu : undefined} // Mobil menüde linke tıklanınca menüyü kapat
          end={link.to === "/"} // Ana sayfa linkinin tam eşleşme yapmasını sağlar
        >
          {t(link.labelKey)}
        </NavLink>
      ))}
    </>
  );
};

export default Navbar;