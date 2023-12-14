<template>
  <div>
    <div class="mt-32 flex">
      <nuxt-error-boundary>
        <car-sidebar />
        <nuxt-page />
        <template #error="{ error }">
          <div class="text-center mx-auto flex flex-col">
            <h1 class="text-5xl text-red-500">Sorry, something went wrong</h1>
            <code class="mt-4">{{ error }}</code>
            <button
              class="text-white bg-blue-400 px-10 py-2 rounded mt-4"
              @click="error.value = null"
            >
              Go Back
            </button>
          </div>
        </template>
      </nuxt-error-boundary>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
