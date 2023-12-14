<template>
  <div>
    <car-detail-hero />
    <car-detail-attributes />
    <car-detail-description />
    <car-detail-contact />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${toTitleCase(route.params.name)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
