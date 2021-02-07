<template>
  <div class="d-flex flex-wrap align-items-stretch justify-content-center">
    <div v-for="product in state.products" :key="product.id">
      <ProductCard :product="product" />
    </div>
    <div class="container-fluid d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li
            class="page-item"
            v-for="page in Number((state.products.length / 10).toFixed())"
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
import { computed, onMounted, reactive } from "vue";
import ProductCard from "./ProductCard.vue";
import { useStore } from "vuex";
export default {
  components: { ProductCard },
  setup() {
    const store = useStore();
    const state = reactive({
      products: computed(() => store.state.products),
    });
    onMounted(() => {
      store.dispatch("getProducts");
    });
    return { state };
  },
};
</script>

<style></style>
