<script>
import HeaderComponent from "@/Vues/components/HeaderComponent.vue";
import FooterComponent from "@/Vues/components/FooterComponent.vue";
import { useWinkelmandjeStore } from "@/stores/winkelmandje.js";

export default {
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      winkelmandje: useWinkelmandjeStore().winkelmandje,
    };
  },
  methods: {
    terugNaarHome() {
      useWinkelmandjeStore().leegmaken();

      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div>
    <HeaderComponent />
    <div class="contact-container">
      <h1>Bevestiging</h1>
      <p>
        We hebben je bestelling ontvangen en zullen deze zo snel mogelijk
        verwerken.
      </p>
      <br />

      <h2>Je bestelling</h2>
      <ul>
        <li v-for="item in winkelmandje">
          <p>{{ item.aantal }} x {{ item.titel }}</p>
        </li>
      </ul>

      <button class="main-button" @click="terugNaarHome()">
        Terug naar de homepagina
      </button>
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
