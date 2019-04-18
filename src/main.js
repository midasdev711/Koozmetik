// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import Slick from 'vue-slick';
window.$ = require('jquery')
window.JQuery = require('jquery')
import VueSweetalert2 from 'vue-sweetalert2';
import VueEventBus from 'vue-event-bus';

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueStripeCheckout from 'vue-stripe-checkout';
const options = {
  key: 'pk_test_wXCQdV0TJkeBJGoBidj25ugV',
  image: '',
  locale: 'auto',
  currency: 'EUR',
  billingAddress: true,
  panelLabel: 'Pay{{amount}}'
}
 
Vue.use(require('vue-moment'));

Vue.use(VueStripeCheckout, options);

Vue.use(VueAxios, axios)
Vue.use(VueEventBus)
Vue.use(VueSweetalert2);
Vue.use(Slick);
Vue.axios.defaults.baseURL = `https://koozmetik.beauty-insights.com/api/`;
const Token= localStorage.getItem("koozmetikToken");
if(Token){
  // Vue.axios.defaults.headers={
  //   'Authorization': 'Bearer '+Token
  // }
}

export const globalStore = new Vue({
  data: {
    LangDomain: '?site__domain=koozmetik.co',
    LangDomainHome: 'site__domain=koozmetik.co',
    RedirectFR:'javascript:',
    RedirectEN:'javascript:',
    RedirectME:'javascript:',
    RedirectRS:'javascript:',
    ClientId:'TNG5opFxDjSLb0NSeYtDels00qH9d60J9edRLHNe',
    ClientSecret:'oGEB0rbblEkkvrf5jbTVPpKOReH3AEelAOPsDom3VZ4K8aV2uWsxMOJlUoJV9D8GhPZWT9qaX545DITkwjZ0llC9WlepSDQNv7J5aRUpw9H0AEqLuho91k1CpgidbTCw',
    StripeSecretKey:'sk_test_kRgYOeNMJvKlZNIPNmqN3NEq'
  }
})
/* eslint-disable no-new */
new Vue({
  router,               // Add this line
  render: h => h(App)
}).$mount('#app')

