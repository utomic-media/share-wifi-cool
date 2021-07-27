<template>
  <div class="flex flex-row py-3 px-5 justify-between">
    <div>
      Developed and designed by
      <a href="utomic.media" target="blank" rel="noopener" >Utomic Media</a>
    </div>
    
    <div>
      <router-link
        :to="{ name: 'Legal' }"
        class="secondary py-2 px-4"
      >
        Legal
      </router-link>
      <router-link
        :to="{ name: 'PrivacyPolicy' }"
        class="secondary py-2 px-4"
      >
        Privacy policy
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
