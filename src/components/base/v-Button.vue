<template>
  <div class="v-button my-3">
    <component
      :is="component"
      :ref="component === 'a' ? 'noopener noreferer' : null"
      :download="download"
      :to="to"
      :href="href"
      :target="component === 'a' ? '_blank' : null"
      @click.stop="onClick"
      class="py-2 inline-block"
      :class="styleClasses"
    >
      <slot />
    </component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'vButton',
  components: {
    //
  },
  props: {
    textStyle: {
      type: Boolean,
    },
    // to = router link
    to: {
      type: String as PropType<string | Location>,
    },
    disabled: {
      type: Boolean,
    },
    // href = normal html link
    hrefLink: {
      type: String,
    },
    download: {
      type: Boolean,
    },
  },

  setup(props, { emit }) {
    const component = computed<'a' | 'router-link' | 'button'>(() => {
      if (props.disabled) return 'button';
      if (props.hrefLink) return 'a';
      if (props.to) return 'router-link';
      return 'button';
    });

    const href = computed(() => props.to || props.hrefLink);
    

    const styleClasses = computed(() => {
      const defaultStyles = 'px-3 border border-current rounded-md';
      const defaultStyleDisabled = 'cursor-not-allowed';
      const primaryStyle = 'bg-green-500 text-white hover:bg-green-700 hover:text-gray-50';
      const primarySytleDisabled = 'bg-gray-500 text-white hover:bg-gray-400 hover:text-gray-50';
      const textStyle = 'hover:text-green-700 hover:bg-gray-50';
      const textStyleDisabled = 'bg-gray-100 text-gray-500 hover:text-gray-300 hover:bg-gray-50';

      if (props.textStyle && props.disabled) {
        return `${defaultStyles} ${textStyleDisabled} ${defaultStyleDisabled}`;
      } else if (props.textStyle && !props.disabled) {
        return `${defaultStyles} ${textStyle}`;
      } else if (props.disabled) {
        return `${defaultStyles} ${primarySytleDisabled} ${defaultStyleDisabled}`;
      }
      return `${defaultStyles} ${primaryStyle}`;
    });

    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return {
      component, onClick, href, styleClasses,
    };
  },

});
</script>

<style scoped lang="scss">

</style>
