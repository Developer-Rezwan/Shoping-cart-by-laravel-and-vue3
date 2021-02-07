<template>
  <div class="card mb-3 mt-5 shadow" style="max-width: 840px">
    <div class="row">
      <div class="col-md-4">
        <img src="https:via.placeholder.com/250x250" :alt="state.product.title" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ state.product.title }}</h5>
          <p class="card-text">
            {{ state.product.description }}
          </p>
          <div class="d-flex">
            <div class="form-group col-2 mx-3">
              <input
                type="number"
                pattern="{[0-9]+}"
                class="form-control"
                v-model="state.quantity"
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
              state.moment(state.product.created_at).fromNow()
            }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const state = reactive({
      quantity: 1,
      moment: moment,
      product: computed(() => store.state.product),
    });
    onMounted(() => {
      store.dispatch("getProduct", props.id);
    });
    function addToCart() {
      store.dispatch("addProductToCart", {
        product: state.product,
        quantity:
          Number(state.quantity) < 0
            ? Number(state.quantity) * -1
            : Number(state.quantity),
      });
    }
    return { state, addToCart };
  },
};
</script>

<style></style>
