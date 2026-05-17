import type { MetadataRoute } from 'next';
import { baseUrl } from './data';

import { categoriesSitemap } from './sitemaps/categories';
import { citiesSitemap } from './sitemaps/cities';
import { cityCategoriesSitemap } from './sitemaps/cityCategories';
import { staticPagesSitemap } from './sitemaps/staticPages';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // 🌸 главная
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },

    ...categoriesSitemap(),
    ...citiesSitemap(),
    ...cityCategoriesSitemap(),
    ...staticPagesSitemap(),
  ];
}