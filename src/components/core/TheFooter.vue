<template>
  <div class="flex sm:flex-row flex-col py-5 px-5 justify-between">
    <div>
      {{ $t("theFooter.text") }}
      <a href="https://utomic.media" target="blank" rel="noopener" >Utomic Media</a>
    </div>
    
    <div>
      <router-link
        :to="{ name: 'Legal' }"
        class="secondary py-2  sm:px-4 pr-4"
      >
        {{ $t("theFooter.legal.legal") }}
      </router-link>
      <router-link
        :to="{ name: 'PrivacyPolicy' }"
        class="secondary py-2 px-4"
      >
        {{ $t("theFooter.legal.privacyPolicy") }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',
  components: {
    //
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
