<template>
  <div class="px-5">
    <span>
      Developed and designed by
      <a href="utomic.media" target="blank" rel="noopener">Utomic Media</a>
    </span>
    <span>
      Developed and designed by
      <a href="utomic.media" target="blank" rel="noopener">Utomic Media</a>
    </span>
    <router-link :to="{ name: 'Legal' }">Legal</router-link>
    <router-link :to="{ name: 'PrivacyPolicy' }">Privacy policy</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',
  components: {
    //
  },
  props: {
    //
  },
  setup() {
    //
  },
});
</script>

<style scoped lang="scss">

</style>
