<template lang="pug">
  v-app
    navbar
    v-content
      nuxt
    bottom
</template>

<script>
import Navbar from "@/components/Navbar";
import Bottom from "@/components/Bottom";

export default {
  components: {
    Navbar,
    Bottom
  }
};
</script>

<style lang="scss">
@import "assets/styles/style";
</style>

