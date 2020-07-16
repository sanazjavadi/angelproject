<script>
import appConfig from '@src/app.config'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {},
}
</script>

<template>
  <div>
    <BaseButton>
      discover me
    </BaseButton>
  </div>
</template>
