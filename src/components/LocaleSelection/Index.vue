<template>
  <div class="locale-changer py-2 px-4">
    <label for="language-selection" class="text-gray-700 mr-1">
      {{ $t('theHeader.selectLanguage') }}:
    </label>
    <select
      name="language-selection"
      id="language-selection"
      v-model="$i18n.locale"
      class="text-gray-700"
    >
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocaleSelection',
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
