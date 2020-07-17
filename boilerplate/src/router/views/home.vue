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
        <div class="wrapper">
          <BaseLogo class="logo"> </BaseLogo>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.wrapper {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding-bottom: 100%;
  .logo {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
}
</style>
