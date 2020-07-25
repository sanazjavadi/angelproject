<script>
import logosvg from '@components/svg/logo-svg.vue'
export default {
  components: { logosvg },
  props: {
    height: {
      type: Number,
      default: () => {
        return 120
      },
    },
    width: {
      type: Number,
      default: () => {
        return 120
      },
    },
  },
}
</script>

<template>
  <div class="logo-wrapper" :style="{ height: height + 'px' }">
    <logosvg
      class="logo"
      :style="{ height: height + 'px', width: width + 'px' }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.logo-wrapper {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  cursor: pointer;
  .logo {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;
  }
}
</style>
