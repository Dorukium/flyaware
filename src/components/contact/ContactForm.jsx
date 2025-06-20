// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import Button from '../ui/Button'; // Genel Button bileşenimiz
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'; // Örnek ikon

const ContactForm = () => {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, success: false, message: t('contactForm.status.sending', 'Sending...') });

    // GERÇEK FORM GÖNDERİMİ BURADA YAPILACAK
    // Bu kısım bir backend API'sine veya Formspree, Netlify Forms gibi bir servise bağlanmalıdır.
    // Örnek olarak setTimeout ile bir gecikme simüle edelim:
    try {
      // Örnek bir API çağrısı simülasyonu
      // const response = await fetch('YOUR_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Network response was not ok.');
      // const result = await response.json();

      // Simülasyon:
      await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5 saniye bekle
      // Rastgele başarı veya hata durumu (test için)
      // const submissionSuccessful = Math.random() > 0.3;
      const submissionSuccessful = true; // Şimdilik her zaman başarılı olsun

      if (submissionSuccessful) {
        setFormStatus({
          submitted: true,
          success: true,
          message: t('contactForm.status.success', 'Your message has been sent successfully! We will get back to you soon.'),
        });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Formu temizle
      } else {
        throw new Error(t('contactForm.status.errorGeneral', 'An error occurred. Please try again.'));
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: error.message || t('contactForm.status.errorGeneral', 'An error occurred. Please try again.'),
      });
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-secondary focus:border-transparent transition-shadow duration-200 shadow-sm hover:shadow-md";
  const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          {t('contactForm.name.label', 'Full Name')}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={t('contactForm.name.placeholder', 'e.g., Ada Lovelace')}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          {t('contactForm.email.label', 'Email Address')}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={t('contactForm.email.placeholder', 'e.g., ada@example.com')}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>
          {t('contactForm.subject.label', 'Subject')}
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder={t('contactForm.subject.placeholder', 'e.g., Project Inquiry')}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          {t('contactForm.message.label', 'Your Message')}
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder={t('contactForm.message.placeholder', 'Tell us more about your project or question...')}
          className={`${inputClass} min-h-[120px]`}
        ></textarea>
      </div>
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto group"
          disabled={formStatus.message === t('contactForm.status.sending', 'Sending...')} // Gönderilirken butonu devre dışı bırak
          leftIcon={
            <PaperAirplaneIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          }
        >
          {formStatus.message === t('contactForm.status.sending', 'Sending...')
            ? t('contactForm.sendingButton', 'Sending...')
            : t('contactForm.sendButton', 'Send Message')}
        </Button>
      </div>
      {formStatus.submitted && (
        <p className={`mt-4 text-sm p-3 rounded-md ${formStatus.success ? 'bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-100' : 'bg-red-100 dark:bg-red-700 text-red-700 dark:text-red-100'}`}>
          {formStatus.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;