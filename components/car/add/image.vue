<template>
  <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <label for="" class="text-cyan-500 mb-1 text-sm">Image *</label>

    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            type="file"
            class="opacity-0 absolute cursor-pointer"
            accept="image/*"
            ref="file"
            @change="onImageUpload"
          />
          <span class="cursor-pointer">Browse File</span>
        </div>
        <div v-if="imgSrc">
          <img :src="typeof imgSrc === 'string' ? imgSrc : ''" alt="" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const file = ref<HTMLInputElement>();
const imgSrc = ref<string | ArrayBuffer | null | undefined>("");
const emit = defineEmits(["setImage"]);

const onImageUpload = (): void => {
  if (file?.value?.files?.[0]) {
    emit("setImage", file.value.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(file.value.files[0]);
    reader.onload = (e) => {
      imgSrc.value = e.target?.result;
    };
  }
};
</script>
