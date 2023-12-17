import type { Car } from "~/helpers/interfaces";

export default async (id: string | string[]) => {
  const { data, error } = await useFetch<Car>(`/api/car/${id}`);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch car",
    });
  }

  return { data };
};
