<script setup>
defineProps({
  navigation: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
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
</template>
