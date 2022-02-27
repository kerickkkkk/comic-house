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
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core'

// 引入 font awesome
import 'font-awesome/css/font-awesome.min.css' 
// Import Swiper styles
// 改用 css 引入 部屬到 gh-pages 會有問題
// import 'swiper/swiper.scss'
// import 'swiper/components/pagination/pagination.min.css'
// import 'swiper/components/navigation/navigation.min.css'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

const app = createApp(App)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.use(store).use(VueAxios, axios).use(router).use(VueSweetalert2).mount('#app')
