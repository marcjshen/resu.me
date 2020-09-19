import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from '../pages/Landing.vue';
import SignupLogin from '../pages/SignupLogin.vue';
import Onboarding from '../pages/Onboarding.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/signuplogin',
    name: 'signuplogin',
    component: SignupLogin
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: Onboarding
	}
	
];

const router = new VueRouter({
  mode: 'history',
  routes
});
  
export default router;