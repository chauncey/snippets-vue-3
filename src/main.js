import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueFire from 'vuefire';

Vue.config.productionTip = false;

import '@/assets/main.scss';

Vue.use(VueFire);

/* eslint-disable no-new */
// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
