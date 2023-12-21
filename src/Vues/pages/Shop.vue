<script>
import HeaderComponent from "@/Vues/components/HeaderComponent.vue";
import PopulairProductsComponents from "@/Vues/components/PopulairProductsComponents.vue";
import FooterComponent from "@/Vues/components/FooterComponent.vue";
import { useProductsStore } from "@/stores/product.js";

export default {
  components: { FooterComponent, PopulairProductsComponents, HeaderComponent },
  computed: {
    categorie() {
      return this.$route.query.categorie;
    },
    pagina() {
      return this.$route.query.pagina || 0;
    },
    producten() {
      return useProductsStore().products;
    },
  },
};
</script>

<template>
  <div>
    <HeaderComponent />

    <section class="banner">
      <img alt="Banner Image" src="../../assets/DeLeuksteCadeautjes.png" />
    </section>
    <main>
      <div class="product-introduction">
        <h1>
          Ben je op zoek naar een uniek cadeautje voor jezelf of voor iemand
          anders? Hier vind je de aller leukste spulletjes!
        </h1>
      </div>
      <div class="container">
        <aside class="filter-zone">
          <h2>Categorieën</h2>
          <ul>
            <li>

              <router-link
                :to="{
                  name: 'shop',
                  query: { categorie: 'kleding' },
                }"
              >
                Kleding
              </router-link>
            </li>
            <li>
              <router-link
                :to="{
                  name: 'shop',
                  query: { categorie: 'kaartjes' },
                }"
                >Kaartjes
              </router-link>
            </li>

            <li>
              <router-link
                v-if="categorie"
                :to="{
                  name: 'shop',
                }"
                >Alle producten
              </router-link>
            </li>
          </ul>
        </aside>
        <section id="homepage-products">
          <PopulairProductsComponents
            v-bind:aantal="categorie ? producten.length : 8"
            v-bind:categorie="categorie"
            v-bind:pagina="pagina"
          />
        </section>
      </div>
      <div v-if="!categorie" class="pagination">
        <router-link
          v-if="pagina > 0"
          :to="{
            name: 'shop',
            query: { pagina: parseInt(pagina) - 1 },
          }"
          >&laquo;</router-link
        >
        <router-link
          v-for="product in Math.ceil(producten.length / 8)"
          :class="{ active: pagina == product - 1 }"
          :to="{
            name: 'shop',
            query: { pagina: product - 1 },
          }"
          >{{ product }}</router-link
        >
        <router-link
          v-if="pagina < producten.length / 8 - 1"
          :to="{
            name: 'shop',
            query: { pagina: parseInt(pagina) + 1 },
          }"
          >&raquo;</router-link
        >
      </div>
    </main>

    <FooterComponent />
  </div>
</template>
