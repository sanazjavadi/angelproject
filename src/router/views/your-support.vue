<script>
import hero from '@layouts/hero.vue'
import angelCirculate from '@layouts/support/angel-circulate.vue'
export default {
  page: {
    title: 'Your Support',
    meta: [{ name: 'description', content: 'The Your Support page.' }],
  },
  components: { hero, angelCirculate },
}
</script>

<template>
  <div class="container-fluid">
    <hero>
      حمایت شما
    </hero>

    <section class="section-margin">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 d-flex justify-content-center">
            <angelCirculate />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.section-margin {
  margin-top: 250px;
  margin-bottom: 100px;
}
</style>
