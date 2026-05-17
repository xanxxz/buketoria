export function getStats(orders: any[]) {
  const now = Date.now();

  const day = now - 1000 * 60 * 60 * 24;
  const week = now - 1000 * 60 * 60 * 24 * 7;
  const month = now - 1000 * 60 * 60 * 24 * 30;

  return {
    day: orders.filter(
      (o) => new Date(o.createdAt).getTime() > day
    ).length,

    week: orders.filter(
      (o) => new Date(o.createdAt).getTime() > week
    ).length,

    month: orders.filter(
      (o) => new Date(o.createdAt).getTime() > month
    ).length,
  };
}