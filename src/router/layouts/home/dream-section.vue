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
    <div class="row justify-content-center">
      <div class="col-10 col-lg-6 sec-title text-center m-auto">
        <h2>
          لیست آرزوهای بچه ها رو ببین و هر کدوم رو خواستی برآورده کن
        </h2>
      </div>
    </div>

    <div class="container-fluid mt-5">
      <div class="row justify-content-center no-gutters">
        <div
          class="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-end justify-content-center"
        >
          <sellignCart />
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-center justify-content-center"
        >
          <sellignCart />
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-start justify-content-center"
        >
          <sellignCart />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';

.sec-dream {
  padding: $section-padding-lg;
  background-color: #f2f5f6;
}
.sec-title h2 {
  @extend %font-heading;
  color: $dark-blue;
}
</style>
