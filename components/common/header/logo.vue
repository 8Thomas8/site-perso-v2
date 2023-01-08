<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  route: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div>
    <NuxtLink :to="route" :title="title" class="font-roboto font-extrabold uppercase text-lg">
      [ Thomas-Rousseau.fr ]
    </NuxtLink>
  </div>
</template>
