// src/components/layout/ThemeSwitcher.jsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslations } from '../../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslations(); // Çeviriler için

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
      aria-label={isDark ? t('themeSwitcher.toggleToLight') : t('themeSwitcher.toggleToDark')}
      title={isDark ? t('themeSwitcher.toggleToLight') : t('themeSwitcher.toggleToDark')} // Buton üzerine gelince çıkan tooltip
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="h-5 w-5 md:h-6 md:w-6" />
      <span className="sr-only">
        {isDark ? t('themeSwitcher.toggleToLight') : t('themeSwitcher.toggleToDark')}
      </span>
    </button>
  );
};

export default ThemeSwitcher;