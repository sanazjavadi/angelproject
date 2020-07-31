<script>
// svg
import basket from '@components/svg/basket-svg.vue'

// components
import cart from '@layouts/cart/mini-cart.vue'
import badge from '@components/badge.vue'
export default {
  components: { basket, cart, badge },
  props: {
    numberOfBasket: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      isOpenCart: false,
    }
  },
  methods: {
    openCart() {
      this.isOpenCart = true
    },
  },
}
</script>

<template>
  <div class="basket">
    <transition name="slide-fade">
      <cart v-if="isOpenCart" />
    </transition>
    <div @click="openCart">
      <basket />
      <badge />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.drop-enter-active,
.drop-leave-active {
  transition: transform 0.2s linear;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translate(-40vw);

  .slide-fade-leave,
  .slide-fade-enter-to {
    transform: translate(0);
  }
}
.basket {
  position: relative;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
}
</style>
