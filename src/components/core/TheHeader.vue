<template>
  <nav class="flex flex-wrap flex-row justify-end px-5 my-3">
    <LocaleSelection />
    <a href="https://github.com/utomic-media/share-wifi-cool" class="py-2 px-4 ">
      {{ $t('theHeader.viewOnGithub') }}
    </a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LocaleSelection from '@/components/LocaleSelection/Index.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    LocaleSelection,
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
