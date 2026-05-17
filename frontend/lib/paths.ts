export function cityUrl(citySlug: string | null, path: string) {
  if (!citySlug) return path;

  return `/${citySlug}${path}`;
}