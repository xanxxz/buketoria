export const getCityByCoords = async (lat: number, lng: number) => {
  await new Promise((r) => setTimeout(r, 300));

  // пока мок логика
  if (lat && lng) {
    return { id: 1, name: 'Москва' };
  }

  return { id: 2, name: 'Санкт-Петербург' };
};

export const getCities = async () => {
  await new Promise((r) => setTimeout(r, 200));

  return [
    { id: 1, name: 'Москва' },
    { id: 2, name: 'Санкт-Петербург' },
    { id: 3, name: 'Казань' },
    { id: 4, name: 'Екатеринбург' },
  ];
};