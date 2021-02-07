<template>
  <div
    class="dropdown-menu p-2"
    id="dp"
    aria-labelledby="navbarDropdown"
    @click="$event.stopPropagation()"
  >
    <div class="border p-2">
      <template v-for="item in cart" :key="item.product.id">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />
          <div class="d-flex justify-content-between">
            {{ item.quantity }} x ${{ item.product.price }}
            <button class="badge btn text-danger">remove</button>
          </div>
          <hr />
        </div>
      </template>
      <div class="d-flex justify-content-between">
        <strong>Total : ${{ totalPrice }}</strong>
        <button class="text-danger justify-content-between btn btn-sm">clear cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);
    const totalPrice = computed(() => store.getters.totalPrice);
    return { cart, totalPrice };
  },
};
</script>

<style>
#dp {
  min-width: 320px;
  right: 0px;
  left: auto;
}
</style>
