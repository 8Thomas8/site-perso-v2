<script setup>
defineProps({
  xp: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
    <div class="card bg-base-100 rounded-lg shadow-xl max-w-xl mx-auto w-full">
      <div class="p-6">
        <div class="flex justify-between">
          <h2 class="text-xl lg:text-3xl font-extrabold">{{ xp.enterprise }} <span class="badge badge-accent relative -top-1">{{xp.type}}</span></h2>
        </div>

        <div class="flex justify-between">
          <h3 class="text-base lg:text-xl"><span class="italic">{{ xp.city }}</span>
          </h3>
          <p class="opacity-75 text-info font-bold text-sm lg:text-lg">{{ xp.date }}</p>
        </div>


        <div class="divider"></div>

        <span class="block text-lg font-semibold text-right opacity-30 pb-4">Résumé</span>

        <div class="flex justify-end h-min pt-2 gap-2 flex-wrap">
          <template v-for="(comp, index) in xp.resume.skills" :key="index">
            <div class="badge badge-primary">{{ comp }}</div>
          </template>
        </div>

        <p class="pt-2">{{ xp.resume.comment }}</p>

        <template v-if="xp.exemples.length">
          <div class="divider pt-2"></div>

          <span
              class="block text-lg font-semibold text-right opacity-30 pb-4">Exemple de site</span>
          <div class="flex flex-wrap gap-2">
            <template v-for="(site, index) in xp.exemples" :key="index">
              <a class="btn btn-outline btn-accent btn-xs" :href="site.href"
                 :title="site.name"
                 target="_blank">{{ site.name }}</a>
            </template>
          </div>
        </template>
      </div>
    </div>
</template>
