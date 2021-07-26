<template>
  <div>
    
    
    <WiFiCard />

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WiFiCard from '@/components/WiFiCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    WiFiCard,
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
