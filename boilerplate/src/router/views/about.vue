<script>
export default {
  page: {
    title: 'About',
    meta: [{ name: 'description', content: 'The About page.' }],
  },
  components: {},
}
</script>

<template>
  <section class="section-margin">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <BaseForm>
            <template v-slot:header>
              عضویت
            </template>
            <template v-slot:body>
              <BaseInput placeholder="نام" class="mb-3" :state="true" />
              <BaseInput
                placeholder="نام خانوادگی"
                class="mb-3"
                :state="false"
              />
              <BaseInput placeholder="آدرس ایمیل" class="mb-3" />
              <BaseInput placeholder="کلمه عبور" class="mb-3" />
              <baseButton class="mb-3" size="block">
                ایجاد حساب کاربری
              </baseButton>
            </template>
          </BaseForm>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.section-margin {
  padding: 70px 0;
}
</style>
