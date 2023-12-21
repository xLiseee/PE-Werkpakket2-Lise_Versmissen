<script>
import { useWinkelmandjeStore } from "@/stores/winkelmandje.js";

export default {
  props: ["product"],
  data() {
    return {
      aantal: 1,
    };
  },
  methods: {
    voegToe() {
      const winkelmandje = useWinkelmandjeStore();

      if (this.product.stock < this.aantal) {
        alert("Er is niet genoeg voorraad van dit product");
        return;
      }

      winkelmandje.voegProducttoe(this.product, this.aantal);

      this.$router.push("/shoppingcart");
    },
  },
};
</script>

<template>
  <main>
    <router-link to="/shop">
      <button class="go-back">
        <svg
          class="icon icon-tabler icon-tabler-arrow-big-left-filled"
          fill="none"
          height="24"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" stroke="none" />
          <path
            d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
            fill="currentColor"
            stroke-width="0"
          />
        </svg>
      </button>
    </router-link>

    <div class="product-detail">
      <div class="product-image">
        <img :alt="product.titel" v-bind:src="product.afbeelding" />
      </div>
      <div class="product-info">
        <div>
          <h1>{{ product.titel }}</h1>
          <p>
            {{ product.omschrijving }}
          </p>
          <p v-if="product.stock > 0">
            We hebben nog {{ product.stock }} stuks op voorraad.
          </p>
          <p v-else>Sorry, dit product is uitverkocht!</p>
        </div>
        <br />
        <div>
          <h2>€{{ product.prijs }}</h2>
        </div>
        <br />
        <div v-if="product.stock > 0">
          <label for="quantity">Hoeveelheid: </label>
          <input
            id="quantity"
            v-model="aantal"
            :max="product.stock"
            min="1"
            type="number"
          />
          <button class="add-to-cart" @click="voegToe()">
            + In mijn winkelmandje
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
