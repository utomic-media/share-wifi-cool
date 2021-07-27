<template>
  <div class="flex flex-col mb-3">

    <label v-if="label">
      {{ label }}
    </label>

    <div class="flex" :class="[row ? 'flex-row' : 'flex-col']">
      <div
        v-for="option in options"
        :key="option.key"
      >
        <input
          type="radio"
          class="mr-1"
          :id="option.key"
          :value="option.value"
          :checked="option.value === modelValue"
          @change="updateSelection"
        />
        <label :for="option.key" class="mr-3">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

interface SelectOption {
  key: string | number,
  value: string | number,
  label: string | number,
}


export default defineComponent({
  name: 'vRadio',
  components: {
    //
  },

  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Array<SelectOption>>,
      required: true,
    },
    label: {
      type: String,
    },
    row: {
      type: Boolean,
    },
  },

  setup(props, { emit }) {
    const showLabel = computed(() => props.modelValue !== '');

    const updateSelection = (event: InputEvent) => {
      emit('update:modelValue', (event.target as HTMLInputElement).value);
    };

    return { showLabel, updateSelection };
  },

});
</script>

<style scoped lang="scss">

</style>
