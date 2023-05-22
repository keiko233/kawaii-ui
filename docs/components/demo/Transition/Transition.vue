<template>
  <KTransition :trigger="loading">
    <KCard>
      <KButton @Click="trigger">Click trigger transition</KButton>
    </KCard>
  </KTransition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);

const trigger = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  });
};
</script>