<template>
  <a>
    <button :class="classString">
      <slot />
    </button>
  </a>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import classNames from '../../utils/classNames';

const props = defineProps({
  type: {
    type: String as PropType<string>,
    default: 'primary'
  },
  size: {
    type: String as PropType<string>,
    default: 'md'
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  stripe: {
    type: Boolean as PropType<boolean>,
    default: true
  }
});

const classString = classNames(
  `k-button-type-${props.type}`,
  `k-button-size-${props.size}`,
  props.round ? 'k-button-round' : '',
  props.stripe ? `k-button-stripe-${props.type}` : ''
);
</script>

<style scoped lang="less">
@import './index.less';
</style>