export const state = () => ({
  color: {}
})

export const getters = {
  getColor(state) {
    return state.color
  }
}

export const mutations = {
  updateColor(state, params) {
    state.color = { ...params.color }
  }
}

export const actions = {
  /**
   * produce update color to store
   * @param {object} commit - using to call function in mutations to update state
   * @param {object} params - parameter will be updated
   * @return {void}
   */
  updateColor({ commit }, params) {
    commit('updateColor', params)
  }
}
