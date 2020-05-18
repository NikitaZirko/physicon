<template lang="pug">
  v-app
    ph-navbar
    v-content
      nuxt
    ph-bottom
</template>

<script>
import Navbar from "@/components/Navbar";
import Bottom from "@/components/Bottom";

export default {
  components: {
    "ph-navbar": Navbar,
    "ph-bottom": Bottom
  }
};
</script>

<style lang="scss">
@import "assets/styles/style";
</style>

