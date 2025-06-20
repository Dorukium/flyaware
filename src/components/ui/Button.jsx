// src/components/ui/Button.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Dahili linkler için

/**
 * Genel amaçlı buton bileşeni.
 * Dahili navigasyon için 'to' prop'u alabilir veya standart bir buton olarak kullanılabilir.
 *
 * @param {object} props
 * @param {React.Node} props.children - Butonun içeriği (metin, ikon vb.).
 * @param {string} [props.to] - Eğer bir dahili link ise, yönlendirilecek yol.
 * @param {string} [props.href] - Eğer bir harici link ise, URL.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - Standart HTML buton tipi. 'to' veya 'href' varsa göz ardı edilir.
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'} [props.variant='primary'] - Butonun görünüm varyantı.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Butonun boyutu.
 * @param {React.ReactElement} [props.leftIcon] - Buton metninin solunda görünecek ikon.
 * @param {React.ReactElement} [props.rightIcon] - Buton metninin sağında görünecek ikon.
 * @param {boolean} [props.disabled=false] - Butonun devre dışı olup olmadığını belirtir.
 * @param {boolean} [props.isLoading=false] - Butonun yüklenme durumunda olup olmadığını belirtir.
 * @param {string} [props.loadingText='Loading...'] - Yüklenme durumunda gösterilecek metin.
 * @param {string} [props.className] - Ek özel CSS sınıfları.
 * @param {function} [props.onClick] - Tıklama olayı işleyicisi.
 */
const Button = ({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...',
  className = '',
  onClick,
  ...rest // Diğer tüm props'ları (örn: aria-label) butona aktar
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold border focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 ease-in-out rounded-md disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-brand-primary hover:bg-blue-700 dark:bg-brand-secondary dark:hover:bg-blue-500 text-white border-transparent focus:ring-brand-primary dark:focus:ring-brand-secondary',
    secondary:
      'bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-400 text-white border-transparent focus:ring-gray-600 dark:focus:ring-gray-500',
    outline:
      'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-brand-primary dark:text-brand-secondary border-brand-primary dark:border-brand-secondary focus:ring-brand-primary dark:focus:ring-brand-secondary',
    ghost:
      'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-brand-primary dark:text-brand-secondary border-transparent focus:ring-brand-primary dark:focus:ring-brand-secondary',
    danger:
      'bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 text-white border-transparent focus:ring-red-600 dark:focus:ring-red-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {isLoading ? loadingText : (
        <>
          {leftIcon && <span className="mr-2 -ml-1 h-5 w-5">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2 -mr-1 h-5 w-5">{rightIcon}</span>}
        </>
      )}
    </>
  );

  if (to) {
    return (
      <RouterLink to={to} className={combinedClassName} onClick={onClick} {...rest}>
        {content}
      </RouterLink>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer" onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;