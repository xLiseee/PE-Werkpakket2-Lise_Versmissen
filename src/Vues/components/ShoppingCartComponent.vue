<script>
import { useWinkelmandjeStore } from "@/stores/winkelmandje.js";

export default {
  props: {
    aanpasbaar: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    winkelmandje() {
      return useWinkelmandjeStore().winkelmandje;
    },
    totaal() {
      return useWinkelmandjeStore().totaalPrijs;
    },
    totaalBtw() {
      return useWinkelmandjeStore().totaalBtw;
    },
  },
  methods: {
    verwijder(product) {
      useWinkelmandjeStore().verwijderProduct(product);

      this.winkelmandje = useWinkelmandjeStore().winkelmandje;
      this.totaal = useWinkelmandjeStore().totaalPrijs;
      this.totaalBtw = useWinkelmandjeStore().totaalBtw;
    },
  },
};
</script>

<template>
  <main>
    <div v-if="winkelmandje.length === 0" class="info">
      <p>Helaas je winkelmandje is leeg op dit moment...</p>
    </div>
    <div v-else class="winkelmandje">
      <ul class="winkelmandje-items">
        <li v-for="item in winkelmandje" class="winkelmandje-item">
          <img :alt="item.titel" :src="item.afbeelding" class="afbeelding" />
          <p class="titel">{{ item.aantal }} x {{ item.titel }}</p>
          <p class="stukprijs">Prijs per stuk: €{{ item.prijs }}</p>
          <p class="totaalprijs">Totaal: €{{ item.aantal * item.prijs }}</p>
          <p class="btw">
            Waarvan BTW: €{{ (item.aantal * item.prijs * item.btw).toFixed(2) }}
          </p>
          <button v-if="aanpasbaar" class="verwijder" @click="verwijder(item)">
            Verwijder uit mandje
          </button>
        </li>
      </ul>

      <div class="winkelmandje-totaal">
        <h2 class="totaalprijs">
          Totaal: €
          {{ totaal }}
        </h2>
        <h2 class="btw">
          Waarvan BTW: €
          {{ totaalBtw }}
        </h2>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
