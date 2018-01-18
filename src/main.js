import Vue from 'vue'
import routes from './routes'

import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VLink from './components/VLink.vue'
Vue.component('v-link', VLink);

import HeaderOne from './partials/HeaderOne/HeaderOne.vue'
Vue.component('header-one', HeaderOne);

import FooterOne from './partials/FooterOne/FooterOne.vue'
Vue.component('footer-one', FooterOne);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

const app = new Vue({
    router
}).$mount('#app');