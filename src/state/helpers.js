import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const utilityState = mapState('utility', ['showModal', 'authForm'])
export const utilityMutations = mapMutations('utility', [
  'toggleModal',
  'triggerComponent',
])

export const authMethods = mapActions('auth', ['logIn', 'logOut'])
