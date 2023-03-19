<script setup>
import Button from './demo/Button/Button.vue'
import ButtonCustom from './demo/Button/ButtonCustom.vue'
</script>

# Button

It can be clicked, it can be used, it looks good, and the animation is elegant.

## Button Default

<DemoContainer>
  <Button/>
</DemoContainer>

<<< @/components/demo/Button/Button.vue

## Button Props

<DemoContainer>
  <ButtonCustom/>
</DemoContainer>

<<< @/components/demo/Button/ButtonCustom.vue

### Properties

| Name  | Type    | Default | Description                                         |
| ----- | ------- | ------- | --------------------------------------------------- |
| type  | string  | primary | primary, success, warning, info, danger, text, mtf( |
| size  | string  | md      | sm, md, lg                                          |
| round | boolean | false   | true, false                                         |