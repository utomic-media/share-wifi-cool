<template>
  <div>
    <h1>{{ $t("pages.home.title") }}</h1>
    <p>{{ $t("pages.home.description") }}</p>
    <WiFiCard />
    
    <h2 class="mt-12">FAQ</h2>
    <!-- TODO: look for a nicer way to iterate through the faq -->
    <div v-if="$i18n.messages[$i18n.locale].pages?.home?.faq">
      <v-accordion :content='$i18n.messages[$i18n.locale].pages.home.faq' />
    </div>
    <div v-else>
      <v-accordion :content='$i18n.messages[$i18n.fallbackLocale].pages.home.faq' />
    </div>
    

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WiFiCard from '@/components/WiFiCard.vue';
import vAccordion from '@/components/base/v-Accodion.vue';

export default defineComponent({
  name: 'Home',
  components: {
    WiFiCard,
    vAccordion,
  },
  props: {
    //
  },
  setup() {
    // console.log(i18n);
    const test = '';

    return { test };
  },
});
</script>

<style scoped lang="scss">

</style>
