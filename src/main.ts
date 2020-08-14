import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import Layout from '@/views/Layout.vue';
import Icon from '@/components/common/Icon.vue';
import NavBar from '@/components/navbar/NavBar.vue';

Vue.config.productionTip = false

// Vue.component('Layout', Layout)
Vue.component('Icon', Icon)
Vue.component('NavBar', NavBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};
