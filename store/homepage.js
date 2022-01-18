export const state = () => ({
  homepage: {}
})

export const getters = {
  homepage(state) {
    return state.homepage;
  }
}

export const mutations = {
  SET_HOMEPAGE(state, homepage) {
    state.homepage = homepage
  },
  SET_ERROR(state, error) {
    state.homepage = error
  }
}

export const actions = {
  async fetch({ commit }, $prismic) {
    try {
      const homepage = (await $prismic.api.getSingle('homepage')).data
      commit('SET_HOMEPAGE', homepage)
    } catch (e) {
      const error = 'Please create a homepage document'

      commit('SET_ERROR', error);
    }
  }
}