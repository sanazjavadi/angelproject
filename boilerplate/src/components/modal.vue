<script>
export default {}
</script>

<template>
  <div class="_modal">
    <div class="close"> </div>
    <section class="section-margin">
      <div class="container">
        <div class="row justify-content-center">
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
._modal {
  max-width: 100%;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  position: fixed;
  background: hsla(0, 0%, 100%, 0.97);
  z-index: 10;
  .section-margin {
    margin-top: 8rem;
  }
  .close {
    position: fixed;
    z-index: 2;
    right: 25px;
    top: 25px;
    width: 44px;
    height: 44px;
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
}
</style>
