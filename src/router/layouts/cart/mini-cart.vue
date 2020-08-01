<script>
import badge from '@components/badge.vue'
import products from '@components/product-cart.vue'
import cart from '@layouts/cart/cart.vue'
export default {
  components: {
    badge,
    products,
    cart,
  },
  data() {
    return {
      isCartOpen: false,
    }
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="cart-area">
      <div class="cart-title d-flex align-items-center justify-content-between">
        <baseCloseButton class="ml-3" />

        <span class="text-center"> لیست آرزوها</span>

        <badge :size="30" :lineheight="25" class="mr-3" />
      </div>

      <div class="products-cart px-3">
        <products />
      </div>
      <div class="footer-cart">
        <div
          class="general-price d-flex align-items-center justify-content-between mx-3 py-3 my-3"
        >
          <p class="m-0">مبلغ کل</p>
          <span class="font-weight-bolder"> ۰ تومان </span>
        </div>
        <div class="px-3 button-block">
          <BaseButton size="block" @click="isCartOpen = true">
            پرداخت
          </BaseButton>
        </div>
      </div>
    </div>

    <cart v-if="isCartOpen" />
  </div>
</template>

<style lang="scss" scoped>
@import '@design';

.cart-area {
  position: fixed;
  right: 0;
  top: 0;
  min-height: 100%;
  width: 40vw;
  max-width: 475px;
  min-width: 475px;
  background-color: #fff;
  z-index: 2;
  border-left: 1px solid $light-gray;
  display: flex;
  flex-direction: column;

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
  .footer-cart {
    .general-price {
      color: $dark-gray;
      border-width: 2px 0px;
      border-style: solid;
      border-color: $light-blue;
      span {
        font-size: 18px;
      }
    }
  }

  .products-cart {
    position: relative;
    height: 70vh;
  }
}
</style>
