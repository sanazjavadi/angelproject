<script>
// authorization layouts

import modal from '@components/modal.vue'
import signIn from '@layouts/Authorization/sign-in.vue'
import singUp from '@layouts/Authorization/signup.vue'

// state

import { utilityState, utilityMutations } from '@state/helpers.js'
export default {
  components: { modal, signIn, singUp },
  data() {
    return {
      authForm: singUp,
    }
  },
  computed: {
    ...utilityState,
  },
  methods: {
    ...utilityMutations,
    _toggleModal() {
      this.toggleModal()
    },
  },
}
</script>

<template>
  <modal>
    <template v-slot:close>
      <BaseCloseButton @click="_toggleModal" />
    </template>
    <component :is="authForm" />
  </modal>
</template>

<style lang="scss" scoped>
@import '@design';
</style>
