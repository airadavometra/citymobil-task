import { Car } from "types/car";

export const getCars = async () => {
  const response = await fetch("https://city-mobil.ru/api/cars");
  const { cars, tariffs_list } = await response.json();
  const convertedCars: Car[] = [];
  for (const car of cars) {
    let convertedCar: Car = {};
    convertedCar.name = `${car.mark} ${car.model}`;
    for (const tariff of tariffs_list) {
      convertedCar[tariff] = car.tariffs[tariff]?.year ?? null;
    }
    convertedCars.push(convertedCar);
  }
  return { convertedCars, tariffs_list };
};
