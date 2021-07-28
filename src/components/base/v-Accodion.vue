<template>
  <div class="v-accordion mb-7">
    <template
      v-for="(object, index) in content"
      :key="index"
    >
      <div class="my-3 border rounded-md">
        <h3
          @click="setActive(index)"
          class="p-3 italic"
          :class="
            (active === index)
              ? 'bg-green-50 hover:bg-gray-200'
              : 'bg-gray-200 hover:bg-green-50'
          "
        >
          {{ object.key }}
        </h3>

        <!-- TODO: #1 create opening transition -->
        <div
          v-show="index === active"
          class="p-3 text-sm"
        >
          {{ object.value }}
          <v-button
            v-if="object.link"
            :to="object.link.target"
            :hrefLink="object.link.target"
            textStyle
          >
            {{ object.link.text }}
          </v-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import VButton from './v-Button.vue';

interface Link {
  target: string,
  text: string,
}

interface AccordionContent {
  key: string | number,
  value: string | number,
  link?: Link,
  linkText?: string,
}

export default defineComponent({
  name: 'v-Accodion',
  components: {
    VButton,
    //
  },
  props: {
    content: {
      type: Array as PropType<Array<AccordionContent>>,
      required: true,
    },
  },
  setup() {
    const active = ref<number>();

    const setActive = (index: number) => {
      if (active.value === index) {
        active.value = undefined;
      } else {
        active.value = index;
      }
    };

    return { active, setActive };
  },
});
</script>

<style scoped lang="scss">

</style>
