<script setup>
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
  <NuxtLink :to="route" :title="title">
    Thomas-Rousseau.fr
  </NuxtLink>
</template>
