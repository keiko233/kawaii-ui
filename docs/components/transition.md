<!--
 * @Author: keiko233
 * @Date: 2023-04-24 14:22:02
 * @LastEditors: keiko233
 * @LastEditTime: 2023-05-23 02:09:14
 * @FilePath: /kawaii-ui/docs/components/transition.md
 * @Description: Connect me: i@elaina.moe
 * 
 * Copyright (c) 2023 by keiko233, All Rights Reserved. 
-->
<script setup>
import KTransition from './demo/Transition/Transition.vue'
</script>

# Transition

Looks like a for a game or anime.

## Transition Default

<DemoContainer>
  <KTransition></KTransition>
</DemoContainer>

<<< @/components/demo/Transition/Transition.vue

### Properties

| Name       | Type    | Default | Description                                   |
| ---------- | ------- | ------- | --------------------------------------------- |
| type       | string  | fade    | fade                                          |
| trigger    | boolean | true    | true, false                                   |
| loop       | boolean | true    | true, false                                   |