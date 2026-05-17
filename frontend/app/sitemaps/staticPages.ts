import type { MetadataRoute } from 'next';
import { staticPages, cities, baseUrl } from '../data';

export function staticPagesSitemap(): MetadataRoute.Sitemap {
  const globalPages = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const cityPages = cities.flatMap((city) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${city.slug}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: city.multiplier >= 1.3 ? 0.8 : 0.7,
    }))
  );

  return [...globalPages, ...cityPages];
}