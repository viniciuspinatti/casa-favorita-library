<script setup lang="ts"></script>

<template>
  <base-button
    class="text-slate-800 border-slate-800 hover:bg-slate-800 hover:text-white bg-white transition ease-in-out duration-500"
    v-bind="$attrs"
  >
    <slot></slot>
  </base-button>
</template>
