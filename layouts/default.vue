<script setup lang="ts">
const asideIsVisible = ref(false);
</script>

<template>
  <div class="bg-base-200">
    <div class="drawer">
      <input v-model="asideIsVisible" id="menu-drawer" type="checkbox" class="drawer-toggle" ref="menuDrawerInput"/>
      <div class="drawer-content flex flex-col">

        <CommonHeader/>

        <main class="flex-grow py-8 pt-3">
          <!-- Page content here -->
          <slot/>
        </main>

        <CommonFooter/>
      </div>
    </div>
  </div>
</template>
