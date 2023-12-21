import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import { createPinia } from "pinia";
import Home from "@/Vues/pages/Home.vue";
import Shop from "@/Vues/pages/Shop.vue";
import Contact from "@/Vues/pages/Contact.vue";
import Login from "@/Vues/pages/Login.vue";
import Product from "@/Vues/pages/Product.vue";
import ShoppingCart from "@/Vues/pages/ShoppingCart.vue";
import Checkout from "@/Vues/pages/Checkout.vue";
import Bevestiging from "@/Vues/pages/Bevestiging.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/shop", component: Shop, name: "shop" },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/login", component: Login, name: "login" },
  { path: "/shoppingcart", component: ShoppingCart, name: "shoppingcart" },
  { path: "/checkout", component: Checkout, name: "checkout" },
  { path: "/bevestiging", component: Bevestiging, name: "bevestiging" },
  { path: "/product/:productId", component: Product, name: "product" },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
