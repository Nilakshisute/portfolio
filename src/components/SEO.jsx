import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, author, ogImage, ogUrl }) => {
  // Default values for SEO metadata
  const defaultTitle = 'Nilakshi Sute | Frontend Developer';
  const defaultDescription = 'Frontend Developer Portfolio - Showcasing skills, projects, and experience in web development.';
  const defaultKeywords = 'frontend, developer, portfolio, react, web development, javascript, tailwind css';
  const defaultAuthor = 'Nilakshi Sute';
  const defaultOgImage = '/og-image.jpg'; // Assuming there's an og-image.jpg in the public folder
  const defaultOgUrl = 'https://nilakshisute.com'; // Replace with your actual domain

  // Use provided values or fall back to defaults
  const seoTitle = title ? `${title} | Nilakshi Sute` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoAuthor = author || defaultAuthor;
  const seoOgImage = ogImage || defaultOgImage;
  const seoOgUrl = ogUrl || defaultOgUrl;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoAuthor} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoOgUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoOgUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoOgImage} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  ogImage: PropTypes.string,
  ogUrl: PropTypes.string,
};

export default SEO;