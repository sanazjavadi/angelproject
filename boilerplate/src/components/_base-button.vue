<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    type() {
      if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
  },
}
</script>

<template>
  <component :is="type" :href="href" class="bluebtn">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@import '@design';

.bluebtn {
  width: 186px;
  height: 60px;
  color: white;
  background-color: $light-blue;
  font-size: 14px;
  font-weight: 800;
  outline: none;
  border: none;
  border-radius: 5px;
}
.whitebtn {
  width: 186px;
  height: 60px;
  color: $dark-blue;
  background-color: white;
  font-size: 14px;
  font-weight: 800;
  outline: none;
  border: 2px solid $dark-blue;
  border-radius: 5px;
}
</style>
