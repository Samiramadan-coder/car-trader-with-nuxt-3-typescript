import cars from "~/data/cars.json";

export default defineEventHandler((event) => {
  const id = event.context.params?.id;

  if (id) {
    const car = cars.find((car) => car.id === parseInt(id));

    if (!car) {
      throw createError({
        statusCode: 404,
        message: `Car with ID: ${id} does not exist`,
      });
    }

    return car;
  }
});
