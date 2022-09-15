<template>
  <div id="app">
    <Header-component></Header-component>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";
import FooterComponent from "./modules/footer/Footer-component.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
@import "./assets/css/global.scss";
</style>
