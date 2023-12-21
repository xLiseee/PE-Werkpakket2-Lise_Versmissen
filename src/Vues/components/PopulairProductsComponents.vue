<script>
import { useProductsStore } from "@/stores/product.js";

export default {
  props: {
    aantal: {
      type: Number,
      required: false,
      default: 8,
    },
    pagina: {
      type: Number,
      required: false,
      default: 0,
    },
    categorie: {
      type: String,
      required: false,
    },
  },
  computed: {
    gefilterdeProducten() {
      const productsStore = useProductsStore();
      let products = productsStore.products;

      products.sort((a, b) => {
        return b.stock - a.stock;
      });

      if (this.categorie) {
        products = products.filter((product) => {
          return product.categorie === this.categorie;
        });
      }

      return products.slice(
        this.pagina * this.aantal,
        this.pagina * this.aantal + this.aantal,
      );
    },
  },
};
</script>

<template>
  <router-link
    v-for="product in gefilterdeProducten"
    :to="'/product/' + product.id"
    class="product-card"
  >
    <img :alt="product.titel" v-bind:src="product.afbeelding" />

    <h3>{{ product.titel }}</h3>
    <p>{{ product.omschrijving }}</p>
    <button>
      <svg
        class="icon icon-tabler icon-tabler-shopping-bag-plus"
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
          d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"
        />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
        <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
      </svg>
    </button>
  </router-link>
</template>

<style scoped></style>
