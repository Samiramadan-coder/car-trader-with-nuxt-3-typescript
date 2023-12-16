<template>
  <div>
    <div>
      <h1 class="text-6xl mt-24">Create a New Listing</h1>
    </div>

    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <car-add-select title="Make *" :options="makes" v-model="info.make" />
      <car-add-input
        v-for="input in inputs"
        :key="input.id"
        :placeholder="input.placeholder"
        :name="input.name"
        v-model="info[input.name]"
        :title="input.title"
      />
      <car-add-textarea
        placeholder="Description"
        name="description"
        v-model="info.description"
        title="Description"
      />
      <car-add-image @set-image="(img) => (info.image = img)" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const { makes } = useCars();

interface Input {
  id: number;
  title: string;
  name: "model" | "year" | "miles" | "city" | "seats" | "features";
  placeholder: string;
}

const inputs: Input[] = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 5,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 6,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No accident",
  },
];

interface Info {
  make: string;
  model: string;
  year: string;
  miles: string;
  price: string;
  city: string;
  seats: string;
  features: string;
  description: string;
  image: null;
}

const info = useState<Info>(
  "addInfo",
  (): Info => ({
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  })
);
</script>
