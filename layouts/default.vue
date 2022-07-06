<script setup>
import Footer from "../components/common/footer";

const navigation = [
  {name: 'Accueil', route: '/'},
  {name: 'Mon CV', route: '/cv'},
]
</script>

<template>
  <div>
    <div class="drawer">
      <input id="menu-drawer" type="checkbox" class="drawer-toggle"/>
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
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
            <div class="flex-1 px-2 mx-2">
              <NuxtLink :to="navigation[0].route" :title="navigation[0].name">Thomas-Rousseau.fr</NuxtLink>
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal gap-x-2">
                <!-- Navbar menu content here -->
                <template v-for="(item, index) in navigation" :key="index">
                  <li>
                    <NuxtLink class="btn btn-primary rounded-lg min-w-[96px]" :to="item.route" :title="item.name">
                      {{ item.name }}
                    </NuxtLink>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <!-- Page content here -->
          <slot/>

        <Footer />
      </div>
      <div class="drawer-side">
        <label for="menu-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-2">
          <!-- Sidebar content here -->
          <template v-for="(item, index) in navigation" :key="index">
            <li>
              <NuxtLink class="btn btn-primary rounded-lg" :to="item.route" :title="item.name">{{
                  item.name
                }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
