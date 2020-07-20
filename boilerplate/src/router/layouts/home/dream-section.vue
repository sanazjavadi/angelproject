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
        لیست آرزوهای بچه ها
        <br />
        رو ببین و هر کدوم رو خواستی برآورده کن
      </h2>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center no-gutters">
        <div
          class="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-end"
        >
          <sellignCart />
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-center"
        >
          <sellignCart />
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-start"
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
  padding: 80px 0 90px;
  background-color: #f2f5f6;
}
.sec-title h2 {
  display: block;
  color: $dark-blue;
  font-weight: 700;
  padding-bottom: 70px;
  line-height: 5rem;
}
</style>
