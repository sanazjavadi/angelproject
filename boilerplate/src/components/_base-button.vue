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
    size: {
      type: String,
      default: null,
      description: 'Button size lg|sm',
      validator: (v) => {
        return ['lg', 'sm', 'block', null].includes(v)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
      description: ' Whether it should be displayed as disabled, or not.',
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
    sizeClasses() {
      return this.size ? `btn-${this.size}` : 'btn'
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
  <component
    :is="type"
    :href="href"
    :class="[sizeClasses, theme]"
    :disabled="disabled"
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
  appearance: none;
  border: none;
  border: 1px solid transparent;
  padding: 0 1rem;
  font-size: 1rem;
  vertical-align: middle;
  height: 50px;
  border-radius: 0.3rem;
  display: inline-block;
  cursor: pointer;
  transition: all 0.5s linear;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      animation: none;
    }
  }
}
.darkbtn {
  @extend .btn;
  color: white;
  background-color: $dark-blue;
  &:hover {
    background: darken($dark-blue, 7px);
  }
}
.lightbtn {
  @extend .btn;
  color: $dark-blue;
  background-color: $light-blue;
  &:hover {
    background: darken($light-blue, 7px);
  }
}
.btn-lg {
  @extend .btn;
  padding: 0 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  border-radius: 0.5rem;
}
.btn-block {
  @extend .btn;
  width: 100%;
}
</style>
