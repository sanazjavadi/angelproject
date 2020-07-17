<script>
import appConfig from '@src/app.config'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {},
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <baseLogo />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
</style>
