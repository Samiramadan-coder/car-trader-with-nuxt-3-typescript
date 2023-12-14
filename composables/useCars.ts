import listOfCars from "~/data/cars.json";
import type { Car } from "~/helpers/interfaces";

export const useCars = () => {
  const cars: Car[] = listOfCars;

  return {
    cars,
  };
};
