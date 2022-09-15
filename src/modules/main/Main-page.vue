<template>
  <section class="main">
    <div class="hero">
      <div class="container">
        <div class="hero-blockinside">
          <h2 class="hero-blockinside_title">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p class="hero-blockinside_text">
            Shop the new Spring 2022 collection today
          </p>
          <router-link to="/products">
            <button class="hero-blockinside_button">View collection</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="features">
      <div class="container">
        <h3 class="features-title">What makes our brand different</h3>
        <div class="features-items">
          <div class="features-item">
            <img
              src="../../assets/icons/features-icons/features-delivery.svg"
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
              src="../../assets/icons/features-icons/features-checkmark.svg"
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
              src="../../assets/icons/features-icons/features-purchase.svg"
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
              src="../../assets/icons/features-icons/features-sprout.svg"
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
    <div class="features2">
      <div class="container">
        <div class="features2-wrapper">
          <div class="features2-wrapper_item">
            <h3 class="features2-wrapper_item-title">
              It started with a small idea
            </h3>
            <p class="features2-wrapper_item-text">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014
            </p>
            <router-link to="/products">
              <button class="features2-wrapper_item-btn">
                View collection
              </button>
            </router-link>
          </div>
          <div class="features2-wrapper_item features2-wrapper_item2"></div>
        </div>
      </div>
    </div>
    <div class="sign-up">
      <div class="container">
        <div class="sign-up-wrapper">
          <h2 class="sign-up-wrapper_title">
            Join the club and get the benefits
          </h2>
          <p class="sign-up-wrapper_text">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div class="sign-up-wrapper_items">
            <div class="sign-up-wrapper_item">
              <img
                src="../../assets/icons/checkmark.svg"
                alt="checkmark"
                class="sign-up-wrapper_item-img"
              />
              <p class="sign-up-wrapper_item-text">Exclusive offers</p>
            </div>
            <div class="sign-up-wrapper_item">
              <img
                src="../../assets/icons/checkmark.svg"
                alt="checkmark"
                class="sign-up-wrapper_item-img"
              />
              <p class="sign-up-wrapper_item-text">Free events</p>
            </div>
            <div class="sign-up-wrapper_item">
              <img
                src="../../assets/icons/checkmark.svg"
                alt="checkmark"
                class="sign-up-wrapper_item-img"
              />
              <p class="sign-up-wrapper_item-text">Large discounts</p>
            </div>
          </div>
          <form action="" class="sign-up-wrapper_form">
            <input
              type="email"
              name=""
              id="email"
              class="sign-up-wrapper_input"
              placeholder="your@email.com"
            />
            <button class="sign-up-wrapper_btn">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: "",
    };
  },

  created() {
    fetch("http://localhost:3000/products?limit=4")
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/hero.scss";
@import "./../../assets/css/features.scss";
@import "./../../assets/css/sign-up.scss";
@import "./../../assets/css/products.scss";
</style>
