<template lang="pug">
  section.v-container.showcase
    h1.showcase__title Витрина
    .s-filters
      v-select.s-filter(
        class="mx-2"
        :items="subjects"
        :label="subject"
        v-model="subject"
        solo
        flat
        dense
        hide-details
        outlined
        color="#00c1ff"
        :menu-props="{ bottom: true, offsetY: true }"
        @change="selected()")

      v-select.s-filter(
        class="mx-2"
        :items="genres"
        :label="genre"
        v-model="genre"
        solo
        flat
        dense
        hide-details
        outlined
        color="#00c1ff"
        :menu-props="{ bottom: true, offsetY: true }"
        @change="selected()")

      v-select.s-filter(
        class="mx-2"
        :items="grades"
        :label="grade"
        v-model="grade"
        solo
        flat
        dense
        hide-details
        outlined
        color="#00c1ff"
        :menu-props="{ bottom: true, offsetY: true }"
        @change="selected()")

      v-text-field(
        class="mx-2"
        flat
        dense
        hide-details
        label="Поиск"
        v-model="search"
        outlined
        color="#00c1ff"
        append-outer-icon="mdi-magnify"
        clear-icon="mdi-close-circle"
        clearable
        type="text"
        @click:append-outer="clearMessage"
        @click:clear="clearMessage")

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      subject: "Все предметы",
      genre: "Все жанры",
      grade: "Все классы",
      grades: [1,2,3,4,5,6,7,8,9,10,11],
      search: ""
    }
  },
  computed: {
    subjects() {
      let result = [];
      let subjects = this.$store.getters["courses/getCourses"].items || 0;
      for (let i = 0; i < subjects.length; i++) {
        result.push(subjects[i].subject)
      }
      let uniqSubjects = [...new Set(result)];
      return uniqSubjects
    },
    genres() {
      let result = [];
      let genres = this.$store.getters["courses/getCourses"].items || 0;
      for (let i = 0; i < genres.length; i++) {
        result.push(genres[i].genre)
      }
      let uniqGenres = [...new Set(result)];
      return uniqGenres
    }
  },
  methods: {
    selected: function() {
      console.log("HALO")
    },
    clearMessage () {
      this.search = ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import "assets/styles/components/filter";
</style>

