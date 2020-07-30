<script>
export default {
  props: {
    numberOfBasket: {
      type: Number,
      default: 3,
    },
    size: {
      type: Number,
      default: 20,
    },
    lineheight: {
      type: Number,
      default: 18,
    },
  },
}
</script>

<template>
  <div
    v-if="numberOfBasket"
    class="badge"
    :style="{
      height: size + 'px',
      width: size + 'px',
      lineHeight: lineheight + 'px',
    }"
    >{{ numberOfBasket }}</div
  >
</template>

<style lang="scss" scoped>
@import '@design';
.badge {
  border-radius: 50%;
  background-color: $yellow;
  color: $dark-blue;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
}
</style>
