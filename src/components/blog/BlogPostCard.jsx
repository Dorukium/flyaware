// src/components/blog/BlogPostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faTag, faClock } from '@fortawesome/free-solid-svg-icons';

const BlogPostCard = ({ post }) => {
  const { t } = useTranslations();

  if (!post) return null;

  const { slug, image, titleKey, excerptKey, author, publishDate, categoryKey, readingTimeKey } = post;

  const postTitle = t(titleKey, 'Blog Post Title');
  const authorName = t(author.nameKey, 'Author Name');
  // Tarihi formatlamak için (opsiyonel, Moment.js veya date-fns gibi bir kütüphane kullanılabilir)
  const formattedDate = new Date(publishDate).toLocaleDateString(t('locale', 'en-US'), { // 'locale' anahtarını i18n'e ekleyin
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1.5">
      {image && (
        <Link to={`/blog/${slug}`} className="block overflow-hidden aspect-video">
          <img
            src={image}
            alt={postTitle}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {categoryKey && (
          <p className="text-sm font-medium text-brand-primary dark:text-brand-secondary mb-2 uppercase tracking-wider">
            {t(categoryKey, 'Category')}
          </p>
        )}
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
          <Link to={`/blog/${slug}`} className="hover:underline">
            {postTitle}
          </Link>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
          {t(excerptKey, 'Short excerpt of the blog post...')}
        </p>
        <div className="mt-auto">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-3">
            {author.avatarUrl && (
              <img src={author.avatarUrl} alt={authorName} className="w-6 h-6 rounded-full object-cover" />
            )}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-1.5" />
              <span>{authorName}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-1.5" />
              <time dateTime={publishDate}>{formattedDate}</time>
            </div>
            {readingTimeKey && (
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-1.5" />
                <span>{t(readingTimeKey)}</span>
              </div>
            )}
          </div>
          <Link
            to={`/blog/${slug}`}
            className="inline-flex items-center text-sm font-medium text-brand-primary dark:text-brand-secondary hover:opacity-80 group-hover:underline"
          >
            {t('blogPage.readMore', 'Read More')}
            <svg className="ml-1 w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;