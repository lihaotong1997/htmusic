// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from"axios"
import 'swiper/css/swiper.css';
import Element from 'element-ui'
Vue.use(Element)
import "element-ui/lib/theme-chalk/index.css"
Vue.prototype.$http=Axios
import "../static/swiper.min.css"
import less from "less"
Vue.use(less)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
