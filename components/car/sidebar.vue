<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- Location -->
    <div
      class="p-5 flex justify-between relative cursor-pointer border-b space-x-2"
    >
      <h3>Location</h3>
      <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
        {{ route.params.city }}
      </h3>

      <div
        v-if="modal.location"
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangeLocation"
        >
          Apply
        </button>
      </div>
    </div>

    <!-- Make -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
        {{ route.params.make || "Any" }}
      </h3>

      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
        v-if="modal.make"
      >
        <h4
          v-for="make in makes"
          :key="make"
          class="w-1/3"
          @click="onChangeMake(make)"
        >
          {{ make }}
        </h4>
      </div>
    </div>

    <!-- Price -->
    <div class="p-5 flex justify-between relative cursor-pointer">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('price')">
        {{ priceRangeText }}
      </h3>

      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
        v-if="modal.price"
      >
        <input
          type="number"
          name=""
          id=""
          placeholder="Min"
          v-model="priceRange.min"
          class="border p-1 rounded"
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="Max"
          v-model="priceRange.max"
          class="border p-1 rounded mt-2"
        />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onPriceChange"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const city = ref<string>("");
const { makes } = useCars();

interface PriceRange {
  min: string;
  max: string;
}

const priceRange = ref<PriceRange>({
  min: "",
  max: "",
});

interface Modal {
  make: boolean;
  location: boolean;
  price: boolean;
}

const modal = ref<Modal>({
  make: false,
  location: false,
  price: false,
});

type Key = "make" | "location" | "price";

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any";
  else if (!minPrice && maxPrice) {
    return `< ${maxPrice}`;
  } else if (minPrice && !maxPrice) {
    return `> ${minPrice}`;
  } else {
    return `$${minPrice} - $${maxPrice}`;
  }
});

const updateModal = (key: Key): void => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = (): void => {
  if (!city.value) return;

  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format",
    });
  }

  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};

const onChangeMake = (make: string): void => {
  updateModal("make");
  navigateTo(`/city/${route.params.city}/car/${make}`);
};

const onPriceChange = (): void => {
  updateModal("price");

  if (priceRange.value.max && priceRange.value.min) {
    if (priceRange.value.min > priceRange.value.max) return;
  }

  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};
</script>
