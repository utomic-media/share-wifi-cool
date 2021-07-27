<template>
  <div>
    <h1>{{ $t("pages.home.title") }}</h1>
    <div>{{ $t("pages.home.description") }}</div>
    <WiFiCard />
    <!-- TODO: render the FAQ toggles including links -->

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
