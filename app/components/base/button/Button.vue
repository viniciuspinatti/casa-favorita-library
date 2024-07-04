<script setup lang="ts"></script>

<template>
  <button
    class="text-base border-solid border-2 font-semibold px-4 py-2 inline-flex items-center justify-center"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
