import { defineNuxtPlugin, useCookie } from '#app';
import { useDarkmode } from '~/composables/useDarkmode';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const isActiveCookie = useCookie('darkmode');
    const darkmode = useDarkmode();

    if (isActiveCookie.value) {
      darkmode.isActive.value = isActiveCookie.value;
    }
  });
});
