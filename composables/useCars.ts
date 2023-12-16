import listOfCars from "~/data/cars.json";
import listOfMakes from "~/data/makes.json";
import listOfListings from "~/data/listings.json";

import type { Car, List } from "~/helpers/interfaces";

export const useCars = () => {
  const cars: Car[] = listOfCars;
  const makes: string[] = listOfMakes;
  const listings: List[] = listOfListings;

  return {
    cars,
    makes,
    listings,
  };
};
