<template>
  <div>
    <car-cards v-if="cars?.length" :cars="cars" />

    <div class="text-red-400" v-else>No Cars Found With Filters</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.query.make,
});

watch(
  () => route.query,
  () => {
    window.location.reload();
  }
);
</script>
