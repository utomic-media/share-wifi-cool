<template>
  <LocaleSelection />
  <router-view />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheFooter from '@/components/base/TheFooter.vue';
import LocaleSelection from '@/components/LocaleSelection/Index.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheFooter,
    LocaleSelection,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
