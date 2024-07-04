<script setup lang="ts">
const props = defineProps({
  rows: {
    type: Array<{ name: string; dateOfBirth: string; phoneNumber: string }>,
    required: true,
  },
  selectedRowIndex: {
    type: Number,
    required: false,
    default: -1,
  },
});
</script>

<template>
  <BaseTable class="w-full" :num-of-items="rows.length" :num-of-columns="4">
    <template #headerRowContent>
      <BaseTableHeaderCell>Nome</BaseTableHeaderCell>
      <BaseTableHeaderCell>Data de Nascimento</BaseTableHeaderCell>
      <BaseTableHeaderCell>Celular</BaseTableHeaderCell>
      <BaseTableHeaderCell>Ação</BaseTableHeaderCell>
    </template>
    <template #bodyContent>
      <base-table-row
        v-for="(row, i) in rows"
        :key="`row-${i}`"
        class="cursor-pointer"
      >
        <base-table-cell class="text-center pl-2">
          {{ row.name }}
        </base-table-cell>
        <base-table-cell class="text-center pl-2">
          {{ row.dateOfBirth }}
        </base-table-cell>
        <base-table-cell class="text-center">
          {{ row.phoneNumber }}
        </base-table-cell>
        <base-table-cell class="text-center">
          {{}}
        </base-table-cell>
      </base-table-row>
    </template>
  </BaseTable>
</template>
