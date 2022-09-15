<template>
  <section class="product">
    <div class="details">
      <div class="container">
        <div class="details-wrapper">
          <img :src="products.img" alt="" class="details-wrapper_img" />
          <div class="deatils-wrapper_info">
            <h3 class="details-wrapper_info-title">{{ products.title }}</h3>
            <div class="details-wrapper_info-price">£{{ products.price }}</div>
            <div class="details-wrapper_info-desc-box">
              <h4 class="details-wrapper_info-desc-box_title">
                Product description
              </h4>
              <p class="details-wrapper_info-desc-box_text">
                {{ products.description }}
              </p>
            </div>
            <div class="details-wrapper_dimensions">
              <h3 class="details-wrapper_dimensions-title">Dimensions</h3>
              <div class="details-wrapper_dimensions-boxes">
                <div class="details-wrapper_dimensions-height">
                  <h4 class="details-wrapper_dimensions-title2">Height</h4>
                  <p class="details-wrapper_dimensions-text">
                    {{ products.height }}cm
                  </p>
                </div>
                <div class="details-wrapper_dimensions-width">
                  <h4 class="details-wrapper_dimensions-title2">Width</h4>
                  <p class="details-wrapper_dimensions-text">
                    {{ products.width }}cm
                  </p>
                </div>
                <div class="details-wrapper_dimensions-depth">
                  <h4 class="details-wrapper_dimensions-title2">Depth</h4>
                  <p class="details-wrapper_dimensions-text">
                    {{ products.depth }}cm
                  </p>
                </div>
              </div>
              <div class="cart">
                <button @click="addToBasket(products)" class="cart-btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-comp">
      <h3 class="product-comp_title">You might also like</h3>
      <products-component></products-component>
    </div>
    <div class="features">
      <div class="container">
        <h3 class="features-title">What makes our brand different</h3>
        <div class="features-items">
          <div class="features-item">
            <img
              src="../../../assets/icons/features-icons/features-delivery.svg"
              alt="delivery"
              class="features-item_icon"
            />
            <h4 class="features-item_title">Next day as standard</h4>
            <p class="features-item_text">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div class="features-item">
            <img
              src="../../../assets/icons/features-icons/features-checkmark.svg"
              alt="checkmark"
              class="features-item_icon"
            />
            <h4 class="features-item_title">Made by true artisans</h4>
            <p class="features-item_text">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div class="features-item">
            <img
              src="../../../assets/icons/features-icons/features-purchase.svg"
              alt="purchase"
              class="features-item_icon"
            />
            <h4 class="features-item_title">Unbeatable prices</h4>
            <p class="features-item_text">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div class="features-item">
            <img
              src="../../../assets/icons/features-icons/features-sprout.svg"
              alt="sprout"
              class="features-item_icon"
            />
            <h4 class="features-item_title">Recycled packaging</h4>
            <p class="features-item_text">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductsComponent from "./Products-component.vue";
export default {
  components: {
    ProductsComponent,
  },
  data() {
    return {
      products: "",
      productsId: this.$route.params,
      data: [],
    };
  },

  computed: {
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },

  created() {
    fetch(`http://localhost:3000/products/${this.productsId.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },

  methods: {
    addToBasket(item) {
      this.getBasket.push(item);
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/css/product-details.scss";
@import "../../../assets/css/features.scss";
</style>
