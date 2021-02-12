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
            <button
              class="badge btn text-danger"
              @click.prevent="removeCartItem(item.product.id)"
            >
              remove
            </button>
          </div>
          <hr />
        </div>
      </template>
      <div class="d-flex justify-content-between">
        <strong>Total : ${{ totalPrice }}</strong>
        <button
          class="text-danger justify-content-between btn btn-sm"
          @click.prevent="clearAllTheCart()"
        >
          clear cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["totalPrice"]),
  },
  mounted() {
    this.addProductToCartFromDB();
  },
  methods: {
    ...mapActions("cart", [
      "removeCartItem",
      "clearAllTheCart",
      "addProductToCartFromDB",
    ]),
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
