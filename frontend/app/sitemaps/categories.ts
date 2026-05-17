import type { MetadataRoute } from 'next';
import { categories, baseUrl } from '../data';

export function categoriesSitemap(): MetadataRoute.Sitemap {
  return categories.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));
}