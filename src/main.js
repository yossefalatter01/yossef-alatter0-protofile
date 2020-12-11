import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import { Swiper, SwiperSlide } from 'swiper/vue';
// Vue.component('Swiper', Swiper);
// Vue.component('SwiperSlide', SwiperSlide);

Vue.component('font-awesome-icon', FontAwesomeIcon);
import "./scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
