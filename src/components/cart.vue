<script>
import badge from '@components/badge.vue'
export default {
  components: {
    badge,
  },
}
</script>

<template>
  <div class="cart-area">
    <div class="cart-title d-flex align-items-center justify-content-between">
      <baseCloseButton class="ml-3" />

      <span class="text-center"> لیست آرزوها</span>

      <badge size="30" lineheight="25" class="mr-3" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';

.cart-area {
  position: fixed;
  right: 0;
  top: 0;
  min-height: 100%;
  width: 100%;
  max-width: 475px;
  background-color: #fff;
  z-index: 2;
  border-left: 1px solid $light-gray;
  .cart-title {
    border-bottom: 1px solid $light-blue;
    position: relative;
    height: 60px;
    span {
      color: $dark-blue;
      font-weight: 700;
      font-size: 18px;
    }
  }
}
</style>
