<script>
export default {
  name: 'BaseButton',
  props: {
    href: {
      type: String,
      default: null,
      description: 'Button tag (default -> button)',
    },
    to: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: 'darkbtn',
      description: 'the theme style',
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

    <span v-if="icon">
      <slot name="icon"> </slot>
    </span>
  </component>
</template>

<style lang="scss" scoped>
@import '@design';

.btn {
  font-weight: $butten-font-weight;
  min-width: 150px;
  border: $size-button-border solid transparent;
  padding: $size-button-padding;
  font-size: $button-font-size;
  height: 50px;
  line-height: $button-line-height;
  border-radius: $size-button-border-radius;
  transition: all 0.5s linear;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
}
.btn-block {
  @extend .btn;
  width: 100%;
}
</style>
