<script>
import appConfig from '@src/app.config'
import banner from '@layouts/home/banner.vue'
import welcome from '@layouts/home/welcome.vue'
import about from '@layouts/home/about.vue'
import dreamSection from '@layouts/home/dream-section.vue'
import countUpSection from '@layouts/home/countup-vue.vue'
import help from '@layouts/help.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { banner, about, dreamSection, countUpSection, welcome, help },
}
</script>

<template>
  <div class="container-fluid">
    <banner />
    <about />
    <welcome />
    <dreamSection />
    <countUpSection />
    <help />
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
</style>
