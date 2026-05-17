export const getUser = async () => {
  await new Promise((r) => setTimeout(r, 300));

  return {
    id: 1,
    name: 'Гость',
    avatar: null,
  };
};