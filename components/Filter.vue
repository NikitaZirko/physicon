<template lang="pug">
  section.v-container.showcase
    h1.showcase__title Витрина
    .s-filters
      v-select.s-filter(
        class="mx-4"
        :items="times.id"

        item-text="name"
        item-value="id"

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
        class="mx-4"
        :items="times.name"

        item-text="title"

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
        class="mx-4"
        :items="times.time_from"
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
        class="mx-4"
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
      search: "",
      times: [
        {
          id: 1,
          name: "утренний",
          time_from: "T06:00:00",
          time_to: "T12:00:00"
        },
        {
          id: 2,
          name: "дневной",
          time_from: "T12:00:00",
          time_to: "T17:00:00"
        },
        {
          id: 3,
          name: "вечерний",
          time_from: "T17:00:00",
          time_to: "T22:00:00"
        },
        {
          id: 4,
          name: "ночной",
          time_from: "T22:00:00",
          time_to: "T06:00:00"
        }
      ],
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

