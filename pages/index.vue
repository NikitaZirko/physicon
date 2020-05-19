<template lang="pug">
  section.v-container
    //- component filter navigation
    ph-filter(
      @clickListItem="clickListItem($event)"
      :resetFilter="resetFilter")
    //- toggle ruble-bonus
    .currency
      v-select(
        class="toggleCurrency"
        :items="currencyItems"
        v-model="currencyItem"
        chips
        dense
        @change="currency = !currency")
        template(v-slot:selection="{ item, index }")
          v-chip(v-if="index === 0")
            span
              | {{ item }}
    //- grid courses
    .courses(v-if="courses.length")
      v-card.course(
        v-for="(n, i) in courses" :key="i"
        max-width="170px")

        v-img(
          class="white--text align-end"
          height="140px"
          :src="imgUrl + courses[i].courseId")

        v-card-title.course__title
          | {{courses[i].subject}}

        v-card-subtitle.course__subtitle
          | {{(courses[i].grade).replace(/;/g, "-") + " Класс"}}

        v-card-text.pb-0
          p.course__meta
            | {{courses[i].genre}}
          a.course__details(:href="courses[i].shopUrl") Подробнее

        v-card-actions.px-4
          v-btn.course__btn(v-if="currency" dense text)
            | {{courses[i].price + " Руб."}}
          v-btn.course__btn(v-else dense text)
            | {{courses[i].priceBonus + " Бонус"}}
    //- courses not found
    template(v-else-if="isloaded")
      .empty
        h3 Результаты поиска:
        p Курсы не найдены
</template>

<script>
import axios from "axios";
import Filter from "@/components/Filter";

export default {
  components: {
    "ph-filter": Filter
  },
  data() {
    return {
      subject: null,
      genre: null,
      grade: null,
      isloaded: false,
      currency: true,
      currencyItem: 'Руб.',
      currencyItems: ['Руб.', 'Бонусы'],
      imgUrl: "https://www.imumk.ru/svc/coursecover/"
    }
  },
  created() {
    // send a request api
    this.$store.dispatch("courses/apiCourses");
  },
  watch: {
    // disabling the courses not found - when loading a page
    courses(newValue, oldValue) {
      if (this.courses.length) {
        this.isloaded = true;
      }
    }
  },
  computed: {
    courses() {
      let update = this.$store.getters["courses/getCourses"];
      // filtering courses at select item subject
      if (this.subject) {
        update = update.filter(
          (el) => el.subject == this.subject
        );
      }
      // filtering courses at select item genre
      if (this.genre) {
        update = update.filter(
          (el) => el.genre == this.genre
        );
      }
      // filtering courses at select item grade
      if (this.grade) {
        update = update.filter(
          (el) => el.grade == this.grade
        );
      }
      return update
    }
  },
  methods: {
    // checking click on item
    clickListItem(sel) {
      switch (sel.ev) {
        case "subject":
          this.subject = sel.val
          break;
        case "genre":
          this.genre = sel.val
          break;
        case "grade":
          this.grade = sel.val
          break;
      }
    },
    // checking click on reset
    resetFilter(res) {
      switch (res) {
        case "subject":
          this.subject = null
          break;
        case "genre":
          this.genre = null
          break;
        case "grade":
          this.grade = null
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/pages/home";
</style>
