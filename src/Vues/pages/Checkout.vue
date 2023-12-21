<script>
import HeaderComponent from "@/Vues/components/HeaderComponent.vue";
import FooterComponent from "@/Vues/components/FooterComponent.vue";
import ShoppingCartComponent from "@/Vues/components/ShoppingCartComponent.vue";
import { useGebruikerStore } from "@/stores/gebruiker.js";

export default {
  components: { ShoppingCartComponent, FooterComponent, HeaderComponent },
  data() {
    const gebruiker = useGebruikerStore().gebruiker;

    if (gebruiker) {
      return {
        gebruikFactuurAdres: false,
        gegevens: {
          voornaam: gebruiker.voornaam,
          achternaam: gebruiker.achternaam,
          bezorgadres: {
            straat: gebruiker.straat,
            huisnummer: gebruiker.huisnummer,
            postcode: gebruiker.postcode,
            plaats: gebruiker.plaats,
          },
          factuuradres: {
            straat: "",
            huisnummer: "",
            postcode: "",
            plaats: "",
          },
        },
      };
    } else {
      return {
        gebruikFactuurAdres: false,
        gegevens: {
          voornaam: "",
          achternaam: "",
          bezorgadres: {
            straat: "",
            huisnummer: "",
            postcode: "",
            plaats: "",
          },
          factuuradres: {
            straat: "",
            huisnummer: "",
            postcode: "",
            plaats: "",
          },
        },
      };
    }
  },
};
</script>

<template>
  <div>
    <HeaderComponent />

    <div class="contact-container">
      <form>
        <h1>Checkout</h1>
        <br />
        <h3>Gegevens</h3>
        <label for="voornaam">Voornaam</label>
        <input
          v-model="gegevens.voornaam"
          name="voornaam"
          placeholder="Voornaam"
          type="text"
        />

        <label for="achternaam">Achternaam</label>
        <input
          v-model="gegevens.achternaam"
          name="achternaam"
          placeholder="Achternaam"
          type="text"
        />
        <br />
        <h3>Adres</h3>

        <div class="checkbox-container">
          <input
            v-model="gebruikFactuurAdres"
            class="checkbox"
            name="factuuradres"
            type="checkbox"
          />
          <label class="checkbox-label" for="factuuradres">
            Factuur adres is anders dan bezorgadres
          </label>
        </div>

        <br />

        <h3>Bezorgadres</h3>
        <br />
        <label for="bezorgadres-straat">Straat</label>
        <input
          v-model="gegevens.bezorgadres.straat"
          name="bezorgadres-straat"
          placeholder="Straat"
          type="text"
        />

        <label for="bezorgadres-huisnummer">Huisnummer</label>
        <input
          v-model="gegevens.bezorgadres.huisnummer"
          name="bezorgadres-huisnummer"
          placeholder="Huisnummer"
          type="text"
        />

        <label for="bezorgadres-postcode">Postcode</label>
        <input
          v-model="gegevens.bezorgadres.postcode"
          name="bezorgadres-postcode"
          placeholder="Postcode"
          type="text"
        />

        <label for="bezorgadres-plaats">Plaats</label>
        <input
          v-model="gegevens.bezorgadres.plaats"
          name="bezorgadres-plaats"
          placeholder="Plaats"
          type="text"
        />

        <div v-if="gebruikFactuurAdres">
          <h3>Factuuradres</h3>
          <label for="factuuradres-straat">Straat</label>
          <input
            v-model="gegevens.factuuradres.straat"
            name="factuuradres-straat"
            placeholder="Straat"
            type="text"
          />

          <label for="factuuradres-huisnummer">Huisnummer</label>
          <input
            v-model="gegevens.factuuradres.huisnummer"
            name="factuuradres-huisnummer"
            placeholder="Huisnummer"
            type="text"
          />

          <label for="factuuradres-postcode">Postcode</label>
          <input
            v-model="gegevens.factuuradres.postcode"
            name="factuuradres-postcode"
            placeholder="Postcode"
            type="text"
          />

          <label for="factuuradres-plaats">Plaats</label>
          <input
            v-model="gegevens.factuuradres.plaats"
            name="factuuradres-plaats"
            placeholder="Plaats"
            type="text"
          />
        </div>
        <br />
        <h2>Je bestelling</h2>
        <ShoppingCartComponent />

        <h2>Betaling</h2>

        <router-link to="/bevestiging"><button>Afrekenen</button></router-link>
      </form>
    </div>

    <FooterComponent />
  </div>
</template>

<style scoped></style>
