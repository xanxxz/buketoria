export function buildCatalogUrl(params: {
  city?: string;
  category?: string;
}) {
  const base = params.city
    ? `/${params.city}/catalog`
    : `/catalog`;

  if (params.category) {
    return `${base}/${params.category}`;
  }

  return base;
}