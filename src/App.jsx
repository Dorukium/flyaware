// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context Providers
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Layout Bileşeni
import Layout from './components/layout/Layout';

// Sayfa Bileşenleri
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage'; // Hizmet detay sayfası
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage'; // Proje detay sayfası
import BlogPage from './pages/BlogPage';
import BlogPostDetailPage from './pages/BlogPostDetailPage'; // Blog yazı detay sayfası
import ContactPage from './pages/ContactPage';
// İleride eklenecekse 404 sayfası: import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout> {/* Layout tüm sayfaları sarmalar (Header, Footer vb. içerir) */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Hizmetler Rotaları */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} /> {/* Dinamik hizmet detay sayfası */}

              {/* Projeler Rotaları */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} /> {/* Dinamik proje detay sayfası (önceden :id idi, :slug daha iyi) */}

              {/* Blog Rotaları */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostDetailPage />} /> {/* Dinamik blog yazı detay sayfası (eğer :id yerine :slug kullanılacaksa) */}
                                                                         {/* Veri yapınızda blog postları için 'slug' varsa :slug kullanın */}
                                                                         {/* Eğer 'id' kullanıyorsanız :id olarak kalabilir. */}

              <Route path="/contact" element={<ContactPage />} />

              {/* Eşleşmeyen tüm yollar için 404 sayfası (opsiyonel) */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;