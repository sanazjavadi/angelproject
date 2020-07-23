<script>
export default {
  name: 'FormInput',
  props: {
    /**
     * Input type
     */
    type: {
      type: String,
      default: 'text',
      validator: (v) => {
        return ['text', 'password', 'file', 'email'].includes(v)
      },
      /**
       * Input value
       */
      value: {
        type: [String, Number],
        default: '',
      },
      /**
       * Input placeholder
       */
      placeholder: {
        type: String,
        default: null,
      },
      /**
       * Input name.
       */
      name: {
        type: String,
      },
    },
  },

  methods: {
    setValue(value) {
      this.$emit('input', value)
    },
    onInput(e) {
      this.setValue(e.target.value)
    },
    onChange(e) {
      this.setValue(e.target.value)
      this.$emit('change', e.target.value)
    },
  },
}
</script>

<template>
  <input
    :type="type"
    :value="value"
    :name="name"
    v-bind="$attrs"
    change="onChange"
    class="form-control"
    @input="onInput"
  />
</template>

<style lang="scss" scoped>
@import '@design';
.form-control {
  padding: 1.5rem 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #becad6;
  font-weight: 300;
  will-change: border-color, box-shadow;
  border-radius: 0.375rem;
  box-shadow: none;
  transition: box-shadow 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06),
    border 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06);
}
</style>
