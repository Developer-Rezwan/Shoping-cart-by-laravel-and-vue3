<template>
  <div class="d-flex flex-wrap align-items-stretch justify-content-center">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
    <div class="container-fluid d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li
            class="page-item"
            v-for="page in Number((products.length / 10).toFixed())"
            :key="page"
          >
            <a class="page-link" href="#">{{ page }}</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { ProductCard },
  computed: {
    ...mapState("product", ["products"]),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
  },
};
</script>

<style></style>
