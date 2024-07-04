<script setup lang="ts">
const navbarMenu: Ref<HTMLDivElement | null> = ref(null);

const topMenuLinkClasses = computed(() => {
  return [
    "lg:w-28",
    "xl:w-36",
    "lg:min-h-16",
    "xl:min-h-12",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "text-center",
    "text-md",
    "font-medium",
    "text-black",
    "hover:text-blue-800",
    "cursor-pointer",
  ];
});

const sideMenuLinkClasses = computed(() => {
  return [
    "block",
    "p-2",
    "text-sm",
    "font-semibold",
    "text-black",
    "hover:border-blue-800",
    "hover:text-blue-800",
    "cursor-pointer",
  ];
});

const navigationLinks = [
  {
    text: "Início",
    url: "/biblioteca",
  },
  {
    text: "Cadastrar Pessoa",
    url: "/biblioteca/cadastro/pessoa",
  },
  {
    text: "Cadastrar Título",
    url: "/biblioteca/cadastro/titulo",
  },
  {
    text: "Cadastrar Livro",
    url: "/biblioteca/cadastro/livro",
  },
  {
    text: "Emprestar",
    url: "/biblioteca/cadastro/emprestar",
  },
  {
    text: "Devolver",
    url: "/biblioteca/cadastro/devolver",
  },
];

const navigate = (url: string) => {
  navbarMenu.value && navbarMenu.value.classList.toggle("hidden");
  navigateTo(url);
};
</script>

<template>
  <header class="shadow-sm">
    <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
      <BaseDesignLogo
        class="w-12 h-12 cursor-pointer"
        @click="navigateTo('/biblioteca/index')"
      />
      <div class="lg:hidden">
        <button
          class="flex items-center text-black p-3"
          @click="navbarMenu && navbarMenu.classList.toggle('hidden')"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <ul
        class="navigation-links hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:items-center lg:space-x-2 xl:space-x-3"
      >
        <li
          v-for="(link, idx) in navigationLinks"
          :key="idx"
          :class="topMenuLinkClasses"
          @click="navigateTo(link.url)"
        >
          {{ link.text }}
        </li>
      </ul>
      <BaseButtonSecondary class="hidden lg:inline-flex lg:w-28 xl:w-36"
        >Logout</BaseButtonSecondary
      >
    </nav>
    <div ref="navbarMenu" class="relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-slate-800 opacity-25"></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <div class="flex mb-4 justify-end">
          <button
            class="navbar-close"
            @click="navbarMenu && navbarMenu.classList.toggle('hidden')"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" size="xl" />
          </button>
        </div>
        <div>
          <ul class="space-y-6">
            <li
              v-for="(link, idx) in navigationLinks"
              :key="idx"
              @click="navigate(link.url)"
            >
              <a :class="sideMenuLinkClasses">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <div class="pt-6">
            <BaseButtonSecondary>Logout</BaseButtonSecondary>
          </div>
          <p class="my-4 text-xs text-center text-gray-400">
            <span>Desenvolvidor por Vinícius X. Pinatti</span>
          </p>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* https://codepen.io/t_afif/pen/xxpRrOG */
.navigation-links li {
  --c: #1e40af; /* the border color */
  --b: 2px; /* the border thickness*/
  --g: 5px; /* the gap on hover */

  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%, var(--c) 0;
  background: conic-gradient(
        from 180deg at top var(--b) right var(--b),
        var(--_g)
      )
      var(--_i, 200%) 0 /200% var(--_i, var(--b)) no-repeat,
    conic-gradient(at bottom var(--b) left var(--b), var(--_g)) 0
      var(--_i, 200%) / var(--_i, var(--b)) 200% no-repeat;
  transition: 0.3s, background-position 0.3s 0.3s;
  cursor: pointer;
}
.navigation-links li:hover {
  --_i: 100%;
  transition: 0.3s, background-size 0.3s 0.3s;
}
</style>
