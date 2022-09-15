import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import About from "./modules/about/About-page.vue";
import Main from "./modules/main/Main-page.vue";
import Products from "./modules/main/products/Product-page.vue";
import Admin from "./modules/admin/Admin-page.vue";
import Details from "./modules/main/products/Products-details.vue";
import Contact from "./modules/contact/Contact-page.vue";
import Basket from "./modules/basket/Basket-page.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/products/:id",
      name: "product",
      component: Details,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
  ],
});
