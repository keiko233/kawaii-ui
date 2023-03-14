
<template>
  <div class="container d-flex-c">
    <KButton>Button</KButton>
  </div>
</template>

<script setup lang="ts">
import KButton from './components/Button/index'

</script>

<style scoped lang="less">
.container {
  min-width: 100%;
  min-height: 100vh;
}

.d-flex-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
