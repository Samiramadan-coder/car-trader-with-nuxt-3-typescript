<template>
  <div>
    <car-detail-hero :car="car" />
    <car-detail-attributes :features="car?.features" />
    <car-detail-description :description="car?.description" />
    <car-detail-contact />
  </div>
</template>

<script setup lang="ts">
import type { Car } from "~/helpers/interfaces";
const route = useRoute();
const { toTitleCase } = useUtilities();
const { cars } = useCars();

const car = computed((): Car | undefined =>
  cars.find((c) => c.id.toString() === route.params.id)
);

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID: ${route.params.id} does not exist`,
  });
}

useHead({
  title: `${toTitleCase(route.params.name)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
