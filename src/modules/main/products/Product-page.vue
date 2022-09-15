<template>
  <div class="products">
    <div class="products-header">
      <h2 class="products-header_title">All products</h2>
    </div>
    <div class="container">
      <div class="products-wrapper">
        <div
          class="products-item"
          v-for="(product, index) in products"
          :key="index"
        >
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img :src="product.img" alt="" class="products-item_img" />
            <h4 class="products-item_title">{{ product.title }}</h4>
            <p class="products-item_price">£{{ product.price }}</p>
          </router-link>
        </div>
      </div>
      <div class="products-buttons">
        <button class="products-item_button">View more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: "",
    };
  },

  created() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "./../../../assets/css/products.scss";
</style>
