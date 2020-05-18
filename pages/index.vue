<template lang="pug">
  section.v-container
    ph-filter
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
          span.grey--text.caption(v-if="index === 1")
              | (+{{ model.length - 1 }} others)

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
      isloaded : false,
      currency: true,
      currencyItem: 'Руб.',
      currencyItems: ['Руб.', 'Бонусы'],
      imgUrl: "https://www.imumk.ru/svc/coursecover/"
    }
  },
  created() {
    this.$store.dispatch("courses/apiCourses");
  },
  watch: {
    courses(newValue, oldValue) {
      if (this.courses.length) {
        this.isloaded = true;
      }
    }
  },
  computed: {
    courses() {
      return this.$store.getters["courses/getCourses"];
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/pages/home";
</style>
