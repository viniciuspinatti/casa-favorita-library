<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <label class="font-semibold" v-bind="$attrs"><slot></slot></label>
</template>
