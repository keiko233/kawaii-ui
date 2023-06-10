<template>
  <KTransition :type="type">
    <KCard title="KTransition">
      <p>KTransition Template Element</p>
    </KCard>
  </KTransition>
  <KButton @Click="trigger">Click trigger transition</KButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const type = ref('fade-in');

const trigger = () => {
  if (type.value == 'fade-in') type.value = 'fade-out';
  else type.value = 'fade-in'
};
</script>