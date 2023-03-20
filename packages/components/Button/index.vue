<template>
  <a :class="classString">
    <button :class="classContentString">
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
  },
  bordered: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  shadow: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  rounded: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});

const classString = classNames(
  `k-button-type-${props.type}`,
  `k-button-size-${props.size}`,
  props.rounded ? 'k-button-rounded' : ''
);

const classContentString = classNames(
  `k-button-content`,
  props.bordered ? `k-button-bordered-${props.type}` : '',
  props.stripe ? `k-button-stripe` : '',
  props.round ? 'k-button-round' : '',
  props.shadow ? 'k-button-shadow' : ''
);
</script>

<style scoped lang="less">
@import './index.less';
</style>