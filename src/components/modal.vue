<script>
export default {}
</script>

<template>
  <transition name="modal">
    <div class="_modal">
      <slot name="close" />
      <slot />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '@design';

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s linear;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
._modal {
  max-width: 100%;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  position: fixed;
  background: hsla(0, 0%, 100%, 0.97);
  z-index: 15;
  .section-margin {
    margin-top: 8rem;
  }
}
</style>
