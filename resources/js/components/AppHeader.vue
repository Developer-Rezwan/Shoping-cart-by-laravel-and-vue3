<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shopping Card</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
        </ul>
      </div>
      <div class="mr-5">
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-dark"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ countCartItem }} cart
          </a>
          <MiniCart />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import MiniCart from "./MiniCart.vue";
export default {
  components: { MiniCart },
  computed: {
    ...mapGetters(["countCartItem"]),
  },
  setup() {
    return {};
  },
};
</script>

<style>
.mr-5 {
  margin-right: 50px;
}
</style>
