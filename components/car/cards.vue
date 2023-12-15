<template>
  <div class="w-full">
    <car-card
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handleFavorite"
      :favored="car.id in favorite"
    />
  </div>
</template>

<script setup lang="ts">
interface Favorite {
  [key: string]: boolean;
}

const { cars } = useCars();

const favorite = useLocalStorage<Favorite>("favorite", {});

const handleFavorite = (id: number) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>
