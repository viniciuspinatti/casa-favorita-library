<script setup lang="ts"></script>

<template>
  <th
    class="sticky border-b-2 border-gray py-3 bg-slate-800 text-white font-bold tracking-wider uppercase text-xs"
    v-bind="$attrs"
  >
    <slot></slot>
  </th>
</template>
