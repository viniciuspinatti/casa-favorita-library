<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "text",
    validator(value: string) {
      return ["email", "number", "password", "tel", "text", "date"].includes(
        value
      );
    },
  },
  modelValue: {
    type: [String, Number],
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
    :type="type"
    :value="props.modelValue"
    v-bind="$attrs"
    class="border-2 shadow-sm focus:outline-none focus:border-orange-600 p-2 font-medium"
    @input="updateValue($event)"
  />
</template>
