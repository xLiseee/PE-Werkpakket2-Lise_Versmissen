<script>
import HeaderComponent from "@/Vues/components/HeaderComponent.vue";
import FooterComponent from "@/Vues/components/FooterComponent.vue";
import ShoppingCartComponent from "@/Vues/components/ShoppingCartComponent.vue";
import { useWinkelmandjeStore } from "@/stores/winkelmandje.js";

export default {
  components: { FooterComponent, ShoppingCartComponent, HeaderComponent },
  computed: {
    winkelmandje() {
      return useWinkelmandjeStore().winkelmandje;
    },
  },
};
</script>

<template>
  <div>
    <HeaderComponent />
    <div class="contact-container">
      <ShoppingCartComponent aanpasbaar />

      <router-link v-if="winkelmandje.length > 0" to="/checkout"
        ><button class="main-button">Afrekenen</button></router-link
      >
    </div>

    <FooterComponent />
  </div>
</template>
