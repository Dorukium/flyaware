// src/pages/BlogPage.jsx
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import { blogPostsData } from '../data/blogData';
import BlogPostCard from '../components/blog/BlogPostCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const BlogPage = () => {
  const { t } = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Benzersiz kategori anahtarlarını topla
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPostsData.map(post => post.categoryKey).filter(Boolean));
    return ['all', ...Array.from(uniqueCategories)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') {
      return blogPostsData;
    }
    return blogPostsData.filter(post => post.categoryKey === selectedCategory);
  }, [selectedCategory, blogPostsData]); // blogPostsData'yı bağımlılıklara ekle

  return (
    <>
      <Helmet>
        <title>{t('blogPage.title', 'Blog')} - FlyAw Studios</title>
        <meta
          name="description"
          content={t('blogPage.metaDescription', 'Read the latest articles, insights, and news from the FlyAw Studios blog.')}
        />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Sayfa Başlığı */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white animate-fadeInUp">
            {t('blogPage.title', 'Our Blog')}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {t('blogPage.subtitle', 'Insights, news, and articles from the FlyAw Studios team.')}
          </p>
        </header>

        {/* Kategori Filtresi (Basit) */}
        {categories.length > 2 && ( // Sadece "all" ve bir kategori varsa filtreye gerek yok
          <div className="mb-8 md:mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
             <span className="mr-2 text-gray-700 dark:text-gray-300 font-medium hidden sm:inline">
                <FontAwesomeIcon icon={faFilter} className="mr-1.5" />
                {t('blogPage.filterByCategory', 'Filter:')}
             </span>
            {categories.map((categoryKey) => {
              const isActive = selectedCategory === categoryKey;
              const buttonText = categoryKey === 'all'
                ? t('blogPage.allCategories', 'All')
                : t(categoryKey, categoryKey.split('.').pop());

              return (
                <button
                  key={categoryKey}
                  onClick={() => setSelectedCategory(categoryKey)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105
                    ${
                      isActive
                        ? 'bg-brand-primary text-white shadow-md dark:bg-brand-secondary dark:text-gray-900'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  {buttonText}
                </button>
              );
            })}
          </div>
        )}


        {/* Blog Yazıları Listesi */}
        {filteredPosts && filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredPosts.map((post) => (
              <div key={post.id} className="animate-scaleIn" style={{ animationDelay: `${filteredPosts.indexOf(post) * 0.1}s`}}>
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500 dark:text-gray-400 py-10">
            {selectedCategory === 'all'
              ? t('blogPage.noPostsAvailable', 'No blog posts available at the moment. Check back soon!')
              : t('blogPage.noPostsInCategory', 'No posts found in this category. Try a different filter!')
            }
          </p>
        )}
      </div>
    </>
  );
};

export default BlogPage;