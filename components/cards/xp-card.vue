<script setup>
defineProps({
  experiences: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <section v-for="(xp, index) in experiences" :key="index" :id="'slide' + (index+1)" class="carousel-item relative w-full">
    <div class="card bg-base-100 shadow-xl max-w-xl mx-auto w-full relative">
      <div class="absolute left-auto right-4 top-2 badge badge-lg badge-accent">{{xp.type}}</div>

      <div class="p-6">
        <div class="flex justify-between">
          <h2 class="text-xl lg:text-3xl font-extrabold">{{ xp.enterprise }}</h2>
        </div>

        <div class="flex justify-between">
          <h3 class="text-base lg:text-xl"><span class="italic">{{ xp.city }}</span></h3>
          <p class="text-xs lg:text-sm font-light opacity-50">{{ xp.date }}</p>
        </div>

        <div class="divider"></div>

        <span class="block text-lg font-semibold text-right opacity-40 pb-4">Résumé</span>

        <div class="flex justify-end h-min pt-2 gap-2 flex-wrap">
          <template v-for="(comp, index) in xp.resume.skills" :key="index">
            <div class="badge badge-primary">{{ comp }}</div>
          </template>
        </div>

        <p class="pt-2">{{ xp.resume.comment }}</p>

        <template v-if="xp.exemples.length">
          <div class="divider pt-2"></div>

          <span
              class="block text-lg font-semibold text-right opacity-40 pb-4">Exemple de site</span>
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
    <div
        class="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a :class="index >= 1 ? '' : 'pointer-event-none opacity-20'"
         :href="'#slide' + (index)"
         class="btn btn-circle">❮</a>
      <a :class="index+1 < experiences.length ? '' : 'pointer-event-none opacity-20'"
         :href="'#slide' + (index + 2)" class="btn btn-circle">❯</a>
    </div>
  </section>
</template>
