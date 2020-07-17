<script>
import logosvg from '@components/svg/logo-svg.vue'
export default {
  components: { logosvg },
  props: {
    height: {
      type: Number,
      default: () => {
        return 150
      },
    },
    width: {
      type: Number,
      default: () => {
        return 150
      },
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <logosvg
      class="logo"
      :style="{ height: height + 'px', width: width + 'px' }"
    />
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
  }
}
</style>
