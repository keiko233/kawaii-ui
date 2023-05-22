<template>
  <div class="k-transition-container" :class="classString">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const classString = ref();

interface ComponentProps {
  trigger: boolean;
  type: 'fade';
  loop: boolean;
};

const props = withDefaults(defineProps<ComponentProps>(), {
  type: 'fade',
  loop: true,
});

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

watch(() => {
  return props.trigger;
}, async () => {
  // 在prop变化时执行的逻辑
  if (props.trigger == true) {
    switch (props.type) {
      case 'fade':
        classString.value = 'fade-out';
        if (props.loop) {
          setTimeout(() => {
            classString.value = 'fade-in';
          }, 1000);
        };
        break;
    }
  };
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