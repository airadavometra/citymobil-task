export const getCars = async () => {
  const response = await fetch("https://city-mobil.ru/api/cars");
  return await response.json();
};
