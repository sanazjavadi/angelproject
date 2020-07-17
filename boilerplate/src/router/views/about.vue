<script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'About',
    meta: [{ name: 'description', content: 'The About page.' }],
  },
  components: { Layout }
}
</script>

<template>
  <Layout>
    About
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
</style>

