<template>
  <div>
    <h1>{{ $t("pages.home.title") }}</h1>
    <p>{{ $t("pages.home.description") }}</p>
    <WiFiCard />
    
    <h2 class="mt-12">FAQ</h2>
    <v-accordion :content="faq" />
    

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import WiFiCard from '@/components/WiFiCard.vue';
import vAccordion from '@/components/base/v-Accodion.vue';
import { useI18n } from 'vue-i18n';

interface Link {
  target: string,
  text: string,
}

interface FAQ {
  key: string,
  value: string,
  link?: Link,
}

export default defineComponent({
  name: 'Home',
  components: {
    WiFiCard,
    vAccordion,
  },
  // props: {
    //
  // },
  setup() {
    const { t } = useI18n();

    const faq = computed(() => {
      const faqKeys = ['supportedPhones', 'storedData', 'security', 'errorFound', 'translationEdit'];
      const constructedFAQs: Array<FAQ> = [];

      faqKeys.forEach((element) => {
        const currentFAQ: FAQ = {
          key: t(`pages.home.faq.${element}.key`),
          value: t(`pages.home.faq.${element}.value`),
        };

        // also add a link property if exists
        if (
          t(`pages.home.faq.${element}.link.target`, [], '0') !== '0'
          && t(`pages.home.faq.${element}.link.text`, [], '0') !== '0'
        ) {
          currentFAQ.link = {
            target: t(`pages.home.faq.${element}.link.target`),
            text: t(`pages.home.faq.${element}.link.text`),
          };
        }
        constructedFAQs.push(currentFAQ);
      });
      
      return constructedFAQs;
    });

    return { faq };
  },
});
</script>

<style scoped lang="scss">

</style>
