export const state = {
  showModal: false,
}
export const mutations = {
  toggleModal(state) {
    state.showModal = !state.showModal
  },
}
