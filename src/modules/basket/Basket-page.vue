<template>
  <div class="basket">
    <div class="container">
      <div class="basket-wrapper">
        <div
          class="basket-wrapper_item"
          v-for="(item, index) in getBasket"
          :key="index"
        >
          <img :src="item.img" alt="" class="basket-wrapper_item-img" />
          <div class="basket-wrapper_item-container">
            <h3 class="basket-wrapper_item-title">{{ item.title }}</h3>
            <p class="basket-wrapper_item-text">{{ item.description }}</p>
            <p class="basket-wrapper_item-price">£{{ item.price }}</p>
          </div>
        </div>
        <button class="basket-wrapper_btn">Total £{{ totalItem }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getBasket() {
      return this.$store.getters.getBasket;
    },
    totalItem: function () {
      let sum = 0;
      this.$store.getters.getBasket.forEach(function (item) {
        sum += parseFloat(item.price);
      });

      return sum;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/basket.scss";
</style>
