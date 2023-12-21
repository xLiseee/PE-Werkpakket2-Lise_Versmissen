<script>
import HeaderComponent from "@/Vues/components/HeaderComponent.vue";
import FooterComponent from "@/Vues/components/FooterComponent.vue";
import { useGebruikerStore } from "@/stores/gebruiker.js";

export default {
  components: { FooterComponent, HeaderComponent },
  data() {
    const gebruiker = useGebruikerStore().gebruiker;

    return {
      gebruiker: gebruiker,
      email: "",
      passwoord: "",
    };
  },
  methods: {
    login() {
      if (this.email === "lise@pxl.be" && this.passwoord === "pxl") {
        useGebruikerStore().setGebruiker({
          email: "lise@pxl.be",
          voornaam: "Lise",
          achternaam: "Versmissen",
          straat: "Gagelveld",
          huisnummer: "25",
          postcode: "2275",
          plaats: "Lille",
        });

        this.$router.push({ name: "shop" });
      } else {
        alert("Die combinatie van email en wachtwoord is niet correct");
      }
    },
    afmelden() {
      useGebruikerStore().setGebruiker(null);
      location.reload();
    },
  },
};
</script>

<template>
  <div>
    <HeaderComponent />

    <main>
      <div class="login-container">
        <h1>Meld je aan</h1>
        <form v-if="!gebruiker" class="login-form">
          <label for="email">Email:</label>
          <input
            v-model="email"
            name="email"
            placeholder="Email"
            required
            type="email"
          />

          <label for="password">Password:</label>
          <input
            v-model="passwoord"
            name="password"
            placeholder="Password"
            required
            type="password"
          />
          <a class="forgot-password" href="#">Forgot your password?</a>

          <button type="submit" @click="login()">Login</button>
        </form>
        <div v-else>
          <h1>Welkom terug {{ gebruiker.voornaam }}</h1>
          <button @click="afmelden()">Afmelden</button>
        </div>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>
