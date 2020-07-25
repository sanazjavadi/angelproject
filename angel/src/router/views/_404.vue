<script>
export default {
  page: {
    title: '404',
    meta: [{ name: 'description', content: '404' }],
  },
  components: {},
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div>
    <h1 :class="$style.title">
      404
      <template v-if="resource">
        {{ resource }}
      </template>
      Not Found
    </h1>
  </div>
</template>

<style lang="scss" module>
.title {
  text-align: center;
}
</style>
