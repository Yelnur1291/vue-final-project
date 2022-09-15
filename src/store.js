import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: "",
    basket: [],
  },
  mutation: {
    SET_BASKET(state, basket) {
      state.basket = basket;
    },
  },
  actions: {},
  getters: {
    getBasket: (state) => state.basket,
  },
});

export default store;
