<template lang="pug">
  section.v-container
    sFilter
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

    .courses
      v-card.course(
        v-for="(n, i) in courses.items" :key="i"
        max-width="170px")

        v-img(
          class="white--text align-end"
          height="140px"
          :src="imgUrl + courses.items[i].courseId")

        v-card-title.course__title
          | {{courses.items[i].subject}}

        v-card-subtitle.course__subtitle
          | {{(courses.items[i].grade).replace(/;/g, "-") + " Класс"}}

        v-card-text.pb-0
          p.course__meta
            | {{courses.items[i].genre}}
          a.course__details(:href="courses.items[i].shopUrl") Подробнее

        v-card-actions.px-4
          v-btn.course__btn(v-if="currency" dense text)
            | {{courses.items[i].price + " Руб."}}

          v-btn.course__btn(v-else dense text)
            | {{courses.items[i].priceBonus + " Бонус"}}
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
      currency: true,
      currencyItem: 'Руб.',
      currencyItems: ['Руб.', 'Бонусы'],
      imgUrl: "https://www.imumk.ru/svc/coursecover/"
    }
  },
  created() {
    this.$store.dispatch("courses/apiCourses");
  },
  computed: {
    courses() {
      return this.$store.getters["courses/getCourses"];
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
