import { defineStore } from "pinia";

export const useGebruikerStore = defineStore("gebruiker", {
  state() {
    return {
      gebruiker: null,
    };
  },
  actions: {
    setGebruiker(gebruiker) {
      this.gebruiker = gebruiker;
    },
  },
});
