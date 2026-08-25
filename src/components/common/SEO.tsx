import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  author?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Algorithmist is the parent technical authority bridging fundamental computational education, build-to-ship production engineering with Algorithmist Nexus, placement mastery with Algorithmist Academy, and enterprise technical consultancy.',
  keywords = [
    'Algorithmist',
    'Algorithmist Nexus',
    'Algorithmist Academy',
    'Algorithmist Technologies',
    'Algorithmist Optivio',
    'Software Engineering',
    'DSA',
    'SDLC',
    'Cloud Systems',
    'Technical Consultancy'
  ],
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  publishedTime,
  author = 'Algorithmist Parent Directorate'
}) => {
  const location = useLocation();
  const siteTitle = 'Algorithmist | Parent Technical Authority';
  const fullTitle = title ? `${title} | Algorithmist` : siteTitle;
  const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : location.pathname;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={currentUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:site_name" content="Algorithmist Parent Ecosystem" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Schema Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ogType === 'article' ? 'TechArticle' : 'Organization',
          name: fullTitle,
          description: description,
          url: currentUrl,
          logo: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=200&auto=format&fit=crop',
          ...(ogType === 'article' && {
            headline: title,
            datePublished: publishedTime,
            author: {
              '@type': 'Person',
              name: author
            }
          })
        })}
      </script>
    </Helmet>
  );
};
