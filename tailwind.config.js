/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React bileşenlerinizin yollarını içerdiğinden emin olun
    "./public/index.html"
  ],
  darkMode: 'class', // Bu satırı ekleyin veya güncelleyin
  theme: {
    extend: {
      // Projenize özel renkler, fontlar, breakpoint'ler vb. ekleyebilirsiniz.
      colors: {
        // Örnek renkler (FlyAw Studios kimliğine göre özelleştirin)
        'brand-primary': '#1E40AF', // Koyu mavi (örnek)
        'brand-secondary': '#3B82F6', // Açık mavi (örnek)
        'brand-accent': '#F59E0B', // Vurgu rengi - Amber (örnek)
        'dark-bg': '#111827', // Karanlık mod arka planı (örnek - gray-900)
        'dark-surface': '#1F2937', // Karanlık mod yüzey rengi (örnek - gray-800)
        'dark-text': '#F3F4F6', // Karanlık mod metin rengi (örnek - gray-100)
        'light-text': '#1F2937', // Aydınlık mod metin rengi (örnek - gray-800)
      },
      fontFamily: {
        // Projenize uygun fontları ekleyin (Google Fonts veya özel fontlar)
        sans: ['Inter', 'sans-serif'], // Örnek: Inter fontu
        serif: ['Merriweather', 'serif'], // Örnek
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Scrollbar gizleme eklentisi (opsiyonel)
  ],
}