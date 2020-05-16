export const state = () => ({
  courses: [],
})

export const mutations = {
  SETCOURSES(state, payload) {
    state.courses = payload
  }
}

export const actions = {
  async apiCourses({ commit }) {
    const saveCourses = await this.$axios.$post('http://krapipl.imumk.ru:8082/api/mobilev1/update')
    commit('SETCOURSES', saveCourses)
  }


}

export const getters = {
  getCourses: st => st.courses,
}
