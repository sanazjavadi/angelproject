<script>
export default {}
</script>

<template>
  <div class="form-card">
    <BaseInput placeholder="نام" />
    <BaseInput placeholder="نام خانوادگی" class="mt-2" />
    <BaseInput placeholder="آدرس ایمیل" class="mt-2" />
    <BaseInput placeholder="کلمه عبور" class="mt-2" />
    <baseButton class="mt-2">
      ایجاد حساب کاربری
    </baseButton>
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
}
</style>
