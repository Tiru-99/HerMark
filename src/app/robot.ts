import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.hermarkpress.com";
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/*?*']  // Disallow API routes and URL parameters
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
