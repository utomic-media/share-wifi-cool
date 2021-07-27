<template>
  <div class="v-input flex flex-col mb-3">
    <label
      v-show="label && showLabel"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :value="modelValue"
      @input="updateInput"
      :id="id"
      :name="id"
      :placeholder="placeholder"
      autocomplete="off"
      class="border rounded-md p-3 placeholder-gray-500 text-gray-700"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'vInput',
  components: {
    //
  },

  props: {
    modelValue: {
      type: String,
      required: true,
    },
    // id for css id and name attribute
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    const showLabel = computed(() => props.modelValue !== '');

    const updateInput = (event: InputEvent) => {
      emit('update:modelValue', (event.target as HTMLInputElement).value);
    };

    return { showLabel, updateInput };
  },

});
</script>

<style scoped lang="scss">

</style>
