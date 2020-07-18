<script>
import appConfig from '@src/app.config'
import banner from '@layouts/home/banner.vue'
import welcome from '@layouts/home/welcome.vue'
import about from '@layouts/home/about.vue'

import sellignCart from '@components/selling-cart.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { banner, welcome, about, sellignCart },
}
</script>

<template>
  <div class="container-fluid">
    <banner />

    <welcome />
    <about />

    <section class="mt-5 pt-5">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-3">
            <sellignCart />
          </div>
          <div class="col-lg-3">
            <sellignCart />
          </div>
          <div class="col-lg-3">
            <sellignCart />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.container-fluid {
  padding-left: 0;
}
</style>
