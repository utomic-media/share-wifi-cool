<template>
  <div class="v-radio flex flex-col mb-3">

    <label v-if="label">
      {{ label }}
    </label>

    <div class="flex v-radio-options" :class="[row ? 'flex-row' : 'flex-col']">
      <template
        v-for="option in options"
        :key="option.key"
      >
        <div :class="[option.value === modelValue ? 'selected' : '']">
          <input
            type="radio"
            class="mr-1"
            :id="option.key"
            :value="option.value"
            :checked="option.value === modelValue"
            @change="updateSelection"
          />
          <label :for="option.key" class="mr-3 text-gray-700">{{ option.label }}</label>
        </div>
      </template>
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
