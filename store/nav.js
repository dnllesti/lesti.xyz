// States
export const state = () => ({
  toggleSidebar: true,
})

// mutations
export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  HIDE_SIDEBAR(state) {
    state.toggleSidebar = false;
  },
}

// actions
export const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  hideSidebar({ commit }) {
    commit('HIDE_SIDEBAR')
  },
}

// Getters
export const getters = {
  toggleSidebar: (state) => state.toggleSidebar,
}
