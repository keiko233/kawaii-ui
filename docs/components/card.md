<script setup>
import Card from './demo/Card/Card.vue'
</script>

# Card

Looks like a text box for a game.

## Card Default

<DemoContainer>
  <Card/>
</DemoContainer>

<<< @/components/demo/Card/Card.vue

### Properties

| Name       | Type    | Default | Description                                   |
| ---------- | ------- | ------- | --------------------------------------------- |
| type       | string  | primary | primary, success, warning, info, danger, text |
| title      | string  | null    | any string                                    |
| shadow     | boolean | true    | true, false                                   |
| bordered   | boolean | true    | true, false                                   |
| titleStyle | string  | outside | outside, inside, fill                         |