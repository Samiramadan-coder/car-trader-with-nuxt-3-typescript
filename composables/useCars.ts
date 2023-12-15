import listOfCars from "~/data/cars.json";
import listOfMakes from "~/data/makes.json";

import type { Car } from "~/helpers/interfaces";

export const useCars = () => {
  const cars: Car[] = listOfCars;
  const makes: string[] = listOfMakes;

  return {
    cars,
    makes,
  };
};
