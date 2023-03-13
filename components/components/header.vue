<script setup lang="ts">
defineProps({
  navigation: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="navbar bg-base-300">
    <div class="flex flex-1 justify-end px-2">
      <div class="flex items-stretch">
        <nuxt-link to="/" title="Page d'accueil" class="btn btn-ghost rounded-btn">Home</nuxt-link>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost rounded-btn">Tools</label>
          <ul tabindex="0" class="mt-4 w-52 p-2 shadow menu dropdown-content bg-base-100 rounded-box">
            <li><nuxt-link title="Slugify" to="/tools/slugify">Slugify</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
