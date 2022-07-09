<script setup>
import Footer from '../components/common/footer';
import Breadcrumbs from '../components/common/breadcrumbs';
import DrawerSide from '../components/common/drawer-side';
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
</script>

<template>
  <div class="bg-base-200">
    <div class="drawer">
      <input id="menu-drawer" type="checkbox" class="drawer-toggle"/>
      <div class="drawer-content flex flex-col">

        <Header :navigation="navigation"/>

        <div class="w-full mx-auto max-w-5xl h-[36px] mb-4 lg:mb-8">
          <Breadcrumbs v-if="$route.path !== '/'"/>
        </div>
        <main class="flex-grow py-8 pt-3">
          <!-- Page content here -->
          <slot/>
        </main>

        <Footer/>
      </div>

      <DrawerSide :navigation="navigation"/>

    </div>
  </div>
</template>
