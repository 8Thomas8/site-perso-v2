<script setup>
import Footer from '../components/common/footer';
import Breadcrumbs from '../components/common/breadcrumbs';
import Header from '../components/common/header/header';

const navigation = [
  {
    name: 'Accueil',
    route: '/',
  },
  {
    name: 'Mon CV',
    route: '/cv',
  },
];

const asideIsVisible = ref(false);
</script>

<template>
  <div class="bg-base-200">
    <div class="drawer">
      <input v-model="asideIsVisible" id="menu-drawer" type="checkbox" class="drawer-toggle" ref="menuDrawerInput"/>
      <div class="drawer-content flex flex-col">

        <Header :navigation="navigation"/>

        <div class="w-full mx-auto max-w-5xl min-h-[36px] mb-4 lg:mb-8">
          <Breadcrumbs v-if="$route.path !== '/'"/>
        </div>
        <main class="flex-grow py-8 pt-3">
          <!-- Page content here -->
          <slot/>
        </main>

        <Footer/>
      </div>

      <!-- Aside menu -->
      <div class="drawer-side">
        <label for="menu-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-2">
          <!-- Sidebar content here -->
          <template v-for="(item, index) in navigation" :key="index">
            <li>
              <NuxtLink class="btn btn-primary rounded-lg" @click="asideIsVisible = false" :to="item.route" :title="item.name">{{
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
