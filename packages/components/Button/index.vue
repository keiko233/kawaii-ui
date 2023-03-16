<template>
  <button :class="classString">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import classNames from '../../utils/classNames';

const props = defineProps({
  type: { 
    type: String as PropType<string>,
    default: 'default'
  },
  size: {
    type: String as PropType<string>,
    default: 'md'
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});

const classString = classNames(
  `k-button-type-${props.type}`,
  `k-button-size-${props.size}`,
  props.round ? 'k-button-round' : ''
);
</script>

<style scoped lang="less">
@import './index.less';
</style>