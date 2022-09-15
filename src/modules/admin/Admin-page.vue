<template>
  <div class="admin">
    <div class="container">
      <form class="form">
        <label for="image">Image URL</label>
        <input type="text" id="image" v-model="products.img" />
        <label for="title">Title</label>
        <input type="text" id="title" v-model="products.title" />
        <label for="price">Price</label>
        <input type="text" id="price" v-model="products.price" />
        <label for="category">Category</label>
        <input type="text" id="category" v-model="products.category" />
        <label for="quantity">Quantity</label>
        <input type="text" id="quantity" v-model="products.quantity" />
        <label for="height">Height</label>
        <input type="text" id="height" v-model="products.height" />
        <label for="width">Width</label>
        <input type="text" id="width" v-model="products.width" />
        <label for="depth">Depth</label>
        <input type="text" id="depth" v-model="products.depth" />
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="15"
          v-model="products.description"
        ></textarea>
        <button type="button" @click="addProducts()">Add product</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        img: "",
        title: "",
        price: "",
        category: "",
        quantity: "",
        height: "",
        width: "",
        depth: "",
        description: "",
      },
    };
  },
  methods: {
    addProducts() {
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.products),
      });
    },
  },
};
</script>

<style lang="scss">
@import "./../../assets/css/admin.scss";
</style>
