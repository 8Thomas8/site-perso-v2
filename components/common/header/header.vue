<script setup>

import Logo from './logo';

defineProps({
  navigation: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="w-full navbar bg-base-300">
    <div class="w-full mx-auto max-w-5xl">
      <div class="flex-none lg:hidden">
        <label for="menu-drawer" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div class="flex-1 px-4">
        <Logo :title="navigation[0].name" :route="navigation[0].route"/>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal gap-x-2">
          <!-- Navbar menu content here -->
          <template v-for="(item, index) in navigation" :key="index">
            <li>
              <NuxtLink class="btn btn-primary rounded-lg min-w-[96px]" :to="item.route"
                        :title="item.name">
                {{ item.name }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
