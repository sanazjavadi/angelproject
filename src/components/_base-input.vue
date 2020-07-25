<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text',
      description: 'Input type',
      validator: (v) => {
        return ['text', 'password', 'file', 'email'].includes(v)
      },
    },
    value: {
      type: [String, Number],
      description: 'Input value',
      default: '',
    },
    placeholder: {
      type: String,
      default: null,
      description: 'Input placeholder',
    },
    name: {
      type: String,
      default: '',
      description: 'Input name',
    },
    align: {
      type: String,
      default: null,
      description: 'Input direction',
    },
    error: {
      type: String,
      default: null,
      description: 'Input error (below input)',
    },
    state: {
      type: [Boolean, String],
      default: null,
      validator: (v) => {
        return [null, 'valid', 'invalid', true, false].includes(v)
      },
      description: 'Input state. eg: valid | invalid',
    },
    icon: {
      type: String,
      default: 'times-circle',
      description: 'Input icon',
    },
  },
  data() {
    return {
      iconn: null,
    }
  },
  computed: {
    computedState() {
      if (this.state === true || this.state === 'valid') {
        return true
      } else if (this.state === false || this.state === 'invalid') {
        return false
      }

      return null
    },
    computedStateClass() {
      if (this.computedState === true || this.computedState === 'valid') {
        return 'isvalid'
      } else if (this.computedState === false) {
        return 'isinvalid'
      }

      return null
    },
  },
  watch: {
    value(newVal) {
      this.getValue(newVal)
    },
  },
  mounted() {
    if (this.value) {
      this.getValue(this.value)
    }
  },
  methods: {
    getValue(e) {
      this.$emit('input', e)
    },
    handleIcon(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<template>
  <div class="wrapper-input">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      v-bind="$attrs"
      :class="['form-control', computedStateClass]"
      :dir="[align ? 'ltr' : 'rtl']"
      @input="getValue($event.target.value)"
    />

    <span v-if="icon" @click="handleIcon">
      <i :class="['fas', `fa-${icon}`, 'leftIcon']"></i>
    </span>

    <span v-if="error"></span>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.wrapper-input {
  position: relative;
}
.form-control {
  padding: $size-input-padding;
  font-size: $input-font-size;
  line-height: $input-line-height;
  color: $input-font-color;
  background-color: #fff;
  border: $size-input-border solid $input-border-color;
  font-weight: $input-font-weight;
  will-change: border-color, box-shadow;
  border-radius: $size-input-border-radius;
  box-shadow: none;
  transition: box-shadow 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06),
    border 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06);
  &:focus {
    border: $size-input-border solid darken($input-border-color, 20px);
  }
}
.isvalid {
  border-color: $input-valid-color;
  &:focus {
    border: $size-input-border solid darken($input-valid-color, 10px);
  }
}
.isinvalid {
  border-color: $input-error-color;
  &:focus {
    border: $size-input-border solid darken($input-error-color, 10px);
  }
}
.leftIcon {
  position: absolute;
  left: 1rem;
  top: 1rem;
  cursor: pointer;
  i {
    color: $light-blue;
    cursor: pointer;
    z-index: 20;
  }
}
</style>
