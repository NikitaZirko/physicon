<template lang="pug">
  div
    v-app-bar.nav(color="white" flat height="auto")
      .nav__wrap
        .nav__header
          v-toolbar-title
            a(href='#')
              img(src="@/assets/img/logo.svg" alt="logo")
          v-menu(offset-x offset-y)
            template(v-slot:activator="{ on }")
              v-btn.nav__icon(icon v-on="on" color="white")
                span.mdi.mdi-menu
            v-list.nav__item
              v-list-item(v-for="(item, i) in items" :key="i")
                // @click=""
                v-list-item-title.sub__item {{ item.title }}
        //v-spacer.d-none.d-md-flex
        .nav__btns
          v-btn.nav__btn.d-none.d-md-flex(large text) Каталог
          v-btn.nav__btn(large text) Активация
          v-btn.nav__btn(large text) Вход
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      items: [
        { title: 'Витрина' },
        { title: 'О проекте' },
        { title: 'Новости' },
        { title: 'Помощь' },
        { title: 'Скачать' },
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/components/navbar";
</style>
