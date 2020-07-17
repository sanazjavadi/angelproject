<script>
import appConfig from '@src/app.config'
import banner from '@layouts/home/banner.vue'
// import welcome from '@layouts/home/welcome.vue'
// import about from '@layouts/home/about.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { banner },
}
</script>

<template>
  <div class="container-fluid">
    <banner />
    <!-- <about />
    <welcome /> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.container-fluid {
  padding-left: 0;
}
</style>
