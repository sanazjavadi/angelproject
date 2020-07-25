<script>
export default {}
</script>

<template>
  <div class="form-card">
    <h3>
      <slot name="header"> </slot>
    </h3>

    <slot name="body"> </slot>

    <slot name="footer"> </slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.form-card {
  padding: 32px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 24px 0 rgba(20, 47, 82, 0.12),
    0 6px 14px 0 rgba(51, 118, 204, 0.06);
  border: solid 0.5px rgba(184, 202, 224, 0.5);
  h3 {
    font-size: 20px;
    color: $dark-blue;
    line-height: 0.5rem;
    font-weight: 700;
  }
}
</style>
