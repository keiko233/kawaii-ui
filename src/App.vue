
<template>
  <div class="container d-flex-c">
    <KButton type="default">Default</KButton>
    <KButton type="primary">Primary</KButton>
    <KButton type="success">Success</KButton>
    <KButton type="warning">Warning</KButton>
    <KButton type="info">Info</KButton>
    <KButton type="danger">Danger</KButton>
    <KButton type="text">Text</KButton>
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
