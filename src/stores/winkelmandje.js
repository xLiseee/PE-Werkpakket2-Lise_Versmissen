import { defineStore } from "pinia";

export const useWinkelmandjeStore = defineStore("winkelmandje", {
  state: () => {
    return {
      winkelmandje: [],
    };
  },
  getters: {
    totaalPrijs() {
      return this.winkelmandje
        .reduce((acc, product) => {
          return acc + product.prijs * product.aantal;
        }, 0)
        .toFixed(2);
    },
    totaalAantal() {
      return this.winkelmandje.reduce((acc, product) => {
        return acc + product.aantal;
      }, 0);
    },
    totaalBtw() {
      return this.winkelmandje
        .reduce((acc, product) => {
          return acc + product.prijs * product.btw * product.aantal;
        }, 0)
        .toFixed(2);
    },
  },
  actions: {
    voegProducttoe(product, aantal) {
      const productInWinkelmandje = this.winkelmandje.find(
        (item) => item.id === product.id,
      );

      if (productInWinkelmandje) {
        productInWinkelmandje.aantal += aantal;
      } else {
        this.winkelmandje.push({ ...product, aantal: aantal });
      }
    },
    verwijderProduct(product) {
      const productInWinkelmandje = this.winkelmandje.find(
        (item) => item.id === product.id,
      );

      if (productInWinkelmandje) {
        this.winkelmandje.splice(
          this.winkelmandje.indexOf(productInWinkelmandje),
          1,
        );
      }
    },
    leegmaken() {
      this.winkelmandje = [];
    },
  },
});
