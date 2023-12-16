<template>
  <div class="flex flex-col w-[100%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>

    <textarea
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      :name="name"
      v-model="textAreaValue"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textAreaValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
