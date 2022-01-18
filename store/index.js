export const state = () => ({
  nav: {},
  footer:{}
});

export const getters = {
  nav(state) {
    return state.nav;
  },
  footer(state) {
    return state.footer;
  }
};

export const mutations = {
  SET_NAV(state, nav) {
    state.nav = nav;
  },
  SET_FOOTER(state, footer) {
    state.footer = footer;
  },
  SET_ERROR(state, error) {
    state.nav = error;
  }
};

export const actions = {
  async fetchNav({ commit }, $prismic) {
    try {
      const nav = (await $prismic.api.getSingle("navigation")).data;

      commit("SET_NAV", nav);
    } catch (e) {
      const error = "Please create a navigation document";

      commit("SET_ERROR", error);
    }
  },
  async fetchFooter({ commit }, $prismic) {
    try {
      const footer = (await $prismic.api.getSingle("footer")).data;

      commit("SET_FOOTER", footer);
    } catch (e) {
      const error = "Please create a footer document";

      commit("SET_ERROR", error);
    }
  }
};
