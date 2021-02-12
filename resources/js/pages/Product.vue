<template>
  <div class="card mb-3 mt-5 shadow" style="max-width: 840px">
    <div class="row">
      <div class="col-md-4">
        <img src="https:via.placeholder.com/250x250" :alt="product.title" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <div class="d-flex">
            <div class="form-group col-2 mx-3">
              <input
                type="number"
                pattern="{[0-9]+}"
                class="form-control"
                v-model.number="state.quantity"
              />
            </div>
            <br />
            <span>
              <button class="btn btn-success" @click.prevent="addToCart">
                Add to cart
              </button>
            </span>
          </div>
          <p class="card-text">
            <small class="text-muted">{{
              state.moment(product.created_at).fromNow()
            }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { reactive } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  props: {
    id: String,
  },
  computed: {
    ...mapState({
      product: (state) => state.product.product,
    }),
  },
  mounted() {
    this.getProduct(this.id);
  },
  methods: {
    ...mapActions(["getProduct", "addProductToCart"]),
    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity:
          Number(this.state.quantity) < 0
            ? Number(this.state.quantity) * -1
            : Number(this.state.quantity),
      });
    },
  },
  setup() {
    const state = reactive({
      quantity: 1,
      moment: moment,
    });
    return { state };
  },
};
</script>

<style></style>
