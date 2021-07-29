<template>
  <div v-if="$i18n.locale === 'de'">
    <legal-de />
  </div>
  <div v-else>
    <legal-en/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LegalDe from './components/Legal-DE.vue';
import LegalEn from './components/Legal-EN.vue';

export default defineComponent({
  name: 'Legal',
  components: {
    LegalDe,
    LegalEn,
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
