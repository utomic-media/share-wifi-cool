<template>
  <div class="flex flex-col h-screen max-w-screen-md mx-auto">
    <TheHeader />
    <router-view class="mb-auto px-5"/>
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
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
