<script>
// svg
import basket from '@components/svg/basket-svg.vue'

// components
import cart from '@layouts/cart/cart.vue'
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.basket {
  position: relative;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
}
</style>
