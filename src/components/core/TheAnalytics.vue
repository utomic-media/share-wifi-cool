<template>
  <div
    v-if="showBanner"
    class="flex sm:flex-row flex-col fixed bottom-0 bg-gray-300 m-3 p-7 rounded-md">
    <div class="mb-1">
      {{ $t('theAnalytics.message') }}
      <router-link :to="{ name: 'PrivacyPolicy' }" class="secondary">
        {{ $t("theFooter.legal.legal") }}
      </router-link>
    </div>
    <div class="flex flex-row">
      <v-button
        @click="declineCookies"
        textStyle
        class="mr-3"
      >
        {{ $t('theAnalytics.decline') }}
      </v-button>

      <v-button class="flex-grow" @click="acceptCookies" fullWidth>
        {{ $t('theAnalytics.accept') }}
      </v-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import vButton from '@/components/base/v-Button.vue';
import { initAnalytics } from '@/plugins/matomo/index.js';

export default defineComponent({
  name: 'TheAnalytics',
  components: {
    vButton,
  },
  // props: {
    //
  // },
  setup() {
    const showBanner = ref(true);

    const declineCookies = (() => {
      showBanner.value = false;
    });

    const acceptCookies = (() => {
      initAnalytics();
      showBanner.value = false;
    });

    return { showBanner, declineCookies, acceptCookies };
  },
});
</script>

<style scoped lang="scss">

</style>
