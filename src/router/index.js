import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from '../pages/WelcomePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomePage,
    },
  ],
});
