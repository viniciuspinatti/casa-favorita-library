<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>

<template>
  <input
    type="text"
    :value="props.modelValue"
    v-bind="$attrs"
    v-maska="'(##) #####-####'"
    class="border-2 shadow-sm focus:outline-none focus:border-orange-600 p-2 font-medium"
    @input="updateValue($event)"
  />
</template>
