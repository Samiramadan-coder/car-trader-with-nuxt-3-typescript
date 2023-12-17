import cars from "~/data/cars.json";

export default defineEventHandler((event) => {
  let filteredCars = cars;

  filteredCars = filteredCars.filter(
    (car) => car.city.toLowerCase() === event.context.params?.city.toLowerCase()
  );

  const { make, minPrice, maxPrice } = getQuery(event);

  if (make && typeof make === "string") {
    filteredCars = filteredCars.filter(
      (car) => car.make.toLowerCase() === make.toLowerCase()
    );
  }

  if (minPrice && typeof minPrice === "string") {
    filteredCars = filteredCars.filter(
      (car) => car.price >= parseInt(minPrice)
    );
  }

  if (maxPrice && typeof maxPrice === "string") {
    filteredCars = filteredCars.filter(
      (car) => car.price <= parseInt(maxPrice)
    );
  }

  return filteredCars;
});
