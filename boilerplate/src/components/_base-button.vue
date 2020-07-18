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
.lg {
  width: 250px;
  height: 60px;
  color: white;
  background-color: $light-blue;
  font-size: 14px;
  font-weight: 800;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: background-color 1s ease;
  &:hover {
    animation: rainbow 3s ease;
  }
}
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
  transition: background-color 1s ease;
  &:hover {
    animation: rainbow 3s ease;
  }
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

@keyframes rainbow {
  0% {
    background-color: $light-blue;
  }
  25% {
    background-color: pink;
  }
  50% {
    background-color: purple;
  }
  75% {
    background-color: rgb(214, 152, 214);
  }

  100% {
    background-color: $dark-blue;
  }
}
</style>
