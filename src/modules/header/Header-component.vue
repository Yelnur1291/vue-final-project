<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-wrapper_items">
          <router-link to="/">
            <img
              src="../../assets/icons/search.svg"
              alt="search"
              class="header-wrapper_items-search"
          /></router-link>
          <router-link to="/" class="header-wrapper_items-logo"
            >Avion</router-link
          >
          <div class="header-wrapper_item">
            <router-link to="/basket" class="header-wrapper_item-basket"
              ><img src="../../assets/icons/basket.svg" alt="basket" /><span
                class="header-wrapper_item-basket_mark"
                >{{ getBasket }}</span
              ></router-link
            >
            <router-link to="/" class="header-wrapper_item-profile">
              <img src="../../assets/icons/profile.svg" alt="profile"
            /></router-link>
          </div>
        </div>
        <div class="header-wrapper_navigation">
          <nav class="nav">
            <ul class="nav-menu">
              <li class="nav-menu__item">
                <router-link to="/products" class="nav-menu__item-link"
                  >All products</router-link
                >
              </li>
              <li class="nav-menu__item">
                <router-link to="/about" class="nav-menu__item-link"
                  >About us</router-link
                >
              </li>
              <li class="nav-menu__item">
                <router-link to="/contact" class="nav-menu__item-link"
                  >Contact us</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasket.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/header.scss";
</style>
