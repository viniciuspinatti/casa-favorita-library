<script setup lang="ts"></script>

<template>
  <base-button
    class="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white bg-white transition ease-in-out duration-500"
    v-bind="$attrs"
  >
    <slot></slot>
  </base-button>
</template>
