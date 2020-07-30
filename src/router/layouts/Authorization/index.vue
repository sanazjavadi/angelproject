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
    return {}
  },
  computed: {
    ...utilityState,
    changeComponent() {
      let visibleForm
      if (this.authForm === 'signIn') {
        visibleForm = signIn
      } else {
        visibleForm = singUp
      }

      return visibleForm
    },
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
      <div class="close-area">
        <BaseCloseButton @click="_toggleModal" />
      </div>
    </template>
    <keep-alive>
      <component :is="changeComponent" />
    </keep-alive>
  </modal>
</template>

<style lang="scss" scoped>
@import '@design';
.close-area {
  position: absolute;
  right: 25px;
  top: 25px;
}
</style>
