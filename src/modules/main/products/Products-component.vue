<template>
  <div class="products">
    <div class="container">
      <div class="products-wrapper products-wrapper_1">
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
        <router-link to="/products">
          <button class="products-item_button">View collection</button>
        </router-link>
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

  // methods: {
  //   reloadPage() {
  //     window.location.reload(5000);
  //   },
  // },

  created() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },
};
</script>

<style lang="scss">
@import "../../../assets/css/products.scss";
</style>
