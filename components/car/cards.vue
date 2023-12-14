<template>
  <div class="w-full">
    <car-card v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup lang="ts">
const { cars } = useCars();
</script>
