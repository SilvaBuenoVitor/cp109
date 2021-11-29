import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import router from './router'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  vuetify,
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
