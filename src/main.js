// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import vMediaQuery from 'v-media-query';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(vMediaQuery);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
