<template lang="pug">
  section.v-container.showcase
    h1.showcase__title Витрина
    .s-filters
      v-select.s-filter(
        clear-icon="mdi-close-circle"
        clearable
        class="mx-2"
        :items="subjects"
        label="Все предметы"
        cache-items
        solo
        flat
        dense
        hide-details
        outlined
        color="#00c1ff"
        :menu-props="{ bottom: true, offsetY: true }"
        @click:clear="resetFilter('subject')"
        @change="selectClick($event, 'subject')")

      v-select.s-filter(
        clear-icon="mdi-close-circle"
        clearable
        class="mx-2"
        :items="genres"
        label="Все жанры"
        cache-items
        solo
        flat
        dense
        hide-details
        outlined
        color="#00c1ff"
        :menu-props="{ bottom: true, offsetY: true }"
        @click:clear="resetFilter('genre')"
        @change="selectClick($event, 'genre')")

      v-select.s-filter(
        clear-icon="mdi-close-circle"
        clearable
        class="mx-2"
        :items="grades"
        label="Все классы"
        cache-items
        solo
        flat
        dense
        hide-details
        outlined
        color="#00c1ff"
        :menu-props="{ bottom: true, offsetY: true }"
        @click:clear="resetFilter('grade')"
        @change="selectClick($event, 'grade')")

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
      grades: [1,2,3,4,5,6,7,8,9,10,11],
      search: ""
    }
  },
  computed: {
    subjects() {
      let result = [];
      let subjects = this.$store.getters["courses/getCourses"] || 0;
      for (let i = 0; i < subjects.length; i++) {
        result.push(subjects[i].subject)
      }
      return [...new Set(result)];
    },
    genres() {
      let result = [];
      let genres = this.$store.getters["courses/getCourses"] || 0;
      for (let i = 0; i < genres.length; i++) {
        result.push(genres[i].genre)
      }
      return [...new Set(result)];
    }
  },
  methods: {
    selectClick: function(value, nameEv) {
      let dataClick = {
        val: value,
        name: nameEv
      };
      this.$store.dispatch("courses/filteringByCourses", dataClick);
    },
    clearMessage () {
      this.search = ''
    },
    resetFilter (select) {
      switch (select) {
        case "subject":
          console.log("subject");
          //this.$store.dispatch("courses/resetSubject");
          break;
        case "genre":
          console.log("genre");
          //this.$store.dispatch("courses/resetGenre");
          break;
        case "grade":
          console.log("grade");
          //this.$store.dispatch("courses/resetGrade");
          break;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "assets/styles/components/filter";
</style>

