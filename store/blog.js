export const state = () => ({
  articles: {}
})

export const getters = {
  articles(state) {
    return state.articles;
  }
}

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_ERROR(state, error) {
    state.articles = error
  }
}

export const actions = {
  async fetch({ commit }, $prismic) {
    try {
      const articles = await $prismic.api.query(
        $prismic.predicates.at("document.type", "blog_post")
      ).then(res => {
        return res;
      });
      commit('SET_ARTICLES', articles)
    } catch (e) {
      const error = 'Please create a articles document'

      commit('SET_ERROR', error);
    }
  }
}