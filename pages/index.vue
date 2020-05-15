<template lang="pug">
  section.v-container
    sFilter
    .lessons

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
