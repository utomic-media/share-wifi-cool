<template>
  <nav class="flex flex-wrap flex-row justify-between items-center px-5 my-5 sm:my-7">
    <router-link :to="{name: 'Home'}" class="flex flex-row items-center">
      <img
        src="/img/icons/apple-touch-icon-60x60.png"
        alt="Share Wifi Cool - Share as a QR code"
        width="50"
        height="50"
      >
      <h2 class="ml-3 hidden sm:block">Share WiFi</h2>
    </router-link>
    <div class="flex flex-row">
      <LocaleSelection />
      <a
        href="https://github.com/utomic-media/share-wifi-cool"
        target="blank"
        rel="noopener"
        class="py-2 px-4 "
      >
        {{ $t('theHeader.viewOnGithub') }}
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LocaleSelection from '@/components/LocaleSelection.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    LocaleSelection,
  },
  // props: {
    //
  // },
  setup() {
    //
  },
});
</script>

<style scoped lang="scss">

</style>
