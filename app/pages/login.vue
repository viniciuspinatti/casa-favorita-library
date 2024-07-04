<script setup lang="ts">
const user = ref("");
const password = ref("");

const login = () => {
  navigateTo("/biblioteca");
};
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="space-y-4 sm:w-3/4 lg:w-3/6">
      <BaseDesignLogo class="h-28 w-28 m-auto"></BaseDesignLogo>
      <h1 class="text-2xl text-center">
        Informe usuário e senha para acessar o sistema da biblioteca
      </h1>
      <div class="flex flex-col text-left">
        <BaseLabel>Usuário</BaseLabel>
        <BaseInput type="email" v-model="user" />
        <BaseLabel>Senha</BaseLabel>
        <BaseInput type="password" v-model="password" />
      </div>
      <base-button-primary class="w-full" @click="login"
        >Entrar</base-button-primary
      >
    </div>
  </div>
</template>
