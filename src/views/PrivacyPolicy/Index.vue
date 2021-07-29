<template>
  <div v-if="$i18n.locale === 'de'">
    <privacy-policy-de />
  </div>
  <div v-else>
    <privacy-policy-en/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PrivacyPolicyDe from './components/PrivacyPolicy-DE.vue';
import PrivacyPolicyEn from './components/PrivacyPolicy-EN.vue';

export default defineComponent({
  name: 'PrivacyPolicy',
  components: {
    PrivacyPolicyDe,
    PrivacyPolicyEn,
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
