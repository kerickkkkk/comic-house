import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper.scss'


const app = createApp(App)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.use(store).use(VueAxios, axios).use(router).use(VueSweetalert2).mount('#app')
