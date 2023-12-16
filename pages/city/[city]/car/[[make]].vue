<template>
  <div>
    <car-cards :cars="cars" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const cars = await useFetchCars(
  typeof route.params.city === "string" ? route.params.city : "",
  {
    minPrice: route.query.minPrice,
    maxPrice: route.query.maxPrice,
    make: route.query.make,
  }
);
</script>
