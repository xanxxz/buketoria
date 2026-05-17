import type { MetadataRoute } from 'next';
import { cities, categories, baseUrl } from '../data';

export function cityCategoriesSitemap(): MetadataRoute.Sitemap {
  return cities.flatMap((city) =>
    categories.map((cat) => ({
      url: `${baseUrl}/${city.slug}/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority:
        city.multiplier >= 1.3
          ? 0.95
          : city.multiplier >= 1.2
          ? 0.9
          : 0.85,
    }))
  );
}