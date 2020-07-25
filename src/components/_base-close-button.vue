<script>
export default {
  props: {
    ariaLabel: {
      type: String,
      default: 'Close',
      description: 'The aria-label value',
    },
    size: {
      type: Number,
      default: 44,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<template>
  <button
    class="close"
    :aria-label="ariaLabel"
    :style="{ height: size + 'px', width: size + 'px' }"
    @click="handleClick"
  >
  </button>
</template>

<style lang="scss" scoped>
@import '@design';
.close {
  position: fixed;
  z-index: 2;
  right: 25px;
  top: 25px;
  text-align: center;
  background: $light-blue;
  font-size: 20px;
  color: $dark-blue;
  padding: 12px;
  pointer-events: all;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 100%;

  &::after {
    content: 'x';
    color: $dark-blue;
  }
}
</style>
