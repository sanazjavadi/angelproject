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
        <div class="col-lg-6">
          <BaseForm />
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
