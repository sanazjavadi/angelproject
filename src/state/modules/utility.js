export const state = {
  showModal: false,
  authForm: 'signUp',
}
export const mutations = {
  toggleModal(state) {
    state.showModal = !state.showModal
  },

  triggerComponent(state) {
    if (state.authForm === 'signUp') {
      state.authForm = 'signIn'
    } else {
      state.authForm = 'signUp'
    }
  },
}
