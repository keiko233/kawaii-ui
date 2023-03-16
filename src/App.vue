
<template>
  <div class="container d-flex-c">
    <div>
      <KButton type="primary">Primary</KButton>
      <KButton type="success">Success</KButton>
      <KButton type="warning">Warning</KButton>
      <KButton type="info">Info</KButton>
      <KButton type="danger">Danger</KButton>
      <KButton type="text">Text</KButton>
    </div>
    <div>
      <KButton size="sm" type="primary">Primary</KButton>
      <KButton size="sm" type="success">Success</KButton>
      <KButton size="sm" type="warning">Warning</KButton>
      <KButton size="sm" type="info">Info</KButton>
      <KButton size="sm" type="danger">Danger</KButton>
      <KButton size="sm" type="text">Text</KButton>
    </div>
    <div>
      <KButton size="lg" type="primary">Primary</KButton>
      <KButton size="lg" type="success">Success</KButton>
      <KButton size="lg" type="warning">Warning</KButton>
      <KButton size="lg" type="info">Info</KButton>
      <KButton size="lg" type="danger">Danger</KButton>
      <KButton size="lg" type="text">Text</KButton>
    </div>
    <div>
      <KButton round type="primary">Primary</KButton>
      <KButton round type="success">Success</KButton>
      <KButton round type="warning">Warning</KButton>
      <KButton round type="info">Info</KButton>
      <KButton round type="danger">Danger</KButton>
      <KButton round type="text">Text</KButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import KButton from './components/Button/index.vue'

</script>

<style scoped lang="less">
.container {
  min-width: 80%;
  min-height: 100vh;
  margin: 0 10%;
}

.d-flex-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.d-flex-c div {
  margin-bottom: 10px;
}
</style>
