<script>
import basket from '@components/svg/basket-svg.vue'
export default {
  components: { basket },
  props: {
    numberOfBasket: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {}
  },
}
</script>

<template>
  <div class="basket">
    <basket />

    <div v-if="numberOfBasket" class="badge">{{ numberOfBasket }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.basket {
  position: relative;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  .badge {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: $yellow;
    color: $dark-blue;
    font-size: 14px;
    top: 0;
    text-align: center;
  }
}
</style>
