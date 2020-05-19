<template lang="pug">
  section.v-container.showcase
    h1.showcase__title Витрина
    .s-filters

      //- filter subjects
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
        @change="$emit('clickListItem', {val: $event, ev: 'subject'})")

      //- filter genres
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
        @change="$emit('clickListItem', {val: $event, ev: 'genre'})")

      //- filter grades
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
        @change="$emit('clickListItem', {val: $event, ev: 'grade'})")

      //- search filter
      v-text-field(
        class="mx-2"
        flat
        dense
        hide-details
        label="Поиск"
        ref="search"
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
  props: {
    resetFilter: {
      type: Function
    }
  },
  data() {
    return {
      grades: [1,2,3,4,5,6,7,8,9,10,11], // getting data for grades
      search: ""
    }
  },
  computed: {
    // getting data for subjects
    subjects() {
      let result = [];
      let subjects = this.$store.getters["courses/getCourses"] || 0;
      for (let i = 0; i < subjects.length; i++) {
        result.push(subjects[i].subject)
      }
      return [...new Set(result)];
    },
    // getting data for genres
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
    clearMessage () {
      this.search = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/components/filter";
</style>

