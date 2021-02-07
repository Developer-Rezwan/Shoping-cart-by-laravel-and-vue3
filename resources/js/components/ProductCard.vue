<template>
  <div class="mb-3 mx-2">
    <div class="card" style="width: 18rem">
      <img :src="product.image.substr(7)" class="card-img-top" :alt="product.title" />
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }"
            >{{ product.title.substr(0, 20) }}..</router-link
          >
        </h5>
        <h3>${{ product.price }}</h3>
        <p class="card-text">{{ product.description.substr(0, 80) }}....</p>
        <a href="#" class="btn btn-primary" @click.prevent="addToCart()">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: {
    product: Object,
  },
  setup(props) {
    const store = useStore();
    function addToCart() {
      store.dispatch("addProductToCart", {
        product: props.product,
        quantity: 1,
      });
    }
    return { addToCart };
  },
};
</script>

<style></style>
