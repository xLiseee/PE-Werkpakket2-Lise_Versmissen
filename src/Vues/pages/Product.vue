<script setup>
import HeaderComponent from "@/Vues/components/HeaderComponent.vue";
import FooterComponent from "@/Vues/components/FooterComponent.vue";
import ProductCardComponent from "@/Vues/components/ProductCardComponent.vue";
import { useProductsStore } from "@/stores/product.js";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const productId = route.params.productId;

const productsStore = useProductsStore();

const product = productsStore.products.find((p) => {
  return p.id === productId;
});

if (!product) {
  router.push("/");
}
</script>

<template>
  <div>
    <HeaderComponent />
    <ProductCardComponent v-bind:product="product" />
    <FooterComponent />
  </div>
</template>
