export const state = () => ({
  courses: [],
})

export const mutations = {
  SETCOURSES(state, payload) {
    state.courses = payload
  },
  CHANGECOURSES(state, sel) {
    let update = state.courses.filter(function(el) {
      return el[sel.name] == sel.val
    });
    state.courses = update;
  }
}

export const actions = {
  async apiCourses({ commit }) {
    const saveCourses = await this.$axios.$post('http://krapipl.imumk.ru:8082/api/mobilev1/update')
    commit('SETCOURSES', saveCourses.items)
  },
  filteringByCourses({ commit }, selectItem) {
    commit('CHANGECOURSES', selectItem)
  }
}

export const getters = {
  getCourses: st => st.courses
}
