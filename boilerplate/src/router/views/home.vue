<script>
import appConfig from '@src/app.config'
import banner from '@layouts/home/banner.vue'
import welcome from '@layouts/home/welcome.vue'
import about from '@layouts/home/about.vue'
import dreamSection from '@layouts/home/dream-section.vue'
import countUpSection from '@layouts/home/countup-vue.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { banner, welcome, about, dreamSection, countUpSection },
}
</script>

<template>
  <div class="container-fluid">
    <banner />
    <welcome />
    <about />
    <dreamSection />
    <countUpSection />
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.container-fluid {
  padding: 0;
}
</style>
