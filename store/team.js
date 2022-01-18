export const state = () => ({
  team: {}
})

export const getters = {
  team(state) {
    return state.team;
  }
}

export const mutations = {
  SET_TEAM(state, team) {
    state.team = team
  },
  SET_ERROR(state, error) {
    state.team = error
  }
}

export const actions = {
  async fetch({ commit }, $prismic) {
    try {
      const team = await $prismic.api.query(
        $prismic.predicates.at("document.type", "team")
      ).then(res => {
        console.log(res);
        return res;
      });
      commit('SET_TEAM', team)
    } catch (e) {
      const error = 'Please create a team document'

      commit('SET_ERROR', error);
    }
  }
}