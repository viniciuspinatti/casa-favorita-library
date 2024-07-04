<script setup lang="ts">
const props = defineProps({
  numOfItems: {
    type: Number,
    require: false,
    default: 0,
  },
  numOfColumns: {
    type: Number,
    require: false,
    default: 0,
  },
});
</script>

<template>
  <table
    class="border-2 border-collapse table-fixed whitespace-normal"
    v-bind="$attrs"
  >
    <thead>
      <tr>
        <slot name="headerRowContent"></slot>
      </tr>
    </thead>
    <tbody>
      <slot name="bodyContent"></slot>
      <tr v-if="!props.numOfItems">
        <th
          :colspan="props.numOfColumns"
          class="text-center text-gray-dark font-normal py-3"
        >
          No data available
        </th>
      </tr>
    </tbody>
  </table>
</template>
