<template>
  <div class="flex flex-col h-screen max-w-screen-md mx-auto">
    <TheHeader />
    <router-view class="mb-auto px-5"/>
    <TheFooter />
    <TheAnalytics />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/core/TheHeader.vue';
import TheFooter from '@/components/core/TheFooter.vue';
import TheAnalytics from '@/components/core/TheAnalytics.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheAnalytics,
  },
});
</script>

<style>

</style>
