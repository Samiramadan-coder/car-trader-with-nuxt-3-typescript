<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Login</h1>
    <button class="bg-red-400 p-3 rounded text-white font-bold" @click="login">
      Login with Google
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const isLoggedIn = useLocalStorage<boolean | null>("isLogged", null);

const login = (): void => {
  isLoggedIn.value = true;
  navigateTo("/");
};
</script>
