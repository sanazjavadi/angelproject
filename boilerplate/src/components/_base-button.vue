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
    theme: {
      type: String,
      default: 'bluebtn',
      validator(v) {
        return ['bluebtn', 'pinkbtn'].includes(v)
      },
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
  <component :is="type" :href="href" :class="['btn', theme]">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@import '@design';

.btn {
  color: white;
  font-size: 13px;
  font-weight: 800;
  outline: none;
  border: none;

  padding: 15px 40px;
  line-height: 30px;
  cursor: pointer;
  transition: background-color 1s ease;
  &:hover {
    animation: rainbow 3s ease;
  }
}
.bluebtn {
  @extend .btn;
  background-color: $light-blue;
}
.pinkbtn {
  @extend .btn;
  background-color: $pink;
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
