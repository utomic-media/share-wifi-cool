<template>
  <div class="flex flex-col h-screen max-w-screen-md mx-auto">
    <TheHeader />
    <div class="mb-auto px-5">
      <router-view/>
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/core/TheHeader.vue';
import TheFooter from '@/components/core/TheFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
});
</script>

<style>

</style>
