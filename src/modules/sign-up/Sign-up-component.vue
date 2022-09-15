<template>
  <div class="sign-up">
    <div class="container">
      <div class="sign-up-wrapper">
        <h2 class="sign-up-wrapper_title">
          Join the club and get the benefits
        </h2>
        <p class="sign-up-wrapper_text">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/sign-up.scss";
</style>
