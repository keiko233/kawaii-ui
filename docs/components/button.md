<script setup>
import ButtonMd from './demo/Button/ButtonMd.vue'
import ButtonSm from './demo/Button/ButtonSm.vue'
import ButtonLg from './demo/Button/ButtonLg.vue'
import ButtonRound from './demo/Button/ButtonRound.vue'
</script>

# Button

It can be clicked, it can be used, it looks good, and the animation is elegant.

## Button Default

<DemoContainer>
  <ButtonMd/>
</DemoContainer>

<<< @/components/demo/Button/ButtonMd.vue

## Button Size

<DemoContainer>
  <ButtonSm/>
</DemoContainer>

<<< @/components/demo/Button/ButtonSm.vue

<DemoContainer>
  <ButtonLg/>
</DemoContainer>

<<< @/components/demo/Button/ButtonLg.vue

## Button Round

<DemoContainer>
  <ButtonRound/>
</DemoContainer>

<<< @/components/demo/Button/ButtonRound.vue

### Properties

| Name  | Type    | Default | Description                                   |
| ----- | ------- | ------- | --------------------------------------------- |
| type  | string  | primary | primary, success, warning, info, danger, text |
| size  | string  | md      | sm, md, lg                                    |
| round | boolean | false   | true, false                                   |