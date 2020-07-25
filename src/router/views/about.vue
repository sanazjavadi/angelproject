<script>
export default {
  page: {
    title: 'About',
    meta: [{ name: 'description', content: 'The About page.' }],
  },
  components: {},
  data() {
    return {
      password: '',
      type: 'password',
      passwordIcon: 'eye-slash',
    }
  },
  methods: {
    toggleVisibility() {
      if (this.passwordIcon === 'eye-slash' && this.type === 'password') {
        this.passwordIcon = 'eye'
        this.type = 'text'
      } else {
        this.type = 'password'
        this.passwordIcon = 'eye-slash'
      }
    },
  },
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
              <BaseInput placeholder="نام" class="mb-3" />
              <BaseInput placeholder="نام خانوادگی" class="mb-3" />
              <BaseInput placeholder="آدرس ایمیل" class="mb-3" type="email" />
              <BaseInput
                v-model="password"
                placeholder="کلمه عبور"
                class="mb-3"
                :icon="passwordIcon"
                :type="type"
                @click="toggleVisibility"
              />
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
