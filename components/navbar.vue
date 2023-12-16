<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <nuxt-link class="text-3xl" to="/">cartrader</nuxt-link>

    <div v-if="isLogged" class="flex">
      <nuxt-link to="profile/listings" class="mr-5">profile</nuxt-link>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>

    <nuxt-link v-else to="/login">Login</nuxt-link>
  </header>
</template>

<script setup lang="ts">
const isLogged = useLocalStorage<boolean>("isLogged", false);

const logout = (): void => {
  try {
    isLogged.value = false;
    navigateTo("/");
  } catch (e) {
    console.log(e);
  }
};
</script>
