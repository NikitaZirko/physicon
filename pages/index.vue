<template lang="pug">
  section.v-container
    sFilter
    .courses
      v-card.course(
      v-for="(n, i) in 15" :key="i"
      max-width="170px" )
        v-img(
        class="white--text align-end"
        height="140px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg")

        v-card-title.course__title Математика

        v-card-subtitle.course__subtitle 5 - 11 класс

        v-card-text.pb-0
          p.course__meta Демо
          a.course__details(href="#") Подробнее

        v-card-actions.px-4
          v-btn.course__btn(dense text) Попробовать

</template>

<script>
import axios from "axios";
import sFilter from "@/components/Filter";

export default {
  components: {
    sFilter
  },
  data() {
    return {
      subject: "Все предметы"
    }
  },
  methods: {
    selected: function() {
      console.log("HALO")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/pages/home";
</style>
