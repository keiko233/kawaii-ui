<template>
  <div class="k-transition-container" :class="props.type">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface ComponentProps {
  trigger: boolean;
  type: 'fade-out' | 'fade-in';
};

const props = withDefaults(defineProps<ComponentProps>(), {
  type: 'fade-out',
});
</script>

<style scoped lang="less">
@import './index.less';

.k-transition-container {
  &.fade-out {
    animation: KfadeoutAnimation 1s normal 1 forwards;

    @keyframes KfadeoutAnimation {
      0% {
        transform: scale(1) rotate(0);
        opacity: 1;
        filter: blur(0);
      }

      100% {
        transform: scale(0.2) rotate(0.01turn);
        opacity: 0;
        filter: blur(12px);
      }
    }
  }

  &.fade-in {
    animation: KfadeinAnimation 1s normal 1 forwards;

    @keyframes KfadeinAnimation {
      0% {
        transform: scale(0.2) rotate(-0.01turn);
        opacity: 0;
        filter: blur(12px);
      }

      100% {
        transform: scale(1) rotate(0);
        opacity: 1;
        filter: blur(0);
      }
    }
  }
}
</style>