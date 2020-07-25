<script>
export default {
  props: {
    color: {
      type: String,
      default: 'pink',
    },
  },
}
</script>

<template>
  <blockquote class="oval-thought-border" :style="{ backgroundColor: color }">
    <div class="big-bubble" :style="{ borderColor: color }"></div>
    <div class="small-bubble" :style="{ borderColor: color }"></div>

    <slot />
  </blockquote>
</template>

<style lang="scss" scoped>
@import '@design';
.oval-thought-border {
  position: relative;
  padding: 50px 50px;
  margin: 1em auto 80px;
  color: white;
  text-align: center;
  background: #ffaa14;
  border-radius: 50%;
  z-index: 9;
  .big-bubble {
    position: absolute;
    bottom: -45px;
    right: 80px;
    width: 60px;
    height: 40px;
    border: 5px solid;
    border-radius: 50%;
    display: block;
    background-color: white;
    z-index: 1;
  }
  .small-bubble {
    position: absolute;
    bottom: -60px;
    right: 50px;
    width: 30px;
    height: 25px;
    border: 5px solid;
    border-radius: 50%;
    display: block;
    z-index: 1;
  }
}
</style>
