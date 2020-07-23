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
      default: 'darkbtn',
      validator(v) {
        return ['darkbtn', 'lightbtn'].includes(v)
      },
    },

    icon: {
      type: String,
      default: '',
      description: 'button icon',
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
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
  },
}
</script>

<template>
  <component
    :is="type"
    :href="href"
    class="btn"
    :class="['btn', theme]"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@import '@design';

.btn {
  font-weight: 700;

  min-width: 150px;
  outline: none;
  border: none;
  border: 1px solid transparent;
  padding: 0 1rem;
  font-size: 1rem;

  vertical-align: middle;
  height: 50px;
  border-radius: 0.3rem;
  display: inline-block;
  transition: all 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06);
  cursor: pointer;
  transition: background-color 1s ease;
  &:hover {
    animation: rainbow 3s ease;
  }
}
.darkbtn {
  @extend .btn;
  color: white;
  background-color: $dark-blue;
}
.lightbtn {
  @extend .btn;
  color: $dark-blue;
  background-color: $light-blue;
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
