<script>
import sellignCart from '@components/selling-cart.vue'
export default {
  components: {
    sellignCart,
  },
}
</script>

<template>
  <section class="sec-dream">
    <div class="sec-title text-center">
      <h2>
        آرزوهای بچه ها
      </h2>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center ">
        <div
          class="col-lg-3 col-md-7 col-sm-7 col-xs-9 col-11 d-flex justify-content-center"
        >
          <sellignCart />
        </div>
        <div
          class="col-lg-3 col-md-7 col-sm-7 col-xs-9 col-11 d-flex justify-content-center"
        >
          <sellignCart />
        </div>
        <div
          class="col-lg-3 col-md-7 col-sm-7 col-xs-9 col-11 d-flex justify-content-center"
        >
          <sellignCart />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.container-fluid {
  padding: 0 !important;
}
.sec-dream {
  position: relative;
  padding: 120px 0 90px;
  background-color: #f2f5f6;
}
.sec-title h2 {
  display: block;
  font-size: 30px;
  line-height: 1.2em;
  color: $dark-blue;
  font-weight: 700;
  padding: 20px 0px;
}
</style>
