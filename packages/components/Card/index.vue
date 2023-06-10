<template>
  <div :class="classString">
    <div class="k-card-title" v-if="props.title && props.titleStyle == 'outside'" :style="customColor()">
      {{ props.title }}
    </div>
    <div :class="classContentString" :style="customHeight() + customColor()">
      <div :class="'k-card-title-' + props.titleStyle" v-if="props.title && props.titleStyle !== 'outside'">
        {{ props.title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import classNames from '../../utils/classNames';

const props = defineProps({
  type: {
    type: String as PropType<string>,
    default: 'primary'
  },
  bordered: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  shadow: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  title: {
    type: String as PropType<string>,
    default: null
  },
  titleStyle: {
    type: String as PropType<string>,
    default: 'outside'
  },
  stripe: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  color: {
    type: String as PropType<string>,
    default: null
  },
  height: {
    type: Number as PropType<number>,
    default: null
  }
});

const classString = classNames(
  `k-card-type-${props.type}`,
  props.bordered ? 'k-card-bordered' : '',
  props.shadow ? 'k-card-shadow' : ''
);

const classContentString = classNames(
  'k-card-content',
  props.stripe ? 'k-card-stripe' : ''
);

const customHeight = () => {
  if (props.height) return `height: ${props.height};`;
  else return '';
}

const customColor = () => {
  if (props.color) return 'background-color:' + props.color;
  else return '';
} 
</script>

<style scoped lang="less">
@import './index.less';
</style>