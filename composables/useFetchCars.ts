import type { Car } from "~/helpers/interfaces";

type Filters = Partial<{
  minPrice: unknown;
  maxPrice: unknown;
  make: unknown;
}>;

export default async (city: string, filters: Filters) => {
  const { data, error } = await useFetch<Car[]>(`/api/cars/${city}`, {
    params: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch cars",
    });
  }

  return data;
};
