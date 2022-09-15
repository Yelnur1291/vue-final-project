<template>
  <div class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-wrapper_item">
          <h4 class="footer-wrapper_item-title">Menu</h4>
          <p class="footer-wrapper_item-text">New arrivals</p>
          <p class="footer-wrapper_item-text">Best seller</p>
          <p class="footer-wrapper_item-text">Recently viewed</p>
          <p class="footer-wrapper_item-text">Popular this week</p>
          <p class="footer-wrapper_item-text">All products</p>
        </div>
        <div class="footer-wrapper_item">
          <h4 class="footer-wrapper_item-title">Categories</h4>
          <p class="footer-wrapper_item-text">Crockery</p>
          <p class="footer-wrapper_item-text">Furniture</p>
          <p class="footer-wrapper_item-text">Homeware</p>
          <p class="footer-wrapper_item-text">Plant pots</p>
          <p class="footer-wrapper_item-text">Chairs</p>
        </div>
        <div class="footer-wrapper_item">
          <h4 class="footer-wrapper_item-title">Our Company</h4>
          <router-link to="/about">
            <p class="footer-wrapper_item-text">About us</p>
          </router-link>
          <p class="footer-wrapper_item-text">Vacancies</p>
          <router-link to="/">
            <p class="footer-wrapper_item-text">Contact us</p>
          </router-link>
          <p class="footer-wrapper_item-text">Privacy</p>
          <router-link to="/admin">
            <p class="footer-wrapper_item-text">Admin</p>
          </router-link>
        </div>
        <div class="footer-wrapper_item">
          <h4 class="footer-wrapper_item-title">Join our mailing list</h4>
          <form action="" class="footer-wrapper_item-form">
            <input
              type="email"
              name="sign"
              id="Sign"
              class="footer-wrapper_item-input"
              placeholder="your@email.com"
            />
            <button class="footer-wrapper_item-btn">Sign up</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom_left">
          <p class="footer-bottom_left-text">Copyright 2022 Avion LTD</p>
        </div>
        <div class="footer-bottom_right">
          <a href="#!">
            <img
              src="../../assets/icons/logo-linkedin.svg"
              alt="logo"
              class="footer-bottom_right-icons"
          /></a>
          <a href="#!">
            <img
              src="../../assets/icons/logo-facebook.svg"
              alt="logo"
              class="footer-bottom_right-icons"
          /></a>
          <a href="#!">
            <img
              src="../../assets/icons/logo-instagram.svg"
              alt="logo"
              class="footer-bottom_right-icons"
          /></a>

          <a href="#!">
            <img
              src="../../assets/icons/logo-skype.svg"
              alt="logo"
              class="footer-bottom_right-icons"
          /></a>

          <a href="#!">
            <img
              src="../../assets/icons/logo-twitter.svg"
              alt="logo"
              class="footer-bottom_right-icons"
          /></a>

          <a href="#!">
            <img
              src="../../assets/icons/logo-pininterest.svg"
              alt="logo"
              class="footer-bottom_right-icons"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/footer.scss";
</style>
