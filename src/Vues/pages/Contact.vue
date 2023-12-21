<script setup>
import FooterComponent from "@/Vues/components/FooterComponent.vue";
import HeaderComponent from "@/Vues/components/HeaderComponent.vue";
</script>

<template>
  <div>
    <HeaderComponent />

    <main>
      <section class="banner">
        <img alt="Banner Image" src="../../assets/contact.png" />
      </section>
      <div class="contact-container">
        <h1>
          Heb je een vraag of opmerking? Neem dan contact met ons op via het
          onderstaande formulier.
        </h1>
        <form action="submit_form.php" method="POST">
          <label for="name">Naam & Voornaam:</label>
          <input id="name" name="name" required type="text" />

          <label for="email">Email:</label>
          <input id="email" name="email" required type="email" />

          <label for="subject">Onderwerp:</label>
          <input id="subject" name="subject" required type="text" />

          <label for="message">Bericht:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Verzenden</button>
        </form>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>
