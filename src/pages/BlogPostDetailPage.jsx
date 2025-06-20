// src/pages/BlogPostDetailPage.jsx
import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslations } from '../hooks/useTranslations';
import { blogPostsData } from '../data/blogData'; // blogAuthors da burada tanımlıydı (veya ayrı import)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserEdit, faTag, faTags, faArrowLeft, faShareAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Opsiyonel: Okuma ilerleme çubuğu için
const ReadingProgressBar = () => {
  const [width, setWidth] = React.useState(0);
  const scrollListener = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    setWidth((window.pageYOffset / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-1.5 bg-brand-primary dark:bg-brand-secondary transition-all duration-100 ease-linear" style={{ width: `${width}%` }} />
  );
};


const BlogPostDetailPage = () => {
  const { t, language } = useTranslations(); // language'ı tarih formatlaması için alalım
  const { slug } = useParams();
  const contentRef = useRef(null); // İçerik bölümü için ref

  const post = blogPostsData.find((p) => p.slug === slug);

  useEffect(() => {
    // Sayfa yüklendiğinde en üste kaydır
    window.scrollTo(0, 0);

    // Opsiyonel: İçerikteki başlıklar için TOC veya animasyonlar burada tetiklenebilir
    if (contentRef.current) {
        // Örneğin, içerik yüklendiğinde animasyon ekleyebiliriz
        contentRef.current.classList.add('animate-fadeIn');
    }

  }, [slug]); // slug değiştiğinde (farklı bir yazıya geçildiğinde) tekrar çalışır


  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center animate-fadeIn">
        <h1 className="text-4xl font-bold mb-4">{t('blogPostDetailPage.notFound.title', 'Post Not Found')}</h1>
        <p className="text-lg mb-8">{t('blogPostDetailPage.notFound.message', 'The blog post you are looking for does not exist or may have been moved.')}</p>
        <Link to="/blog" className="text-brand-primary hover:underline">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          {t('blogPostDetailPage.notFound.backLink', 'Back to Blog')}
        </Link>
      </div>
    );
  }

  const postTitle = t(post.titleKey, 'Blog Post Title');
  const postExcerpt = t(post.excerptKey, 'Blog post excerpt.');
  const authorName = t(post.author.nameKey, 'Author Name');
  const authorBio = t(post.author.bioKey, 'Author bio.'); // Eğer bioKey varsa
  const categoryName = t(post.categoryKey, 'Category');
  const readingTime = t(post.readingTimeKey, 'Reading time');

  // Tarihi yerelleştirilmiş formatta göster
  const formattedDate = new Date(post.publishDate).toLocaleDateString(t('locale', 'en-US'), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Yazı içeriği (i18n'den HTML olarak çekiliyor)
  // ÖNEMLİ GÜVENLİK NOTU: dangerouslySetInnerHTML kullanmak XSS saldırılarına yol açabilir
  // Eğer içerik sizin tam kontrolünüzde değilse (örneğin, kullanıcı tarafından oluşturulan içerik veya
  // güvenilmeyen bir CMS'ten geliyorsa) bu yöntemi KULLANMAYIN!
  // İçeriği sanitize edin veya Markdown gibi daha güvenli bir format kullanıp react-markdown ile render edin.
  // Şimdilik, içeriğin güvenli ve sizin tarafınızdan oluşturulduğunu varsayıyoruz.
  const postContentHtml = t(post.contentKey, '<p>Content not available.</p>');

  // Paylaşım URL'leri
  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(postTitle);
  const socialShares = [
    {
      name: 'Twitter',
      icon: faTwitter,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      color: 'text-blue-400 hover:text-blue-500',
    },
    {
      name: 'Facebook',
      icon: faFacebookF,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: 'text-blue-600 hover:text-blue-700',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedinIn,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}&summary=${encodeURIComponent(postExcerpt)}&source=FlyAwStudios`,
      color: 'text-blue-700 hover:text-blue-800',
    },
  ];

  // Önceki ve Sonraki Yazı (Basit Örnek)
  const currentIndex = blogPostsData.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPostsData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPostsData.length - 1 ? blogPostsData[currentIndex + 1] : null;


  return (
    <>
      <Helmet>
        <title>{postTitle} - FlyAw Studios Blog</title>
        <meta name="description" content={postExcerpt} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={postExcerpt} />
        {post.image && <meta property="og:image" content={`${window.location.origin}${post.image}`} />}
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@FlyAwStudios" /> // Twitter kullanıcı adınız */}
      </Helmet>
      <ReadingProgressBar /> {/* Okuma ilerleme çubuğu */}

      <article className="animate-fadeIn">
        {/* Başlık ve Ana Görsel */}
        {post.image && (
          <header className="relative h-[50vh] md:h-[65vh] group overflow-hidden mb-8 md:mb-12">
            <img
              src={post.image}
              alt={postTitle}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10 md:pb-20 text-white">
              {categoryName && (
                <Link
                  to="/blog" // Kategoriye göre filtreleme eklenebilir: `/blog?category=${post.categoryKey}`
                  className="text-sm font-semibold bg-brand-primary dark:bg-brand-secondary text-white dark:text-gray-900 px-3 py-1 rounded-full self-start mb-3 hover:opacity-90 transition-opacity"
                >
                  {categoryName}
                </Link>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                {postTitle}
              </h1>
              <div className="mt-4 flex flex-wrap items-center text-sm opacity-90 space-x-4">
                <div className="flex items-center">
                  {post.author.avatarUrl && <img src={post.author.avatarUrl} alt={authorName} className="w-8 h-8 rounded-full mr-2 border-2 border-white/50"/>}
                  <span className="font-medium">{t('blogPage.byAuthor', { authorName })}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-1.5" />
                  <time dateTime={post.publishDate}>{formattedDate}</time>
                </div>
                {readingTime && (
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faClock} className="mr-1.5" />
                    <span>{readingTime}</span>
                  </div>
                )}
              </div>
            </div>
          </header>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Kenar Çubuğu (Sol - Masaüstü) */}
            <aside className="lg:col-span-3 lg:sticky lg:top-24 h-fit hidden lg:block space-y-6">
              {/* Yazar Bilgisi */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{t('blogPostDetailPage.authorTitle', 'About the Author')}</h3>
                <div className="flex items-center mb-2">
                  {post.author.avatarUrl && <img src={post.author.avatarUrl} alt={authorName} className="w-12 h-12 rounded-full mr-3"/>}
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{authorName}</p>
                    {/* Yazarın sosyal medya linkleri veya pozisyonu eklenebilir */}
                  </div>
                </div>
                {authorBio && <p className="text-xs text-gray-600 dark:text-gray-400">{authorBio}</p>}
              </div>
              {/* Paylaşım Butonları */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">{t('blogPostDetailPage.sharePost', 'Share this post:')}</h3>
                <div className="flex space-x-3">
                  {socialShares.map(social => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={`Share on ${social.name}`}
                       className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 ${social.color} transition-transform transform hover:scale-110`}>
                      <FontAwesomeIcon icon={social.icon} className="h-4 w-4"/>
                    </a>
                  ))}
                </div>
              </div>
               {/* Etiketler */}
              {post.tags && post.tags.length > 0 && (
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">{t('blogPostDetailPage.tagsTitle', 'Tags:')}</h3>
                    <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 rounded-full font-medium">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                )}
            </aside>

            {/* Ana Yazı İçeriği */}
            <main className="lg:col-span-9 max-w-full" ref={contentRef}> {/* animate-fadeIn sınıfı useEffect ile eklenecek */}
              {!post.image && ( // Eğer ana görsel yoksa, başlığı burada göster
                <header className="mb-8 md:mb-12">
                    {categoryName && (
                        <Link to="/blog" className="text-sm font-semibold text-brand-primary dark:text-brand-secondary mb-2 inline-block hover:underline">
                        {categoryName}
                        </Link>
                    )}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        {postTitle}
                    </h1>
                    <div className="mt-4 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                        <div className="flex items-center">
                            {post.author.avatarUrl && <img src={post.author.avatarUrl} alt={authorName} className="w-8 h-8 rounded-full mr-2"/>}
                            <span>{t('blogPage.byAuthor', { authorName })}</span>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1.5" />
                            <time dateTime={post.publishDate}>{formattedDate}</time>
                        </div>
                        {readingTime && (
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="mr-1.5" />
                                <span>{readingTime}</span>
                            </div>
                        )}
                    </div>
                </header>
              )}
              <div
                className="prose prose-lg dark:prose-invert max-w-none lg:prose-xl 
                           prose-headings:font-semibold prose-headings:tracking-tight 
                           prose-a:text-brand-primary prose-a:dark:text-brand-secondary prose-a:no-underline hover:prose-a:underline
                           prose-img:rounded-lg prose-img:shadow-md
                           prose-blockquote:border-l-brand-primary prose-blockquote:dark:border-l-brand-secondary prose-blockquote:pl-4 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: postContentHtml }}
              />

              {/* Mobil için Paylaşım ve Etiketler */}
              <div className="lg:hidden mt-8 space-y-6">
                 {post.tags && post.tags.length > 0 && (
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">{t('blogPostDetailPage.tagsTitle', 'Tags:')}</h3>
                        <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 rounded-full font-medium">
                            {tag}
                            </span>
                        ))}
                        </div>
                    </div>
                 )}
                 <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">{t('blogPostDetailPage.sharePost', 'Share this post:')}</h3>
                    <div className="flex space-x-3">
                    {socialShares.map(social => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={`Share on ${social.name}`}
                        className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 ${social.color} transition-transform transform hover:scale-110`}>
                        <FontAwesomeIcon icon={social.icon} className="h-4 w-4"/>
                        </a>
                    ))}
                    </div>
                </div>
              </div>


              {/* Önceki/Sonraki Yazı Navigasyonu */}
              <nav className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-between items-center border-t border-b border-gray-200 dark:border-gray-700 py-6 space-y-4 sm:space-y-0">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.slug}`} className="group text-left">
                    <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">{t('common.previousPost', 'Previous Post')}</span>
                    <span className="text-lg font-medium text-brand-primary dark:text-brand-secondary group-hover:underline block max-w-xs truncate">{t(prevPost.titleKey)}</span>
                  </Link>
                ) : <div/> /* Sol tarafta boşluk bırakmak için */}
                {nextPost ? (
                  <Link to={`/blog/${nextPost.slug}`} className="group text-right">
                    <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">{t('common.nextPost', 'Next Post')}</span>
                    <span className="text-lg font-medium text-brand-primary dark:text-brand-secondary group-hover:underline block max-w-xs truncate">{t(nextPost.titleKey)}</span>
                  </Link>
                ) : <div/> /* Sağ tarafta boşluk bırakmak için */}
              </nav>

              {/* Yorumlar Bölümü (Placeholder) */}
              <section id="comments" className="mt-12 md:mt-16">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                  {t('common.commentsTitle', 'Comments')}
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('common.commentsComingSoon', 'Comments section is coming soon! In the meantime, feel free to share your thoughts on social media.')}
                  </p>
                  {/* Buraya Disqus, Commento veya özel bir yorum sistemi entegre edilebilir */}
                </div>
              </section>
            </main>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostDetailPage;