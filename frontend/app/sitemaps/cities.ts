import type { MetadataRoute } from 'next';
import { cities, baseUrl } from '../data';

export function citiesSitemap(): MetadataRoute.Sitemap {
  return cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: city.multiplier >= 1.3
      ? 0.95
      : city.multiplier >= 1.2
      ? 0.9
      : 0.85,
  }));
}