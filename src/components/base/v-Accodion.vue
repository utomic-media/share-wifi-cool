<template>
  <div>
    <template
      v-for="(object, index) in content"
      :key="index"
    >
      <div class="my-3 border rounded-md">
        <h3
          @click="setActive(index)"
          class="p-3 bg-green-50 hover:bg-gray-200"
        >
          {{ object.key }}
        </h3>

        <!-- TODO: create opening transition -->
        <div
          v-show="index === active"
          class="p-3"
        >
          {{ object.value }}
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

interface AccordionContent {
  key: string | number,
  value: string | number,
  link?: string,
  linkText?: string,
}

export default defineComponent({
  name: 'v-Accodion',
  components: {
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
