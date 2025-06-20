// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from '../../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Mobil menü ikonları

const Header = () => {
  const { t } = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl md:text-3xl font-bold text-brand-primary dark:text-brand-secondary hover:opacity-80 transition-opacity">
              {/* İsterseniz buraya bir <img> etiketi ile logo da ekleyebilirsiniz. */}
              FlyAw Studios
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            <Navbar />
          </nav>
          
          {/* Right side tools: Theme, Language (Desktop) */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher /> {/* Mobil menü dışında da tema değiştirici görünsün */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')} // Çeviri için i18n dosyalarınıza ekleyin
            >
              <span className="sr-only">{isMobileMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}</span>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg pb-4 z-40" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Navbar isMobile={true} closeMobileMenu={() => setIsMobileMenuOpen(false)} />
          </div>
          <div className="pt-2 pb-3 px-4 border-t border-gray-200 dark:border-gray-700">
             {/* Mobil menüde dil değiştiriciyi de gösterebilirsiniz */}
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;